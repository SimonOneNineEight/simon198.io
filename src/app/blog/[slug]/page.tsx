import { Fragment } from "react";
import Balancer from "react-wrap-balancer";
import dayjs from "dayjs";

import { getPage, getBlocks } from "@/lib/notion";
import { renderBlock } from "@/utils";
import { Tags } from "@/components";

interface Props {
  params: {
    slug: string;
  };
}

const Blog = async ({ params }: Props) => {
  const pageId = params.slug;

  const page = await getPage(pageId);
  const blocks = await getBlocks(pageId);

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        <Balancer>{page.title}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
          {dayjs(page.created_time).format("YYYY-MM-DD")}
        </div>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
        <Tags tags={page.tags} />
      </div>
      {blocks.map((block, index) => {
        return <Fragment key={index}>{renderBlock(block)}</Fragment>;
      })}
    </section>
  );
};

export default Blog;
