import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function InstagramCaptionsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <main className="container mx-auto px-8 py-20 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-white">
          Instagram Captions
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          Learn how to generate scroll-stopping captions for your Instagram
          content. This guide helps you create on-brand, audience-specific
          captions using our AI.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          1. Pick a Caption Style
        </h2>
        <p className="text-gray-400 mb-4">
          Choose a caption format that matches your content: story,
          announcement, question, or CTA (call to action). The AI adapts tone
          and voice accordingly.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          2. Provide Context
        </h2>
        <p className="text-gray-400 mb-4">
          Add a photo description or message in the prompt field. Mention
          product features, location, or event. The more specific, the better
          the AI output.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          3. Tailor the Tone
        </h2>
        <p className="text-gray-400 mb-4">
          Select a tone: casual, witty, professional, emotional, etc. This sets
          the voice of the caption. Our AI supports tone-switching with high
          precision.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          4. Add Hashtags Automatically
        </h2>
        <p className="text-gray-400 mb-4">
          Toggle the hashtag suggestion feature to get a set of high-performing,
          niche-relevant hashtags along with your caption.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          5. Save & Use
        </h2>
        <p className="text-gray-400 mb-4">
          After reviewing, copy the caption or use our scheduler to directly
          publish it to Instagram. You can also save it as a preset for reuse.
        </p>

        <p className="text-gray-400">
          Want to auto-post? See{" "}
          <Link href="/docs/api-reference" className="text-blue-400 underline">
            API Reference
          </Link>{" "}
          for automation guides.
        </p>
      </main>
    </div>
  );
}
