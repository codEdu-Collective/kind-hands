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
      <div className="relative z-2 text-white ml-90">
        <h1 className="font-sue-ellen text-5xl mb-1.5">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          | {post.author.name}
        </h1>
        <h2 className="font-shippori font-extrabold text-[5.625rem]">{post.title}</h2>
      </div>
    </>
  );
};

export default BlogSingleHeader;
