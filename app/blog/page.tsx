import { BlogCard, BlogHero } from "@/components/blog";
import { getManyPosts } from "@/utils/get/post";

export default async function BlogPage() {
  const posts = await getManyPosts(6);
  const featuredPost = posts.find((post) => post.isFeatured) || posts[0];
  const otherPosts = posts.filter((post) => post.id !== featuredPost?.id);
  return (
    <div className="bg-[#F9F9F9] dark:bg-gray-200 min-h-screen pb-8 sm:pb-12 md:pb-16 lg:pb-20 font-sans">
      {/* hero*/}
      {featuredPost && <BlogHero post={featuredPost} />}

      {/* other posts */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-8 sm:mt-12 md:mt-16">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          {otherPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
