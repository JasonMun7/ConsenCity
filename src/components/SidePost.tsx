"use client";

import Tag from "./tag";



export const SidePost = ({
  name,
  tags
}: {
  name: string,
  tags: string[]
}) => {

  function labelColor(label: string) {
    switch (label.toLowerCase()) {
      case "transportation":
        return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-red-200  border-[3px] border-red-600 px-2 py-1 rounded-3xl font-bold mr-2 text-xs`, `flex w-2 h-2 rounded-full bg-red-600`, `text-red-600 flex`];
      case "public spaces":
        return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-orange-200  border-[3px] border-orange-600 px-2 py-1 rounded-3xl font-bold mr-2 text-xs`, `flex w-2 h-2 rounded-full bg-orange-600`, `text-orange-600 flex`];
      case "education":
        return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-yellow-200  border-[3px] border-yellow-600 px-2 py-1 rounded-3xl font-bold mr-2 text-xs`, `flex w-2 h-2 rounded-full bg-yellow-600`, `text-yellow-600 flex`];
      case "energy":
        return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-cyan-200  border-[3px] border-cyan-600 px-2 py-1 rounded-3xl font-bold mr-2 text-xs`, `flex w-2 h-2 rounded-full bg-cyan-600`, `text-cyan-600 flex`];
      case "waste management":
        return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-blue-200  border-[3px] border-blue-600 px-2 py-1 rounded-3xl font-bold mr-2 text-xs`, `flex w-2 h-2 rounded-full bg-blue-600`, `text-blue-600 flex`];
      case "safety":
        return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-indigo-200  border-[3px] border-indigo-600 px-2 py-1 rounded-3xl font-bold mr-2 text-xs`, `flex w-2 h-2 rounded-full bg-indigo-600`, `text-indigo-600 flex`];
      case "healthcare":
        return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-purple-200  border-[3px] border-purple-600 px-2 py-1 rounded-3xl font-bold mr-2 text-xs`, `flex w-2 h-2 rounded-full bg-purple-600`, `text-purple-600 flex`];
      default:
        return [`flex flex-row text-center items-center whitespace-nowrap gap-2 bg-green-200  border-[3px] border-green-600 px-2 py-1 rounded-3xl font-bold mr-2 text-xs`, `flex w-2 h-2 rounded-full bg-green-600`, `text-green-600 flex`];
    }
  }


  return (
    <>
      <div className="rounded-3xl shadow-lg flex flex-col justify-center w-[300px] h-[100px] bg-white gap-4 px-6 py-8">

        <div className="text-2xl font-semibold">{name}</div>

        <div className="flex flex-row gap-1 ">{
          tags.slice(0,2).map((t, i) => (
            <div className = ""><Tag key={i} label={t} div1={labelColor(t)[0]} div2={labelColor(t)[1]} div3={labelColor(t)[2]}/></div>
          ))
        }</div>



      </div>
    </>
  );
};
