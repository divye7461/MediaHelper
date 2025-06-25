import { Navbar } from "@/components/Navbar";

export default function APIReferencePage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <main className="container mx-auto px-8 py-20 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-white">API Reference</h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          Our REST API allows you to integrate AI content generation into your
          own applications or workflows. Below are key endpoints and usage
          examples.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          Authentication
        </h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md text-sm overflow-auto mb-4">
          GET /api/auth/token Header: Authorization: Bearer &lt;your-api-key&gt;
        </pre>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          Generate Content
        </h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md text-sm overflow-auto mb-4">
          POST /api/generate Body: &#123; "type": "thread", // or "caption",
          "linkedin" "prompt": "How to build a SaaS in 30 days" &#125;
        </pre>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          Retrieve History
        </h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md text-sm overflow-auto mb-4">
          GET /api/history Header: Authorization: Bearer &lt;your-api-key&gt;
        </pre>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          Rate Limits
        </h2>
        <p className="text-gray-400 mb-4">
          Free users: 20 requests/day
          <br />
          Pro users: 1,000 requests/day
          <br />
          Enterprise: Custom limits and SLAs
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          Error Codes
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>
            <code>401</code>: Unauthorized
          </li>
          <li>
            <code>429</code>: Rate limit exceeded
          </li>
          <li>
            <code>500</code>: Internal server error
          </li>
        </ul>

        <p className="text-gray-400">
          For SDKs and webhooks, visit our{" "}
          <a
            href="https://docs.yourplatform.com/sdk"
            className="text-blue-400 underline"
          >
            SDK documentation
          </a>
          .
        </p>
      </main>
    </div>
  );
}
