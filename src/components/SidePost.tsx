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



export const SidePost = ({
  name,
  tags
}: {
  name: string,
  tags: string[]
}) => {




  return (
    <>
      <div className="rounded-3xl shadow-lg p-5 m-5 flex flex-col w-[20%] space-y-2">

        <div className="text text-[#000000]">{name}</div>

        <div className="flex flex-row space-x-3">{
          tags.map((t, i) => (
            <div key={i} className="bg-slate-200 px-2 rounded-xl">{t}</div>
          ))
        }</div>



      </div>
    </>
  );
};
