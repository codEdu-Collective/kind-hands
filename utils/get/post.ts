import { cacheLife, cacheTag } from "next/cache";

import prisma from "@/lib/prisma";

export const getOnePost = async (id: string) => {
  "use cache";
  cacheLife("weeks");
  cacheTag(`post-${id}`);
  const posts = await prisma.post.findUnique({
    where: { id },
    include: {
      author: {
        select: {
          id: true,
          name: true,
        },
      },
    },
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

export const getManyPosts = async (takeNumber?: number) => {
  "use cache";
  cacheLife("weeks");
  cacheTag("posts-take-" + (takeNumber ?? 6).toString());

  const posts = await prisma.post.findMany({
    take: takeNumber ?? 6,
    include: {
      author: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return posts;
};
