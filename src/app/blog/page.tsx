import Link from "next/link";
import { sortedPost } from "@/lib/contentlayer";
import { Tags } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function Home() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {sortedPost.map((post) => (
        <>
          <Link
            key={post.slug}
            className="flex flex-col space-y-1"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="font-bold text-xl">{post.title}</p>
              <p className="text-sm line-clamp-2">{post.description}</p>
              {post.tags && <Tags tags={post.tags} />}
              <p className="font-bold text-sm">{"(繼續閱讀...)"}</p>
            </div>
          </Link>
          <div className="h-[0.1em] bg-neutral-50 dark:bg-neutral-800 m-4" />
        </>
      ))}
    </section>
  );
}
