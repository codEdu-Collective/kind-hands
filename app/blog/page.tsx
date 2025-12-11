import { Suspense } from "react";
import { connection } from "next/server";

import BlogCard from "@/components/blog/BlogCard";
import BlogHero from "@/components/blog/BlogHero";
import prisma from "@/lib/prisma";
import { Post } from "@/prisma/generated/prisma/client";

async function BlogContent() {
  await connection();

  let posts: Post[] = [];

  try {
    posts = await prisma.post.findMany({
      orderBy: {
        publishedAt: "desc",
      },
    });
  } catch (error) {
    console.error("Error pulling posts:", error);
  }

  const featuredPost = posts.find((post) => post.isFeatured) || posts[0];
  const otherPosts = posts.filter((post) => post.id !== featuredPost?.id);

  return (
    <>
      {/* hero*/}
      {featuredPost && <BlogHero post={featuredPost} />}

      {/* other posts */}
      <section className="container mx-auto px-4 max-w-5xl mt-16">
        <div className="flex flex-col gap-10">
          {otherPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}

export default function BlogPage() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen pb-20 font-sans">
      <Suspense fallback={<div className="text-center pt-20">Loading...</div>}>
        <BlogContent />
      </Suspense>
    </div>
  );
}
