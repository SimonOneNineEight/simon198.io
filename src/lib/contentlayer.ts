import { allPosts, Post } from "contentlayer/generated";
import dayjs from "dayjs";

export const sortedPost = allPosts.sort((a, b) => {
  return dayjs(a.date).isAfter(b.date) ? 1 : -1;
});
