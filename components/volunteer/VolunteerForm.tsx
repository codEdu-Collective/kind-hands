"use client";

import { FormEvent } from "react";

const VolunteerForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //api
  };

  return (
    <div className="bg-white p-8 md:p-10 shadow-xl rounded-sm h-full">
      <div className="mb-8">
        <h3 className="text-2xl font-serif font-bold text-gray-800">Complete the Form</h3>
        <p className="text-rose-400 text-sm mt-2 font-bold">Fill Form and Become Volunteer</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Enter Your Name*"
          className="w-full bg-gray-50 text-gray-700 px-4 py-4 outline-none focus:ring-1 focus:ring-rose-300 transition-all text-sm"
        />
        <input
          type="tel"
          placeholder="Phone Number*"
          className="w-full bg-gray-50 text-gray-700 px-4 py-4 outline-none focus:ring-1 focus:ring-rose-300 transition-all text-sm"
        />
        <input
          type="email"
          placeholder="Email Address*"
          className="w-full bg-gray-50 text-gray-700 px-4 py-4 outline-none focus:ring-1 focus:ring-rose-300 transition-all text-sm"
        />
        <input
          type="text"
          placeholder="Address*"
          className="w-full bg-gray-50 text-gray-700 px-4 py-4 outline-none focus:ring-1 focus:ring-rose-300 transition-all text-sm"
        />
        <textarea
          placeholder="About Occupation*"
          rows={4}
          className="w-full bg-gray-50 text-gray-700 px-4 py-4 outline-none focus:ring-1 focus:ring-rose-300 transition-all text-sm resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-slate-700 hover:bg-slate-800 text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;
