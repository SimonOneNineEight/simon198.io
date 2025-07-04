import dayjs from 'dayjs';
import { posts } from '#site/content';

export const sortedPost = posts
    .filter((p) => p.publishedAt)
    .sort((a, b) => (dayjs(a.publishedAt).isAfter(b.publishedAt) ? -1 : 1));
