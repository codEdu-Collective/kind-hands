import { cacheLife, cacheTag } from "next/cache";

import prisma from "@/lib/prisma";

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
