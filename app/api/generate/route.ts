import { GoogleGenerativeAI, Part } from "@google/generative-ai";

async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> {
  try {
    return await fn();
  } catch (err: any) {
    const statusCode = err?.status || err?.response?.status;
    const isRetryable = [429, 500, 503].includes(statusCode);

    if (retries <= 0 || !isRetryable) throw err;

    let retryDelay = delay;
    try {
      const parsedError = JSON.parse(err.message || "{}");
      const retryInfo = parsedError.errorDetails?.find((d: any) => d["@type"]?.includes("RetryInfo"));
      if (retryInfo?.retryDelay) {
        const match = retryInfo.retryDelay.match(/(\d+)s/);
        if (match) retryDelay = parseInt(match[1]) * 1000;
      }
    } catch (_) {
      // fallback to exponential backoff
    }

    console.warn(`⚠️ Retry ${4 - retries}/3 after ${retryDelay}ms...`);
    await new Promise((res) => setTimeout(res, retryDelay));
    return retryWithBackoff(fn, retries - 1, delay * 2);
  }
}


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, contentType, base64Image } = body;

    if (!prompt) {
      return new Response(JSON.stringify({ success: false, error: "Prompt is required" }), { status: 400 });
    }

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ success: false, error: "API key missing" }), { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const parts: (string | Part)[] = [];
    let promptText = `Generate ${contentType} content about "${prompt}".`;

    if (contentType === "twitter") {
      promptText += " Provide a thread of 5 tweets, each under 280 characters.";
    }

    parts.push(promptText);

    if (contentType === "instagram" && base64Image) {
      parts.push({
        inlineData: {
          data: base64Image,
          mimeType: "image/png",
        },
      });
    }

    const result = await retryWithBackoff(() => model.generateContent(parts));

    const text = result.response.text();

    return new Response(JSON.stringify({ success: true, text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err: any) {
    console.error("❌ Final API Error:", JSON.stringify(err, null, 2));
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to generate content",
        details: err?.message || "Unknown error",
        fullError: JSON.stringify(err, Object.getOwnPropertyNames(err)),
      }),
      { status: err?.status || 500 }
    );
  }
}
