import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function LinkedInPostsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <main className="container mx-auto px-8 py-20 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-white">LinkedIn Posts</h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          Writing professional, engaging LinkedIn posts is now easier with AI.
          This guide covers how to write posts that build your brand, authority,
          and reach.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          1. Choose a Theme
        </h2>
        <p className="text-gray-400 mb-4">
          Decide whether your post will be a career insight, thought leadership,
          product update, or motivational note. Select it from the content type
          selector.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          2. Add Your Perspective
        </h2>
        <p className="text-gray-400 mb-4">
          AI works best when guided with your opinion or experience. Provide
          bullet points, context, or even a few key sentences for better
          personalization.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          3. Maintain Professional Tone
        </h2>
        <p className="text-gray-400 mb-4">
          By default, our AI outputs posts with a professional tone. You can
          switch to casual or inspirational tones via settings.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          4. Highlight Takeaways
        </h2>
        <p className="text-gray-400 mb-4">
          Emphasize key learnings, data points, or insights using short
          paragraphs and emojis (if applicable). The AI helps structure this
          naturally.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          5. Share and Schedule
        </h2>
        <p className="text-gray-400 mb-4">
          Finalize the post, and either copy it or schedule it using your
          preferred LinkedIn tool. We also support exporting to CSV or Markdown.
        </p>

        <p className="text-gray-400">
          Curious about content analytics and engagement tracking? Visit the{" "}
          <Link href="/docs/api-reference" className="text-blue-400 underline">
            API Reference
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
