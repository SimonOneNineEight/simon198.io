import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `data/posts/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: false,
    },
    slug: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: false,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (post) => `/posts/${post.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      rehypeMathjax,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
