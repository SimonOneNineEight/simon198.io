import Link from "next/link";
import Image from "next/image";

import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from "@/components/icons";

export const revalidate = 60;

export default async function HomePage() {
  const name = "Simon198";

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] md:max-w-max text-neutral-800 dark:text-neutral-200">
        {"Hey, this is Simon198. A forever learner."}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full"
          src={"/avatar.jpg"}
          width={100}
          height={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/simon198TW"
            className="flex items-center gap-2"
          >
            <TwitterIcon />
            {`@simon198TW`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/SimonOneNineEight"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            {`@SimonOneNineEight`}
          </a>
          <Link href="/blog" className="flex items-center">
            <ViewsIcon />
            {`Welcome to my blog page and see what I've learned`}
          </Link>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {/* TODO: need to add some introduction */}
      </p>
      {/* <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/simon198TW"
          >
            <ArrowIcon />
            <p className="h-7">follow me on twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            <ArrowIcon />
            <p className="h-7">get email updates</p>
          </a>
        </li>
      </ul> */}
    </section>
  );
}
