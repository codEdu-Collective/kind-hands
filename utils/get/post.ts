import { cacheLife, cacheTag } from "next/cache";

import prisma from "@/lib/prisma";

export const getOnePost = async (id: string) => {
  "use cache";
  cacheLife("weeks");
  cacheTag(`post-${id}`);
  const posts = await prisma.post.findUnique({
    where: { id },
  });
  return posts;
};

export const getAllPostsID = async () => {
  "use cache";
  cacheLife("weeks");
  cacheTag("posts-all-id");
  const posts = await prisma.post.findMany({
    select: {
      id: true,
    },
  });
  return posts;
};
