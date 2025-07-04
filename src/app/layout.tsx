import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '../components/Navbar';

export const metadata = {
    title: {
        default: 'simon198',
        template: '%s | simon198',
    },
    description: "simon198's personal website and blog",
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html
            lang="zh-TW"
            className="text-black bg-white dark:text-white dark:bg-[#111010]"
        >
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
                    integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
                    crossOrigin="anonymous"
                />
            </head>
            <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
                <Navbar />
                <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
                    {children}
                </main>
            </body>
            <Analytics />
        </html>
    );
}
