import { prisma } from "@/lib/prisma";

export async function getPostById(id: string) {
  const post = await prisma.post.findUnique({
    where: { id },
    select: {
      title: true,
      content: true,
    },
  });

  return post;
}

export async function getAllPosts() {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
    },
  });

  return posts;
}
