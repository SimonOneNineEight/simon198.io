'use client';

import {
    createContext, ReactNode, useState, useMemo,
} from 'react';
import { ITagListObject } from '@/interfaces';

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

    const value = useMemo(() => ({ tags, setTags }), [tags]);

    return (
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    );
}
