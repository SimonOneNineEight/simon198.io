"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { ITagListObject } from "@/interfaces";

interface IBlogContext {
  tags: ITagListObject[];
  setTags: React.Dispatch<React.SetStateAction<ITagListObject[]>>;
}

export const BlogContext = createContext<IBlogContext>({
  tags: [],
  setTags: () => {},
});

export function BlogProvider({ children }: { children: ReactNode }) {
  const [tags, setTags] = useState<ITagListObject[]>([]);

  return (
    <BlogContext.Provider value={{ tags, setTags }}>
      {children}
    </BlogContext.Provider>
  );
}
