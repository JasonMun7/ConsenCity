"use client";

import React, { useState } from "react";

export const Filter = () => {
  // List initialization
  const typeList = ["Project", "Policy"];
  const tagList = ["Infrastructure", "Transportation", "Education", "Energy", "Waste Management", "Safety", "Public Spaces"];
  const ratingList = ["Highest rated"];
  const recentList = ["Most recent post", "Oldest post"];

  // State for managing open/close of details sections
  const [isTypeOpen, setTypeOpen] = useState(true);
  const [isTagsOpen, setTagsOpen] = useState(true);
  const [isRatingOpen, setRatingOpen] = useState(true);
  const [isRecentOpen, setRecentOpen] = useState(true);

  // State for checkbox checked status
  const [checkedStates, setCheckedStates] = useState({
    type: Array(typeList.length).fill(false),
    tags: Array(tagList.length).fill(false),
    rating: Array(ratingList.length).fill(false),
    recent: Array(recentList.length).fill(false),
  });

  // Define a type for the section parameter to restrict it to specific string values
  type Section = 'type' | 'tags' | 'rating' | 'recent';

  // Updated handleCheckboxChange function with typing
  const handleCheckboxChange = (section: Section, index: number) => {
    const newState = { ...checkedStates };
    newState[section][index] = !newState[section][index];
    setCheckedStates(newState);
  };


  // Reset checkboxes
  const resetCheckboxes = () => {
    setCheckedStates({
      type: Array(typeList.length).fill(false),
      tags: Array(tagList.length).fill(false),
      rating: Array(ratingList.length).fill(false),
      recent: Array(recentList.length).fill(false),
    });
  };

  return (
    <div className="rounded-3xl shadow-xl m-10 p-5 w-[20%]">
      <h2 className="text-2xl font-bold text-[#286F40]">Filters</h2>
      <form className="filter-form">
        {/* Type Section */}
        <details className="collapse" open={isTypeOpen} onToggle={(e) => setTypeOpen((e.target as HTMLDetailsElement).open)}>
          <summary className="collapse-title text-xl font-medium">Type</summary>
          <div className="collapse-content">
            {typeList.map((type, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkedStates.type[index]}
                  onChange={() => handleCheckboxChange('type', index)}
                />
                <span className="label-text ml-2">{type}</span>
              </div>
            ))}
          </div>
        </details>

        {/* Tags Section */}
        <details className="collapse" open={isTagsOpen} onToggle={(e) => setTagsOpen((e.target as HTMLDetailsElement).open)}>
          <summary className="collapse-title text-xl font-medium">Tags</summary>
          <div className="collapse-content">
            {tagList.map((tag, index) => (
              <div key={index} className="flex items-center mb-2">
                <input type="checkbox" className="checkbox" checked={checkedStates.tags[index]} onChange={() => handleCheckboxChange('tags', index)} />
                <span className="label-text ml-2">{tag}</span>
              </div>
            ))}
          </div>
        </details>

        {/* Rating Section */}
        <details className="collapse" open={isRatingOpen} onToggle={(e) => setRatingOpen((e.target as HTMLDetailsElement).open)}>
          <summary className="collapse-title text-xl font-medium" >Rating</summary>
          <div className="collapse-content">
            {ratingList.map((rate, index) => (
              <div key={index} className="flex items-center mb-2">
                <input type="checkbox" className="checkbox" checked={checkedStates.rating[index]} onChange={() => handleCheckboxChange('rating', index)} />
                <span className="label-text ml-2">{rate}</span>
              </div>
            ))}
          </div>
        </details>

        {/* Recent Section */}
        <details className="collapse" open={isRecentOpen} onToggle={(e) => setRecentOpen((e.target as HTMLDetailsElement).open)}>
          <summary className="collapse-title text-xl font-medium">Recent</summary>
          <div className="collapse-content">
            {recentList.map((recent, index) => (
              <div key={index} className="flex items-center mb-2">
                <input type="checkbox" className="checkbox" checked={checkedStates.recent[index]} onChange={() => handleCheckboxChange('recent', index)} />
                <span className="label-text ml-2">{recent}</span>
              </div>
            ))}
          </div>
        </details>


      </form>





      {/* Reset Button */}
      <div className="m-4 flex justify-between">
        <button
          className="text-[#286F40]"
          onClick={resetCheckboxes}
        >
          Reset
        </button>
        <button
          className="btn bg-white border border-[#286F40] text-[#286F40] hover:bg-[#286F40] hover:text-white"
        >
          {/* idk what do for onclick */}
          Show results
        </button>
      </div>
    </div>
  );
};
