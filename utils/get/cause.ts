import { cacheLife, cacheTag } from "next/cache";

import prisma from "@/lib/prisma";

export const getAllCausesID = async () => {
  "use cache";
  cacheLife("weeks");
  cacheTag("causes-all-id");

  const causes = await prisma.cause.findMany({
    select: {
      id: true,
    },
  });

  return causes;
};

export const getManyCauses = async (takeNumber?: number) => {
  "use cache";
  cacheLife("weeks");
  cacheTag("causes-take-" + (takeNumber ?? 4).toString());

  const causes = await prisma.cause.findMany({
    take: takeNumber ?? 4,
  });

  return causes;
};

export const getOneCause = async (id: number) => {
  "use cache";
  cacheLife("weeks");
  cacheTag(`cause-${id.toString()}`);
  const cause = await prisma.cause.findUnique({
    where: { id },
  });
  return cause;
};
