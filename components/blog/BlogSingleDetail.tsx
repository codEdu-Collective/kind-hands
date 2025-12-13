import { PostProps } from "@/types/types";

import BlogSingleQuote from "./BlogSingleQuote";

const BlogSingleDetail = ({ post }: PostProps) => {
  return (
    <>
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
        <li className="mt-4">A rich text element can be used with static or dynamic content.</li>
      </ul>
      <BlogSingleQuote />
      <h3 className="font-shippori font-extrabold text-dark text-2xl mt-12.5 mb-4">
        Donate your time and skills
      </h3>
      <p>
        Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae
        vel magnam repudiandae ipsum repellat repudiandae. Voluptate at dolores ut dolo sint
        occaecati similique. Velit eius ab delectus temporibus.
      </p>
      <ol className="list-decimal list-inside mt-5 mb-12.5">
        <li>Efficiently myocardinate market-driven innovation.</li>
        <li className="mt-4">Idea-sharing with back end products.</li>
        <li className="mt-4">Ballpark value added activity to beta test.</li>
        <li className="mt-4">Voluptate at dolores ut dolor.</li>
      </ol>
    </>
  );
};

export default BlogSingleDetail;
