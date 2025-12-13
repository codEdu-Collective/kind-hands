import { Event, Post } from "@/prisma/generated/prisma/client";

export type PostProps = {
  post: Post & {
    author: {
      id: number;
      name: string;
    };
  };
};

export type EventProps = {
  events: Event[] & {
    organizer: {
      name: string;
    };
  };
};

export type PostParams = {
  params: { postID: string };
};

export type CauseParams = {
  params: { id: string };
};

export type EventParams = {
  params: { eventID: string };
};
