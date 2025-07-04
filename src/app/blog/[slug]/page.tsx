import Balancer from "react-wrap-balancer";
import dayjs from "dayjs";
import Link from "next/link";
import type { Metadata } from "next";

import { Tags } from "@/components";
import { Mdx } from "@/components/Mdx";
import { sortedPost } from "@/lib/contentlayer";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return sortedPost.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const post = sortedPost.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedAt,
    description: description,
    slug,
  } = post;

  return {
    title,
    description,
  };
}

const Blog = async ({ params }: Props) => {
  const pageId = params.slug;

  const postIndex = sortedPost.findIndex((post) => post.slug === pageId);

  const post = sortedPost[postIndex];
  const nextPost = sortedPost[postIndex - 1];
  const previousPost = sortedPost[postIndex + 1];

  if (!post) return <div>Not found</div>;

  return (
    <>
      <section className="prose dark:prose-invert">
        <h1 className="font-bold text-3xl font-serif max-w-[650px]">
          <Balancer>{post.title}</Balancer>
        </h1>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
            {dayjs(post.publishedAt).format("YYYY-MM-DD")}
          </div>
          <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
          {post.tags && <Tags tags={post.tags} />}
        </div>
        <Mdx code={post.body} />
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
        <div className="bold justify-end mt-4">
          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="block text-right"
            >
              上一篇：
              <br />
              {previousPost.title}
            </Link>
          ) : (
            ""
          )}
          {nextPost ? (
            <Link href={`/blog/${nextPost.slug}`} className="block text-right">
              下一篇：
              <br />
              {nextPost.title}
            </Link>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
