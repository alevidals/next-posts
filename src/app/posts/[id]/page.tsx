import { getPostById } from "@/lib/posts";
import { redirect } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function PostPage(props: Props) {
  const post = await getPostById(props.params.id);

  if (!post) redirect("/");

  return (
    <div>
      <h2 className="text-3xl font-bold text-purple-600 mb-5">{post.title}</h2>
      <p className="text-slate-200 text-lg">{post.content}</p>
    </div>
  );
}
