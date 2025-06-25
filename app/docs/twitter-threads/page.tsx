import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function TwitterThreadsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <main className="container mx-auto px-8 py-20 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-white">Twitter Threads</h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          Twitter threads are a great way to tell stories, explain concepts, and
          engage your followers. This guide walks you through using AI to create
          compelling threads.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          1. Choose Your Topic
        </h2>
        <p className="text-gray-400 mb-4">
          Think about what you want to communicate — whether it’s a how-to
          guide, personal experience, or industry insight. Good threads start
          with a strong central idea.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          2. Input a Prompt
        </h2>
        <p className="text-gray-400 mb-4">
          In the content generation form, type a short prompt or topic idea
          (e.g., “How to grow a newsletter from 0 to 10K”). The AI will build a
          hook and supporting tweets.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          3. Review Structure
        </h2>
        <p className="text-gray-400 mb-4">
          The generated thread usually includes:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Hook tweet (grabs attention)</li>
          <li>5–10 body tweets (insights or steps)</li>
          <li>Final tweet (call to action or summary)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          4. Edit and Save
        </h2>
        <p className="text-gray-400 mb-4">
          You can refine tone, add emojis or hashtags, and reorder tweets. When
          done, save it to drafts or export for scheduling.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          5. Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Use numbered tweets (1/10, 2/10...)</li>
          <li>Break down complex ideas into simple language</li>
          <li>End with a question or CTA to drive engagement</li>
        </ul>

        <p className="text-gray-400">
          Need help integrating threads with other tools? Check the{" "}
          <Link href="/docs/api-reference" className="text-blue-400 underline">
            API Reference
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
