import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { NewPostForm } from "@/components/NewPostForm";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const posts = await prisma.post.findMany({
    select: {
      title: true,
      id: true,
    },
  });

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5 text-purple-600">Posts</h2>
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

      <div key={posts[posts.length - 1].id} className="border-t mt-12 pt-4">
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
