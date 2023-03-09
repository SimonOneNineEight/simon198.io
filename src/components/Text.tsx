import { Fragment } from "react";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface IText {
  richTextArray: Array<RichTextItemResponse>;
  textClass?: string;
}

const Text = ({ richTextArray, textClass }: IText) => {
  if (!richTextArray) {
    return null;
  }
  return (
    <Fragment>
      {richTextArray.map((richText, index) => {
        const { type, annotations, plain_text } = richText;
        const { bold, code, color, italic, strikethrough, underline } =
          annotations;
        return (
          <span
            key={index}
            className={[
              textClass && textClass,
              bold ? "font-bold" : "",
              code
                ? "rounded dark:bg-gray-700 bg-gray-300 px-1 py-1 font-mono"
                : "",
              italic ? "italic" : "",
              strikethrough ? "line-through" : "",
              underline ? "underline" : "",
            ].join(" ")}
            style={color !== "default" ? { color } : {}}
          >
            {type === "text" ? (
              richText.text.link ? (
                <a href={richText.text.link.url} target="_blank">
                  {richText.text.content}
                </a>
              ) : (
                richText.text.content
              )
            ) : (
              plain_text
            )}
          </span>
        );
      })}
    </Fragment>
  );
};

export default Text;
