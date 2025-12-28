import { RiDoubleQuotesL } from "react-icons/ri";

const BlogSingleQuote = () => {
  return (
    <div
      id="quote"
      className="bg-primary dark:bg-primary-600 italic text-white text-lg sm:text-xl md:text-2xl lg:text-3xl flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-37.5 py-8 sm:py-12 md:py-14 lg:py-18 my-6 sm:my-8 md:my-10"
    >
      <RiDoubleQuotesL size={60} className="sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[103px] lg:h-[103px] text-black dark:text-dark bg-white rounded-full p-3 sm:p-4 md:p-5 mb-4 sm:mb-5" />
      <p className="text-center leading-relaxed">
        "In the end, maybe it is wiser to surrender before the miraculous scope of human generosity
        and to just keep saying thank you, forever and sincerely, for as long as we have voices"
      </p>
    </div>
  );
};

export default BlogSingleQuote;
