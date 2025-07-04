import { defineConfig, defineCollection, s } from "velite";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeMathjax from "rehype-mathjax";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s
    .object({
      type: s.string().optional(),
      slug: s.slug(),
      title: s.string().max(99),
      description: s.string().optional(),
      publishedAt: s.union([s.isodate(), s.string(), s.null()]).optional(),
      tags: s.array(s.string()).default([]),
      body: s.mdx(),
    })
    .transform((data) => {
      // Convert publishedAt to ISO date if it's a string
      let publishedAt = data.publishedAt;
      if (typeof publishedAt === 'string' && publishedAt.length > 0) {
        // Handle YYYY-MM-DD format
        if (/^\d{4}-\d{2}-\d{2}$/.test(publishedAt)) {
          publishedAt = new Date(publishedAt + 'T00:00:00.000Z');
        } else {
          publishedAt = new Date(publishedAt);
        }
      } else {
        publishedAt = undefined;
      }

      return {
        ...data,
        path: `/posts/${data.slug}`,
        publishedAt,
      };
    })
    // Filter out unpublished posts (posts without publishedAt)
    .refine((data) => data.publishedAt !== undefined, {
      message: "Post must have a publishedAt date to be published",
    }),
});

export default defineConfig({
  root: "data",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
  },
  collections: { posts },
  mdx: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
    ],
    rehypePlugins: [
      [rehypeSlug],
      [rehypeMathjax],
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

