import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

type Props = {
  afterSave: (postId: string) => Promise<void>;
};

type Data = {
  title: string;
  content: string;
};

export function NewPostForm(props: Props) {
  async function createPost(data: FormData) {
    "use server";

    const { title, content } = Object.fromEntries(data) as Data;

    const post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    return await props.afterSave(post.id);
  }

  return (
    <form className="space-y-4" action={createPost}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="placeholder:text-slate-400 rounded-md bg-slate-700 px-4 py-2 outline-none w-full"
      />
      <textarea
        name="content"
        className="placeholder:text-slate-400 rounded-md bg-slate-700 px-4 py-2 outline-none w-full"
        placeholder="Content"
      />
      <button className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
        Submit
      </button>
    </form>
  );
}
