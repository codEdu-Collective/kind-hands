import { Post } from "@/prisma/generated/prisma/client";

export type BlogHeroProps = {
  post: Post & {
    author: {
      id: number;
      name: string;
    };
  };
};
