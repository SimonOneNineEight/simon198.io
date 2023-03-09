"use client";
import "@/styles/prism-one-dark.css";
import { useEffect } from "react";
import { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Prism from "prismjs";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-java");
require("prismjs/components/prism-cshtml");

interface ICode {
  id: string;
  block: CodeBlockObjectResponse;
}

const Code = ({ id, block }: ICode) => {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll(); // <--- prepare Prism
    };
    highlight(); // <--- call the async function
  }, [block]);

  return (
    <pre
      key={id}
      data-break-lines="20"
      className="my-5 overflow-auto rounded-lg bg-gray-700 px-4 py-6 leading-4 text-white"
    >
      <code
        className={`language-${block.code.language} block w-full break-words`}
        data-lang={block.code.language}
      >
        {block.code.rich_text.map((richText, index) => {
          console.log(richText);
          const { type, annotations, plain_text } = richText;
          const { bold, code, color, italic, strikethrough, underline } =
            annotations;
          return (
            <span
              key={index}
              className={[
                bold ? "font-bold" : "",
                code ? "rounded bg-blue-900 px-1 py-2 font-mono" : "",
                italic ? "italic" : "",
                strikethrough ? "line-through" : "",
                underline ? "underline" : "",
              ].join(" ")}
              style={color !== "default" ? { color } : {}}
            >
              {type === "text" ? richText.text.content : plain_text}
            </span>
          );
        })}
      </code>
    </pre>
  );
};

export default Code;
