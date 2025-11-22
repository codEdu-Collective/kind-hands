import { cacheLife, cacheTag } from "next/cache";

import prisma from "@/lib/prisma";

export const getManyEvents = async (takeNumber?: number) => {
  "use cache";
  cacheLife("weeks");
  cacheTag("events-take-" + (takeNumber ?? 6).toString());
  const events = await prisma.event.findMany({
    take: takeNumber ?? 6,
    select: {
      id: true,
      month: true,
      day: true,
      title: true,
      description: true,
      imageUrl: true,
      startTime: true,
      endTime: true,
      venue: true,
      venueAddress: true,
      organizer: {
        select: {
          name: true,
        },
      },
    },
  });
  return events;
};

export const getAllEventsID = async () => {
  "use cache";
  cacheLife("weeks");
  cacheTag("events-all-id");
  const events = await prisma.event.findMany({
    select: {
      id: true,
    },
  });
  return events;
};

export const getOneEvent = async (id: number) => {
  "use cache";
  cacheLife("weeks");
  cacheTag(`event-${id.toString()}`);
  const events = await prisma.event.findUnique({
    where: { id },
    include: {
      organizer: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
  return events;
};
