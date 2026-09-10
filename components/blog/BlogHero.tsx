import Image from "next/image";
import Link from "next/link";

import { PostProps } from "@/types/types";

export default function BlogHero({ post }: PostProps) {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-125 xl:h-162.5 flex items-center">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover brightness-90"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center lg:justify-end">
        <div className="bg-white dark:bg-gray-300 p-4 sm:p-6 md:p-8 lg:p-12 max-w-2xl shadow-xl w-full lg:mr-10 rounded-lg">
          <div className="flex items-center text-xs font-bold mb-3 sm:mb-4 uppercase tracking-wider">
            <span className="text-color-neutral dark:text-gray-600 font-work">
              {post.publishedAt.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="mx-2 text-color-dark dark:text-dark font-work">|</span>
            <span className="text-red-500 dark:text-primary font-work">{post.author.name}</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-shippori font-extrabold text-color-foreground dark:text-dark mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-color-neutral dark:text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            {post.excerpt}
          </p>

          <Link href={`/blog/${post.id}`}>
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 border border-gray-900 dark:border-dark text-gray-900 dark:text-dark text-xs font-bold uppercase tracking-widest hover:bg-gray-900 dark:hover:bg-dark-700 hover:text-white dark:hover:text-white transition-all duration-300 rounded-full cursor-pointer">
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
