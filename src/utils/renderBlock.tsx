import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  PartialBlockObjectResponse,
  BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { Text } from "@/components";

const Code = dynamic(() => import("../components/Code"), { ssr: false });

const renderBlock = (
  block: BlockObjectResponse | PartialBlockObjectResponse
) => {
  if (!("type" in block)) {
    return;
  }

  const { type, id } = block;

  switch (type) {
    case "paragraph":
      return (
        <p className="mb-3 text-lg leading-7" key={id}>
          <Text richTextArray={block.paragraph.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className="my-3 text-4xl font-bold" key={id}>
          <Text richTextArray={block.heading_1.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="my-3 text-3xl font-bold" key={id}>
          <Text richTextArray={block.heading_2.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="my-3 text-2xl font-bold" key={id}>
          <Text richTextArray={block.heading_3.rich_text} />
        </h3>
      );
    case "bulleted_list_item":
      return (
        <li key={id}>
          <Text richTextArray={block.bulleted_list_item.rich_text} />
        </li>
      );
    case "numbered_list_item":
      return (
        <li key={id}>
          <Text richTextArray={block.numbered_list_item.rich_text} />
        </li>
      );
    case "to_do":
      return (
        <div key={id}>
          <label htmlFor={id}>
            <input
              type="checkbox"
              id={id}
              defaultChecked={block.to_do.checked}
            />{" "}
            {block.to_do.checked ? (
              <Text
                richTextArray={block.to_do.rich_text}
                textClass="text-gray-400 line-through"
              />
            ) : (
              <Text richTextArray={block.to_do.rich_text} />
            )}
          </label>
        </div>
      );
    case "toggle":
      return (
        <details key={id}>
          <summary>
            <Text richTextArray={block.toggle.rich_text} />
          </summary>
          {block.has_children &&
            //@ts-expect-error
            block.toggle.children?.map(
              (block: BlockObjectResponse | PartialBlockObjectResponse) => (
                <Fragment key={block.id}>{renderBlock(block)}</Fragment>
              )
            )}
        </details>
      );
    case "child_page":
      return <p key={id}>{block.child_page.title}</p>;
    case "image":
      const src =
        block.image.type === "external"
          ? block.image.external?.url
          : block.image.file?.url;
      const caption = block.image.caption
        ? block.image.caption[0]?.plain_text
        : "";
      return (
        <figure key={id}>
          <Image src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return (
        <blockquote
          key={id}
          className="mb-3 rounded border-l-4 bg-slate-100 bg-transparent py-2 pl-4"
        >
          <Text richTextArray={block.quote.rich_text} />
        </blockquote>
      );
    case "code":
      return <Code id={id} block={block} />;
    case "file":
      const src_file =
        block.file.type === "external"
          ? block.file.external?.url
          : block.file.file?.url;
      const splitSourceArray = src_file?.split("/");
      const lastElementInArray =
        splitSourceArray?.[splitSourceArray?.length - 1];
      const caption_file = block.file.caption
        ? block.file.caption[0]?.plain_text
        : "";
      return (
        <figure key={id}>
          <div className="cursor-pointer hover:bg-gray-700">
            📎{" "}
            <Link href={src_file || "#"} passHref>
              {lastElementInArray?.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    default:
      return (
        <div key={id}>
          `❌ Unsupported block ($
          {type === "unsupported" ? "unsupported by Notion API" : type})`
        </div>
      );
  }
};

export default renderBlock;
