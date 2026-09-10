import { FaCircleChevronRight } from "react-icons/fa6";

const questions = [
  "Health in other Countries?",
  "We Build and Create?",
  "Water Delivery in Africa?",
  "How to become a volunteer?",
  "How Do I Make Donation",
  "Health in other Countries?",
];

const Questions = () => {
  return (
    <>
      {questions.map((question, index) => (
        <div
          key={index}
          className="group border-b border-neutral dark:border-gray-600 py-4 sm:py-5 cursor-pointer"
        >
          <div className="flex justify-between items-start gap-3 sm:gap-4 mr-0 sm:mr-3">
            <h2 className="font-shippori font-extrabold text-lg sm:text-xl md:text-2xl text-dark dark:text-white flex-1">
              {question}
            </h2>
            <FaCircleChevronRight
              size={24}
              className="sm:w-7 sm:h-7 shrink-0 group-hover:text-primary dark:group-hover:text-primary group-hover:rotate-90 transform transition-all duration-500"
            />
          </div>
          <p className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-700 font-work text-neutral dark:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-full lg:max-w-136 pt-3 sm:pt-4">
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.
          </p>
        </div>
      ))}
    </>
  );
};

export default Questions;
