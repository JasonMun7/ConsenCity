"use client";

import { cn } from "../util/cn";
import Image from "next/image";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

export const Filter = ({
  type
}: {
  type?: string | null
}) => {

  const typeList = ["Project", "Policy"];

  const tagList = ["Infrastructure", "Transportation", "Education", "Energy", "Waste Management", "Safety", "Public Spaces"];

  const rating = ["Highest ratedr"]

  const recent = ["Most recent post", "Oldest post"]


  const [typeOpen, setTypeOpen] = useState(false);
  const [tagsOpen, setTagsOpen] = useState(false);
  const [ratingOpen, setRatingOpen] = useState(false);
  const [recentOpen, setRecentOpen] = useState(false);


  return (
    <>
      <div className="rounded-3xl shadow-xl m-10 p-5 bg-base-200">
        <h2 className="text-2xl font-bold p-5">Filters</h2>

        {/* Filter Type Accordion */}
        <div className="collapse collapse-arrow">
          <input type="radio" name="filter-accordion" id="type-accordion" className="peer hidden" onClick={() => setTypeOpen(!typeOpen)} />
          <label className="collapse-title text-xl font-medium" htmlFor="type-accordion">
            Type
          </label>
          <div className="collapse-content">
            <div className="form-control">

              {
                typeList.map((t) => (
                  <><label className="label cursor-pointer">
                    <span className="label-text">{t}</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  </>
                ))
              }

            </div>
          </div>
        </div>

        {/* tags accordion */}
        <div className="collapse collapse-arrow">
          <input type="radio" name="filter-accordion" id="type-accordion" className="peer hidden" onClick={() => setTagsOpen(!tagsOpen)} />

          <label className="collapse-title text-xl font-medium" htmlFor="type-accordion">
            Tags
          </label>
          <div className="collapse-content">
            <div className="form-control">
              {
                tagList.map((t) => (
                  <><label className="label cursor-pointer">
                    <span className="label-text">{t}</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  </>
                ))
              }
            </div>
          </div>
        </div>

        {/* Rating accordion */}
        <div className="collapse collapse-arrow">
          <input type="radio" name="filter-accordion" id="type-accordion" className="peer hidden" onClick={() => setRatingOpen(!ratingOpen)} />

          <label className="collapse-title text-xl font-medium" htmlFor="type-accordion">
            Rating
          </label>
          <div className="collapse-content">
            <div className="form-control">
              {
                rating.map((t) => (
                  <><label className="label cursor-pointer">
                    <span className="label-text">{t}</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  </>
                ))
              }

            </div>
          </div>
        </div>

        {/* Recent accordion */}
        <div className="collapse collapse-arrow">
          <input type="radio" name="filter-accordion" id="type-accordion" className="peer hidden" onClick={() => setRecentOpen(!recentOpen)} />
          <label className="collapse-title text-xl font-medium" htmlFor="type-accordion">
            Recent
          </label>
          <div className="collapse-content">
            <div className="form-control">
              {
                recent.map((t) => (
                  <><label className="label cursor-pointer">
                    <span className="label-text">{t}</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  </>
                ))
              }
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
