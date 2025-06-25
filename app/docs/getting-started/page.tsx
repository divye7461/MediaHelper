import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <main className="container mx-auto px-8 py-20 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-white">Getting Started</h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          Welcome to the AI Content Creator platform. This guide will walk you
          through the steps of creating an account, setting up your profile, and
          generating your first piece of AI content. If you're new here, this is
          the best place to begin.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          1. Create an Account
        </h2>
        <p className="text-gray-400 mb-4">
          Visit the{" "}
          <Link href="/signup" className="text-blue-400 underline">
            sign up page
          </Link>{" "}
          and register with your email. You can also use your Google or GitHub
          account for quick access. Once signed up, you’ll be redirected to the
          dashboard.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          2. Explore the Dashboard
        </h2>
        <p className="text-gray-400 mb-4">
          The dashboard is your control center. From here, you can:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>
            Generate AI content (Twitter threads, Instagram captions, LinkedIn
            posts)
          </li>
          <li>Access saved content and edit previous drafts</li>
          <li>
            Upgrade your plan or manage your billing (via{" "}
            <Link href="/billing" className="text-blue-400 underline">
              Billing Settings
            </Link>
            )
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          3. Generate Your First Content
        </h2>
        <p className="text-gray-400 mb-4">
          Click on "Create Content" from the sidebar. You’ll be prompted to
          select a content type:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>
            <Link
              href="/docs/twitter-threads"
              className="text-blue-400 underline"
            >
              Twitter Threads
            </Link>
          </li>
          <li>
            <Link
              href="/docs/instagram-captions"
              className="text-blue-400 underline"
            >
              Instagram Captions
            </Link>
          </li>
          <li>
            <Link
              href="/docs/linkedin-posts"
              className="text-blue-400 underline"
            >
              LinkedIn Posts
            </Link>
          </li>
        </ul>
        <p className="text-gray-400 mb-4">
          After choosing the type, provide a topic or prompt. Our AI will
          generate content tailored to your input.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          4. Save and Publish
        </h2>
        <p className="text-gray-400 mb-4">
          Once generated, you can edit the output and save it to your drafts.
          When you're ready, publish or export the content to your platform of
          choice.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          5. Need Help?
        </h2>
        <p className="text-gray-400 mb-4">
          Visit our{" "}
          <Link href="/docs/api-reference" className="text-blue-400 underline">
            API Reference
          </Link>{" "}
          to explore integration options or check out other guides in the{" "}
          <Link href="/docs" className="text-blue-400 underline">
            documentation section
          </Link>
          .
        </p>

        <p className="text-gray-400 mt-10">
          That’s it! You're ready to start creating high-quality content with
          AI. 🚀
        </p>
      </main>
    </div>
  );
}
