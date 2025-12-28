import { PostProps } from "@/types/types";

import BlogSingleQuote from "./BlogSingleQuote";

const BlogSingleDetail = ({ post }: PostProps) => {
  return (
    <>
      <p className="dark:text-gray-300">{post.excerpt}</p>
      <h2 className="font-shippori font-extrabold text-dark dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] mt-6 sm:mt-8 md:mt-10 lg:mt-12.5 mb-4 sm:mb-6">
        We Are Need Your Help
      </h2>
      <p className="dark:text-gray-300">{post.content}</p>
      <ul className="list-disc list-inside mt-4 sm:mt-6 md:mt-7.5 mb-4 sm:mb-6 dark:text-gray-300">
        <li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor.</li>
        <li className="mt-2 sm:mt-4">
          Nostrum facere repellendus minus quod aut aliquam neque reiciendis.
        </li>
        <li className="mt-2 sm:mt-4">A rich text element can be used with static or dynamic content.</li>
      </ul>
      <BlogSingleQuote />
      <h3 className="font-shippori font-extrabold text-dark dark:text-white text-lg sm:text-xl md:text-2xl mt-6 sm:mt-8 md:mt-10 lg:mt-12.5 mb-3 sm:mb-4">
        Donate your time and skills
      </h3>
      <p className="dark:text-gray-300">
        Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae
        vel magnam repudiandae ipsum repellat repudiandae. Voluptate at dolores ut dolo sint
        occaecati similique. Velit eius ab delectus temporibus.
      </p>
      <ol className="list-decimal list-inside mt-3 sm:mt-4 md:mt-5 mb-8 sm:mb-10 md:mb-12.5 dark:text-gray-300">
        <li>Efficiently myocardinate market-driven innovation.</li>
        <li className="mt-2 sm:mt-4">Idea-sharing with back end products.</li>
        <li className="mt-2 sm:mt-4">Ballpark value added activity to beta test.</li>
        <li className="mt-2 sm:mt-4">Voluptate at dolores ut dolor.</li>
      </ol>
    </>
  );
};

export default BlogSingleDetail;
