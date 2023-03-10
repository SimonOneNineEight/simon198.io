import { Fragment } from "react";
import Balancer from "react-wrap-balancer";
import dayjs from "dayjs";

import { allPosts } from "contentlayer/generated";
import { Tags } from "@/components";
import { Mdx } from "@/components/Mdx";

interface Props {
  params: {
    slug: string;
  };
}

const Blog = async ({ params }: Props) => {
  const pageId = params.slug;

  const post = allPosts.find((post) => post.slug === pageId);

  if (!post) return <div>Not found</div>;

  return (
    <section className="prose dark:prose-invert">
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
          {dayjs(post.date).format("YYYY-MM-DD")}
        </div>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
        {post.tags && <Tags tags={post.tags} />}
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
};

export default Blog;
