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



export const Comment = ({
  rating
}: {
  rating: number
}) => {
  return (
    <>
      <div className=" w-full space-y-3">
        <div className="flex flex-row items-center space-x-5">
          <div className="bg-slate-500 rounded-full h-16 w-16 flex-shrink-0"></div>
          <div className="flex flex-col">
            <div className="text-lg font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">
              Kevin Ram</div>
            <div>2 min ago</div>
          </div>

          <div className="flex flex-col text-left mr-5">
            <div className="rating">
              {[1, 2, 3, 4, 5].map((value) => (
                <input
                  key={value}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-green-500"
                  checked={value === rating}
                  readOnly={true} // Set the radio inputs as read-only
                />
              ))}
            </div>
            <div className="text-sm ">
              Oh hey this sounds good do you like it the way i do when the lights Oh hey this sounds good do you like it the way i do when the lights Oh hey this sounds good do you like it the way i do when the lights Oh hey this sounds good do you like it the way i do when the lights Oh hey this sounds good do you like it the way i do when the lights Oh hey this sounds good do you like it the way i do when the lights Oh hey this sounds good do you like it the way i do when the lights
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
