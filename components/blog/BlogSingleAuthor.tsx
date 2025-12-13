import Image from "next/image";

import { PostProps } from "@/types/types";

const BlogSingleAuthor = ({ post }: PostProps) => {
  return (
    <div id="author" className="bg-muted-background p-13.5 flex gap-x-5">
      <aside className="w-36 h-36">
        <Image
          src={`/blog/blog-avatar.jpg`}
          width={144}
          height={144}
          alt="avatar"
          className="object-cover rounded-full"
        />
      </aside>
      <aside className="w-154">
        <h4 className="font-shippori font-bold text-dark text-2xl capitalize">
          {post.author.name}
        </h4>
        <span>Donator</span>
        <p className="mt-2.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore, aperiam earum nulla
          officia perferendis maxime alias architecto quis nihil ab!
        </p>
      </aside>
    </div>
  );
};

export default BlogSingleAuthor;
