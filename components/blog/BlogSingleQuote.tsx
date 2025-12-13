import { RiDoubleQuotesL } from "react-icons/ri";

const BlogSingleQuote = () => {
  return (
    <div
      id="quote"
      className="bg-primary italic text-white text-3xl flex flex-col items-center px-37.5 py-18"
    >
      <RiDoubleQuotesL size={103} color="black" className="bg-white rounded-full p-5 mb-5" />
      <p className="text-center">
        “In the end, maybe it is wiser to surrender before the miraculous scope of human generosity
        and to just keep saying thank you, forever and sincerely, for as long as we have voices”
      </p>
    </div>
  );
};

export default BlogSingleQuote;
