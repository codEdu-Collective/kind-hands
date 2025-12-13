import Image from "next/image";

import { Post } from "@/prisma/generated/prisma/client";

interface BlogHeroProps {
  post: Post;
}

export default function BlogHero({ post }: BlogHeroProps) {
  return (
    <section className="relative w-full h-[500px] lg:h-[650px] flex items-center">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover brightness-90"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex justify-center lg:justify-end">
        <div className="bg-white p-8 md:p-12 max-w-2xl shadow-xl w-full lg:mr-10">
          <div className="flex items-center text-xs font-bold mb-4 uppercase tracking-wider">
            <span className="text-color-neutral font-work ">
              {post.publishedAt.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="mx-2 text-color-dark font-work ">|</span>
            <span className="text-red-500 font-work ">{post.author}</span>
          </div>

          <h1 className="text-3xl font-shippori font-extrabold text-color-foreground md:text-2xl mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-color-neutral mb-8 leading-relaxed text-sm md:text-base">
            {post.excerpt}
          </p>

          <button className="px-8 py-3 border border-gray-900 text-gray-900 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300 rounded-full cursor-pointer">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}
