import Link from 'next/link';
import Image from 'next/image';

import {
    GitHubIcon,
    TwitterIcon,
    LinkedInIcon,
} from '@/components/icons';

export const revalidate = 60;

export default async function HomePage() {
    const name = 'Simon198';

    return (
        <section>
            <h1 className="font-bold text-3xl font-serif">{name}</h1>
            <p className="my-5 max-w-[460px] md:max-w-max text-neutral-800 dark:text-neutral-200">
                Hey, this is Simon198. A forever learner.
            </p>
            <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
                <Image
                    alt={name}
                    className="rounded-full"
                    src="/avatar.jpg"
                    width={100}
                    height={100}
                    priority
                />
                <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://twitter.com/simon198TW"
                        className="flex items-center gap-1"
                    >
                        <TwitterIcon />
                        @simon198TW
                    </a>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/SimonOneNineEight"
                        className="flex items-center gap-2"
                    >
                        <GitHubIcon />
                        @SimonOneNineEight
                    </a>
                    <Link
                        href="https://www.linkedin.com/in/simon198/"
                        className="flex items-center "
                    >
                        <LinkedInIcon />
                        {'@Simon (Cheng-Wei) Huang '}
                    </Link>
                </div>
            </div>
            <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
                {/* TODO: need to add some introduction */}

                Hello, I'm Simon, a Master’s student in Information Systems at Northeastern University. I have a strong background in front-end web development because of my experience in a dental startup in Taiwan. I helped build digital solutions like patient reservation system, profile management, and clinic ledger tools, etc. to boost clinic operation efficiency.
                <br />
                <br />
                Currently, I'm enhancing my skills not only from school but also by working on both front-end and back-end development with a startup company, where I’ve created React interfaces ,backend APIs, and Firebase database from scratch.
                <br />
                <br />
                My passion for technology is driven by a deep-seated desire to help people and make a tangible impact on the world. I believe that the right software can transform lives by solving real-world problems, enhancing everyday experiences, and opening new avenues for innovation. With every line of code, I aspire to contribute to creating a better world, one program at a time.
                <br />
                <br />
                Send me a DM through X or Github to get in touch!!!
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
