import Head from "next/head";
import { BlogTitle, BlogPosts } from "@/components";
import type { Metadata } from "next";
import { BlogProvider } from "./provider";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, learning, and more.",
};

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
          integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn"
          crossOrigin="anonymous"
        />
      </Head>
      <section>
        <BlogProvider>
          <BlogTitle key="BlogTitle" />
          <BlogPosts key="BlogPosts" />
        </BlogProvider>
      </section>
    </>
  );
}
