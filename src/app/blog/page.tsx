import type { Metadata } from 'next';
import { BlogTitle, BlogPosts } from '@/components';
import { BlogProvider } from './provider';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read my thoughts on software development, learning, and more.',
};

export default function Home() {
    return (
        <section>
            <BlogProvider>
                <BlogTitle key="BlogTitle" />
                <BlogPosts key="BlogPosts" />
            </BlogProvider>
        </section>
    );
}
