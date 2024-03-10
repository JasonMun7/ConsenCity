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
import Tag from "./tag";



export const Post = ({
  name,
  description,
  image,
  link,
  tags
}: {
  name: string,
  description: string,
  image?: string,
  link?: string,
  tags: string[]
}) => {
  const [rating, setRating] = useState<number>(1);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  function labelColor(label: string) {
    switch (label.toLowerCase()) {
        
        case "transportation":
          return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-red-200  border-[3px] border-red-600 px-4 py-2 rounded-3xl font-bold mr-2`,`flex w-3 h-3 rounded-full bg-red-600`,`text-red-600 flex`]
        case "public spaces":
          return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-orange-200  border-[3px] border-orange-600 px-4 py-2 rounded-3xl font-bold mr-2`,`flex w-3 h-3 rounded-full bg-orange-600`,`text-orange-600 flex`]
        case "education":
          return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-yellow-200  border-[3px] border-yellow-600 px-4 py-2 rounded-3xl font-bold mr-2`,`flex w-3 h-3 rounded-full bg-yellow-600`,`text-yellow-600 flex`]
        case "energy":
          return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-cyan-200  border-[3px] border-cyan-600 px-4 py-2 rounded-3xl font-bold mr-2`,`flex w-3 h-3 rounded-full bg-cyan-600`,`text-cyan-600 flex`]
        case "waste management":
          return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-blue-200  border-[3px] border-blue-600 px-4 py-2 rounded-3xl font-bold mr-2`,`flex w-3 h-3 rounded-full bg-blue-600`,`text-blue-600 flex`]
        case "safety":
          return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-indigo-200  border-[3px] border-indigo-600 px-4 py-2 rounded-3xl font-bold mr-2`,`flex w-3 h-3 rounded-full bg-indigo-600`,`text-indigo-600 flex`]
        case "healthcare":
          return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-purple-200  border-[3px] border-purple-600 px-4 py-2 rounded-3xl font-bold mr-2`,`flex w-3 h-3 rounded-full bg-purple-600`,`text-purple-600 flex`]
        default:
            return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-green-200  border-[3px] border-green-600 px-4 py-2 rounded-3xl font-bold mr-2`,`flex w-3 h-3 rounded-full bg-green-600`,`text-green-600 flex`]
    }
}

  return (
    <>
      <div className="rounded-3xl shadow-xl p-10 m-10 flex flex-col w-[50%] space-y-5">
        <div className="flex flex-row justify-between items-center">
          <div className="font-bold text-3xl text-[#000000]">{name}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-bookmark sm:h-6 sm:w-6 md:h-8 md:w-9s lg:h-10 lg:w-10"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke={isBookmarked ? "#286F40" : "currentColor"}
            fill={isBookmarked ? "#BED4C6" : "none"}
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={toggleBookmark}
            style={{ cursor: "pointer" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
          </svg>
        </div>

        <div className="flex flex-row space-x-3">{
          tags.slice(0, 3).map((t, i) => (
            // <div key={i} className="bg-slate-200 px-2 rounded-xl">{t}</div>
            <Tag key={i} label={t} div1={labelColor(t)[0]} div2={labelColor(t)[1]} div3={labelColor(t)[2]}/>
          ))
        }</div>

        <div className="text-[#7A7A7A]">
          <strong className="text-[#000000]">Description:</strong> <br></br>{description}
        </div>

        <div className="outline outline-1 outline-offset-2 rounded-xl p-2 bg-[#F9F9F9] outline-[#B7B7B7]">
          {image ? <img src={image} className="w-full"></img> : <div className="w-full h-36 bg-[#E4E4E4] rounded-2xl"></div>}
          <div>img.jpg</div>
        </div>

        <div className="outline outline-1 outline-offset-2 rounded-xl p-2 bg-[#F9F9F9] outline-[#B7B7B7] flex flex-row space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-paperclip sm:h-2 sm:w-2 md:h-3 md:w-3 lg:h-6 lg:w-6"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: 'rotate(135deg)' }} // Corrected style attribute
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
          </svg>


          <div>attatchment.pdf</div>
        </div>

        <hr />


        <div className="flex flex-row justify-between items-center">
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

          <div className="flex flex-row space-x-2 items-center">

            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-align-justified h-10 w-10" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l12 0" /></svg>
            <div>Review</div></div>

        </div>

      </div>
    </>
  );
};
