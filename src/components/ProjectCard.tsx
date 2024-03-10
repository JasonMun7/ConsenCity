"use client";

import { None } from "framer-motion";
import { cn } from "../util/cn";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";



export const ProjectCard = () => {

  const [rating, setRating] = useState<number>(1);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  return (
    <>
      <div className="rounded-3xl shadow-xl w-[50%] m-20 p-10 space-y-3">
        <div className="flex flex-row justify-between">
          <div className="font-bold text-3xl">Leave a review</div>
          <button
            className=""
            onClick={() => {/* close action here */ }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
          </button>
        </div>

        <div>Your email will not be displayed publicly. Required fields are
          marked*</div>

        <div>Rate the project/policy</div>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <input
              key={value}
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              checked={rating === value}
              onChange={() => handleRatingChange(value)}
            />
          ))}
        </div>

        <div>Write a review</div>
        <textarea
          placeholder="Type here"
          className="textarea textarea-bordered w-full h-32" // Adjust the h-32 to your desired height
        ></textarea>
        <div className="btn w-full bg-[#286F40] text-white hover:bg-[#286F40] hover:text-white">
          Post review
        </div>

      </div>

    </>
  );
};
