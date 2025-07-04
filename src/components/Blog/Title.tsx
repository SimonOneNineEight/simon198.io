'use client';

import { useState, useEffect, useContext } from 'react';
import { setBlogsToTagList } from '@/utils';
import { sortedPost } from '@/lib/contentlayer';
import DrawerButton from './DrawerButton';
import TagDrawer from './TagDrawer';
import { BlogContext } from '@/app/blog/provider';

const Title = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(true);
    const { tags, setTags } = useContext(BlogContext);

    const selectTag = (tag: string) => {
        setTags((previous) => previous.map((t) => {
            if (t.label === tag) {
                return {
                    ...t,
                    isSelected: !t.isSelected,
                };
            }
            return t;
        }));
    };

    useEffect(() => {
        setTags(setBlogsToTagList(sortedPost));
    }, [setTags]);

    return (
        <>
            <div className="flex justify-between mb-5">
                <h1 className="font-bold text-3xl font-serif">Blog</h1>
                <DrawerButton
                    isDrawerOpen={isDrawerOpen}
                    setDrawerOpen={setDrawerOpen}
                />
            </div>
            {isDrawerOpen ? <TagDrawer tags={tags} selectTag={selectTag} /> : null}
        </>
    );
};

export default Title;
