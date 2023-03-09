import Link from "next/link";
import { getPostList } from "@/lib/notion";
import { Tags } from "@/components";

export default async function Home() {
  const postList = await getPostList();

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {postList
        .sort((a, b) => {
          if (new Date(a.created_time) > new Date(b.created_time)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.id}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.id}`}
          >
            <div className="w-full flex flex-col">
              <p className="font-bold">{post.title}</p>
              <p className="text-sm line-clamp-2">{post.description}</p>
              <Tags tags={post.tags} />
              <p className="font-bold text-sm">{"(繼續閱讀...)"}</p>
            </div>
          </Link>
        ))}
    </section>
  );
}
