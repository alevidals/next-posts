import { NewPostForm } from "@/components/NewPostForm";
import { redirect } from "next/navigation";

export default function NewPostPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-purple-600 mb-5">New Post</h2>
      <NewPostForm
        afterSave={async (postId: string) => {
          "use server";

          redirect(`/posts/${postId}`);
        }}
      />
    </div>
  );
}
