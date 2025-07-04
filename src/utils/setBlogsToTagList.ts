import { Post } from 'contentlayer2/generated';
import { ITagListObject } from '@/interfaces';

const setBlogsToTagList = (posts: Post[]): ITagListObject[] => {
    const tagList: string[] = [];
    posts.forEach((post) => {
        const { tags } = post;
        tags.forEach((tag) => {
            if (!tagList.includes(tag)) {
                tagList.push(tag);
            }
        });
    });

    return tagList.map((tag) => ({
        key: tag,
        label: tag,
        isSelected: false,
    }));
};

export default setBlogsToTagList;
