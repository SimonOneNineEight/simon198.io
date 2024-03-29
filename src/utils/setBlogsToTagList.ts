import { ITagListObject } from "@/interfaces";
import { Post } from "contentlayer/generated";

const setBlogsToTagList = (posts: Post[]): ITagListObject[] => {
  const tagList: string[] = [];
  posts.forEach((post) => {
    const tags = post.tags;
    for (let tag of tags) {
      if (!tagList.includes(tag)) {
        tagList.push(tag);
      }
    }
  });

  return tagList.map((tag) => {
    return {
      key: tag,
      label: tag,
      isSelected: false,
    };
  });
};

export default setBlogsToTagList;
