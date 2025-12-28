import { notFound } from "next/navigation";

import { BlogSingleAuthor, BlogSingleDetail, BlogSingleHeader } from "@/components/blog";
import { PostParams } from "@/types/types";
import { getAllPostsID, getOnePost } from "@/utils/get/post";

export async function generateStaticParams() {
  const posts = await getAllPostsID();

  return posts.map((post) => ({
    postID: post.id,
  }));
}

const Home = async ({ params }: PostParams) => {
  const { postID } = await params;
  const post = await getOnePost(postID);
  if (post)
    return (
      <main className="w-full">
        <header className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-205.5 relative flex items-center">
          <BlogSingleHeader post={post} />
        </header>
        <section className="flex justify-center items-center bg-background dark:bg-dark-900">
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-221.5 px-4 sm:px-6 lg:px-0 mt-8 sm:mt-12 md:mt-16 lg:mt-25 mb-12 sm:mb-16 md:mb-24 lg:mb-32.5 text-neutral dark:text-gray-300 font-work text-base sm:text-lg md:text-xl text-justify">
            <BlogSingleDetail post={post} />
            <BlogSingleAuthor post={post} />
          </div>
        </section>
      </main>
    );
  else notFound();
};

export default Home;
