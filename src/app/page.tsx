import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { NewPostForm } from "@/components/NewPostForm";
import { revalidatePath } from "next/cache";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5 text-purple-600">Posts</h2>

      {posts.length > 0 ? (
        <ul className="gap-y-3 flex flex-col">
          {posts.map((post) => (
            <li
              className="underline  text-slate-200 text-lg font-medium hover:text-purple-400 transition-colors"
              key={post.title}
            >
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-200 text-lg">
          Ups... there&apos;s not posts yet
        </p>
      )}

      <div
        key={posts[posts.length - 1] ? posts[posts.length - 1].id : undefined}
        className="border-t mt-12 pt-4"
      >
        <h3 className="text-2xl font-bold text-purple-600 mb-4">Quick add</h3>
        <NewPostForm
          afterSave={async () => {
            // We have to use "use server" because we're going to use this function inside on a server action
            "use server";

            // What that does
            revalidatePath("/");
          }}
        />
      </div>
    </div>
  );
}
