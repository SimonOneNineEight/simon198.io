'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface INavItems {
  [key: string]: any;
}

// TODO: add other pages
// const navItems: INavItems = {
//   "/": {
//     name: "home",
//     x: 0,
//     y: 0,
//     w: "64px",
//   },
//   "/about": {
//     name: "about",
//     x: 64,
//     y: 35,
//     w: "65px",
//   },
//   "/blog": {
//     name: "blog",
//     x: 127,
//     y: 69,
//     w: "56px",
//   },
//   "/guestbook": {
//     name: "guestbook",
//     x: 182,
//     y: 104,
//     w: "100px",
//   },
// };

const navItems: INavItems = {
    '/': {
        name: 'home',
        x: 0,
        y: 0,
        w: '64px',
    },
    '/blog': {
        name: 'blog',
        x: 64,
        y: 35,
        w: '56px',
    },
};

function Logo() {
    return (
        <Link aria-label="simon198" href="/">
            <motion.svg
                className="text-black dark:text-white h-[25px] md:h-[37px]"
                width="25"
                height="37"
                viewBox="0 0 232 316"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            />
        </Link>
    );
}

export default function Navbar() {
    let pathname = usePathname() || '/';
    if (pathname.includes('/blog/')) {
        pathname = '/blog';
    }

    return (
        <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
            <div className="lg:sticky lg:top-20">
                <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
                    <Logo />
                </div>
                <nav
                    className="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                >
                    <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
                        {navItems[pathname] ? (
                            <>
                                {/* Desktop version, hidden on mobile, animates y axis */}
                                <div className="hidden md:block">
                                    <motion.div
                                        className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                                        layoutId="test2"
                                        initial={{ opacity: 0, y: navItems[pathname].y }}
                                        animate={{
                                            opacity: 1,
                                            y: navItems[pathname].y,
                                            width: navItems[pathname].w,
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    />
                                </div>
                                {/* Mobile version, hidden on desktop, animates x axis */}
                                <div className="block md:hidden">
                                    <motion.div
                                        className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                                        layoutId="test"
                                        initial={{ opacity: 0, x: navItems[pathname].x }}
                                        animate={{
                                            opacity: 1,
                                            x: navItems[pathname].x,
                                            width: navItems[pathname].w,
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    />
                                </div>
                            </>
                        ) : null}

                        {Object.entries(navItems).map(([path, { name }]) => {
                            const isActive = path === pathname;

                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className={clsx(
                                        'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]',
                                        {
                                            'text-neutral-500': !isActive,
                                            'font-bold': isActive,
                                        },
                                    )}
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </aside>
    );
}
