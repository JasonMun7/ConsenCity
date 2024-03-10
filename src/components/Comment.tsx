"use client";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";


export interface CommentProps {
  name: string,
  image?: string,
  time: string,
  rating: number,
  comment: string
}

export const Comment = ({
  name, image, time, rating, comment
}: CommentProps) => {
  return (
    <>
      <div className=" w-full space-y-3">
        <div className="flex flex-row items-center space-x-5">
          {image ? <img className="rounded-full h-12 w-12 flex-shrink-0" src={image}></img> : <div className="bg-slate-500 rounded-full h-12 w-12 flex-shrink-0"></div>}
          <div className="flex flex-col">
            <div className="text-lg font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">
              {name}</div>
            <div>{time}</div>
          </div>

          <div className="flex flex-col text-left mr-5">
            <div className="rating">
              {[1, 2, 3, 4, 5].map((value) => (
                <input
                  key={value}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-green-500"
                  checked={value < rating}
                  readOnly={true} // Set the radio inputs as read-only
                />
              ))}
            </div>
            <div className="text-sm ">
              {comment}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
