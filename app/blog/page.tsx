import BlogCard from "@/components/blog/BlogCard";
import BlogHero from "@/components/blog/BlogHero";
import { getManyPosts } from "@/utils/get/post";

export default async function BlogPage() {
  const posts = await getManyPosts(6);
  const featuredPost = posts.find((post) => post.isFeatured) || posts[0];
  const otherPosts = posts.filter((post) => post.id !== featuredPost?.id);
  return (
    <div className="bg-[#F9F9F9] min-h-screen pb-20 font-sans">
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
    </div>
  );
}
