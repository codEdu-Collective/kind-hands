import Image from "next/image";
import Link from "next/link";

import { PostProps } from "@/types/types";

export default function BlogCard({ post }: PostProps) {
  return (
    <div className="bg-white dark:bg-gray-300 flex flex-col md:flex-row shadow-sm hover:shadow-lg transition-shadow overflow-hidden group min-h-auto md:min-h-70 rounded-lg">
      {/* left-picture */}
      <div className="relative w-full md:w-5/12 h-48 sm:h-64 md:h-auto overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* content */}
      <div className="w-full md:w-7/12 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
        <div className="flex items-center text-xs font-bold text-color-dark dark:text-dark mb-2 sm:mb-3 uppercase tracking-wider">
          <span className="text-color-dark dark:text-dark">
            {post.publishedAt.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="mx-2">|</span>
          <span className="text-color-dark dark:text-dark">{post.author.name}</span>
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl font-shippori font-bold text-color-dark dark:text-dark mb-3 sm:mb-4 hover:text-red-500 dark:hover:text-primary transition-colors cursor-pointer">
          {post.title}
        </h2>

        <p className="text-color-neutral dark:text-gray-600 font-work text-sm mb-4 sm:mb-6 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>

        <Link href={`/blog/${post.id}`}>
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 border border-gray-900 dark:border-dark text-gray-900 dark:text-dark text-xs font-bold uppercase tracking-widest hover:bg-dark-500 dark:hover:bg-dark-700 hover:text-white dark:hover:text-white transition-all duration-300 rounded-full cursor-pointer w-full sm:w-auto">
            READ MORE
          </button>
        </Link>
      </div>
    </div>
  );
}
