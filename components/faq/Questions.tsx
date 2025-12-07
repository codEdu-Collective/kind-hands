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
        <div key={index} className="group border-b border-neutral py-5 cursor-pointer">
          <div className="flex justify-between mr-3">
            <h2 className="font-shippori font-extrabold text-2xl text-dark">{question}</h2>
            <FaCircleChevronRight
              size={28}
              className="group-hover:text-primary group-hover:rotate-90 transform transition-all duration-500"
            />
          </div>
          <p className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-700 font-work text-neutral text-xl max-w-136 pt-4">
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.
          </p>
        </div>
      ))}
    </>
  );
};

export default Questions;
