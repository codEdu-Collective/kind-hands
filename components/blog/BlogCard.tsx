import Image from "next/image";
import Link from "next/link";

import { BlogHeroProps } from "@/types/types";

export default function BlogCard({ post }: BlogHeroProps) {
  return (
    <div className="bg-white flex flex-col md:flex-row shadow-sm hover:shadow-lg transition-shadow overflow-hidden group min-h-70">
      {/* left-picture */}
      <div className="relative w-full md:w-5/12 h-64 md:h-auto overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* content */}
      <div className="w-full md:w-7/12 p-8 flex flex-col justify-center">
        <div className="flex items-center text-xs font-bold text-color-dark mb-3 uppercase tracking-wider">
          <span className="text-color-dark">
            {post.publishedAt.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="mx-2">|</span>
          <span className="text-color-dark">{post.author.name}</span>
        </div>

        <h2 className="text-2xl font-shippori font-bold text-color-dark mb-4 hover:text-red-500 transition-colors cursor-pointer">
          {post.title}
        </h2>

        <p className="text-color-neutral font-work text-sm mb-6 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>

        <Link href={`/blog/${post.id}`}>
          <button className="px-8 py-3 border border-gray-900 text-gray-900 text-xs font-bold uppercase tracking-widest hover:bg-dark-500 hover:text-white transition-all duration-300 rounded-full cursor-pointer">
            READ MORE
          </button>
        </Link>
      </div>
    </div>
  );
}
