import { allPosts } from "contentlayer/generated";
import dayjs from "dayjs";

export const sortedPost = allPosts
  .filter((p) => p.publishedAt)
  .sort((a, b) => {
    return dayjs(a.publishedAt).isAfter(b.publishedAt) ? -1 : 1;
  });
