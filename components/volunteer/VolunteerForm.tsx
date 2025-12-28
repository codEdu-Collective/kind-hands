"use client";

import { FormEvent } from "react";

const VolunteerForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //api
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl rounded-sm h-full">
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800 dark:text-white">Complete the Form</h3>
        <p className="text-rose-400 dark:text-primary text-sm mt-2 font-bold">Fill Form and Become Volunteer</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <input
          type="text"
          placeholder="Enter Your Name*"
          className="w-full bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-white px-4 py-3 sm:py-4 outline-none focus:ring-1 focus:ring-rose-300 dark:focus:ring-primary transition-all text-sm rounded-lg"
        />
        <input
          type="tel"
          placeholder="Phone Number*"
          className="w-full bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-white px-4 py-3 sm:py-4 outline-none focus:ring-1 focus:ring-rose-300 dark:focus:ring-primary transition-all text-sm rounded-lg"
        />
        <input
          type="email"
          placeholder="Email Address*"
          className="w-full bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-white px-4 py-3 sm:py-4 outline-none focus:ring-1 focus:ring-rose-300 dark:focus:ring-primary transition-all text-sm rounded-lg"
        />
        <input
          type="text"
          placeholder="Address*"
          className="w-full bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-white px-4 py-3 sm:py-4 outline-none focus:ring-1 focus:ring-rose-300 dark:focus:ring-primary transition-all text-sm rounded-lg"
        />
        <textarea
          placeholder="About Occupation*"
          rows={4}
          className="w-full bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-white px-4 py-3 sm:py-4 outline-none focus:ring-1 focus:ring-rose-300 dark:focus:ring-primary transition-all text-sm resize-none rounded-lg"
        ></textarea>

        <button
          type="submit"
          className="bg-slate-700 dark:bg-primary hover:bg-slate-800 dark:hover:bg-primary-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all mt-2 w-full sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;
