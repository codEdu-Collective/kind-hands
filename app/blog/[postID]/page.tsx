import { RiDoubleQuotesL } from "react-icons/ri";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getAllPostsID, getOnePost } from "@/utils/get/post";

export async function generateStaticParams() {
  const posts = await getAllPostsID();

  return posts.map((post) => ({
    postID: post.id,
  }));
}

type Props = {
  params: { postID: string };
};

const Home = async ({ params }: Props) => {
  const { postID } = await params;
  const post = await getOnePost(postID);
  if (post)
    return (
      <main className="w-full">
        <header className="h-205.5 relative flex items-center">
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
              })}
              | {post.author}
            </h1>
            <h2 className="font-shippori font-extrabold text-[5.625rem]">{post.title}</h2>
          </div>
        </header>
        <section className="flex justify-center items-center bg-background">
          <div className="w-221.5 mt-25 mb-32.5 text-neutral font-work text-xl text-justify">
            <p>{post.excerpt}</p>
            <h2 className="font-shippori font-extrabold text-dark text-[2.5rem] mt-12.5 mb-6">
              We Are Need Your Help
            </h2>
            <p>{post.content}</p>
            <ul className="list-disc list-inside mt-7.5 mb-6">
              <li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor.</li>
              <li className="mt-4">
                Nostrum facere repellendus minus quod aut aliquam neque reiciendis.
              </li>
              <li className="mt-4">
                A rich text element can be used with static or dynamic content.
              </li>
            </ul>
            <div
              id="quote"
              className="bg-primary italic text-white text-3xl flex flex-col items-center px-37.5 py-18"
            >
              <RiDoubleQuotesL
                size={103}
                color="black"
                className="bg-white rounded-full p-5 mb-5"
              />
              <p className="text-center">
                “In the end, maybe it is wiser to surrender before the miraculous scope of human
                generosity and to just keep saying thank you, forever and sincerely, for as long as
                we have voices”
              </p>
            </div>
            <h3 className="font-shippori font-extrabold text-dark text-2xl mt-12.5 mb-4">
              Donate your time and skills
            </h3>
            <p>
              Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui
              beatae vel magnam repudiandae ipsum repellat repudiandae. Voluptate at dolores ut dolo
              sint occaecati similique. Velit eius ab delectus temporibus.
            </p>
            <ol className="list-decimal list-inside mt-5 mb-12.5">
              <li>Efficiently myocardinate market-driven innovation.</li>
              <li className="mt-4">Idea-sharing with back end products.</li>
              <li className="mt-4">Ballpark value added activity to beta test.</li>
              <li className="mt-4">Voluptate at dolores ut dolor.</li>
            </ol>
            <div id="author" className="bg-muted-background p-13.5 flex gap-x-5">
              <aside className="w-36 h-36">
                <Image
                  src={`/avatar.jpg`}
                  width={144}
                  height={144}
                  alt="avatar"
                  className="object-cover rounded-full"
                />
              </aside>
              <aside className="w-154">
                <h4 className="font-shippori font-bold text-dark text-2xl capitalize">
                  {post.author.toLocaleLowerCase()}
                </h4>
                <span>Donator</span>
                <p className="mt-2.5">
                  Centuries but alsoleapintelectronitypesetting,established fact that a reader will
                  bdistracted content.beatae vel magnam repudiandae repudiandae.
                </p>
              </aside>
            </div>
          </div>
        </section>
      </main>
    );
  else notFound();
};

export default Home;
