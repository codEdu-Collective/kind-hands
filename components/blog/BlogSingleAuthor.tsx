import Image from "next/image";

import { PostProps } from "@/types/types";

const BlogSingleAuthor = ({ post }: PostProps) => {
  return (
    <div id="author" className="bg-muted-background dark:bg-gray-800 p-4 sm:p-6 md:p-8 lg:p-13.5 flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-10 md:mt-12">
      <aside className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 shrink-0 mx-auto sm:mx-0">
        <Image
          src={`/blog/blog-avatar.jpg`}
          width={144}
          height={144}
          alt="avatar"
          className="object-cover rounded-full w-full h-full"
        />
      </aside>
      <aside className="flex-1 text-center sm:text-left">
        <h4 className="font-shippori font-bold text-dark dark:text-white text-lg sm:text-xl md:text-2xl capitalize">
          {post.author.name}
        </h4>
        <span className="text-neutral dark:text-gray-300">Donator</span>
        <p className="mt-2 sm:mt-2.5 text-neutral dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore, aperiam earum nulla
          officia perferendis maxime alias architecto quis nihil ab!
        </p>
      </aside>
    </div>
  );
};

export default BlogSingleAuthor;
