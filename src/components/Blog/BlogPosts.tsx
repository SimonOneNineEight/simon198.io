"use client";

import { useState, useEffect, useContext, Fragment } from "react";
import Link from "next/link";
import { sortedPost } from "@/lib/contentlayer";
import { Tags } from "@/components";
import { BlogContext } from "@/app/blog/provider";

const BlogPosts = () => {
  const { tags } = useContext(BlogContext);
  const [displayPosts, setDisplayPosts] = useState(sortedPost);

  useEffect(() => {
    const displayTags = tags.filter((t) => t.isSelected).map((t) => t.label);
    if (displayTags.length == 0) setDisplayPosts(sortedPost);
    else {
      setDisplayPosts(
        sortedPost.filter((p) => {
          for (let tag of p.tags) {
            if (displayTags.includes(tag)) return true;
          }
          return false;
        })
      );
    }
  }, [tags]);

  return (
    <div>
      {displayPosts.map((post) => (
        <Fragment key={post.slug}>
          <Link className="flex flex-col space-y-1" href={`/blog/${post.slug}`}>
            <div className="w-full flex flex-col">
              <p className="font-bold text-xl">{post.title}</p>
              <p className="text-sm line-clamp-2">{post.description}</p>
              {post.tags && <Tags tags={post.tags} />}
              <p className="font-bold text-sm">{"(繼續閱讀...)"}</p>
            </div>
          </Link>
          <div className="h-[0.1em] bg-neutral-50 dark:bg-neutral-800 m-4" />
        </Fragment>
      ))}
    </div>
  );
};

export default BlogPosts;
