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
        <header className="h-205.5 relative flex items-center">
          <BlogSingleHeader post={post} />
        </header>
        <section className="flex justify-center items-center bg-background">
          <div className="w-221.5 mt-25 mb-32.5 text-neutral font-work text-xl text-justify">
            <BlogSingleDetail post={post} />
            <BlogSingleAuthor post={post} />
          </div>
        </section>
      </main>
    );
  else notFound();
};

export default Home;
