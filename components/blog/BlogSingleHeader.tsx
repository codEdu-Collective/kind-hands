import Image from "next/image";

import { PostProps } from "@/types/types";

const BlogSingleHeader = ({ post }: PostProps) => {
  return (
    <>
      <Image
        src={post.imageUrl}
        alt="hero image"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        className="object-cover"
      />
      <div className="relative z-2 text-white ml-4 sm:ml-8 md:ml-16 lg:ml-90 max-w-full md:max-w-lg lg:max-w-220 px-4 md:px-0">
        <h1 className="font-sue-ellen text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-1.5">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          | {post.author.name}
        </h1>
        <h2 className="font-shippori font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[5.625rem] leading-tight">
          {post.title}
        </h2>
      </div>
    </>
  );
};

export default BlogSingleHeader;
