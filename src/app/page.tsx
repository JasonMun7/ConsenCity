'use client'
import Image from "next/image";
import { useState, useEffect, Suspense } from 'react'
import React from "react";

import Navbar from "../components/navbar"
import background1 from '../assets/background1.png'
import { supabaseBrowser } from '../lib/supabase/browser'
import { createClient } from '../lib/supabase/server'

import { Post } from "../components/post"
import { SidePost } from "../components/SidePost"
import { Filter } from '../components/Filter'
import { fetchData } from './actions'
import { getUser } from './actions/authAction'
import { User } from "@supabase/supabase-js";
import { CommentProps } from "../components/Comment";

interface PostType {
  id: number;
  title: string;
  img_url: string;
  description: string;
  categories: string[];
}

interface RatingType {
  created_at: string;
  post_id: string;
  rating: number | null;
  user_id: string;
}

// interface UserType {
//           city : string,
//           created_at: string
//           email: string
//           id: string
//           image_url: string | null
//           name: string | null
//           role: string

// }

export default function Home() {
  const [user, setUser] = useState<User | undefined>()
  const [posts, setPosts] = useState<PostType[]>([] as PostType[]);
  const [topRatedPosts, setTopRatedPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchData();
        setPosts(fetchedPosts);
        const user = await getUser();
        setUser(user);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    loadPosts();
  }, []);
  return (
    <>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${background1.src || background1})` }}>
        <Navbar user_img={user?.user_metadata.avatar_url} />


        <div className="flex flex-row pt-10 justify-between">
          <Filter />

          <div className="bg-white h-[85vh] w-[2px]"> </div>


          <div className="flex flex-col overflow-auto h-[85vh]">
            {posts.map((post) => (
              <Post key={post.id} name={post.title} image={post.img_url} description={post.description} tags={post.categories} comments={[{
                name: "Kevin Ram",
                image: "https://pbs.twimg.com/media/F3bNBiiWMAEc-lF.jpg",
                time: "2 min",
                rating: 5,
                comment: "Wow that sounds amazing, I love smart cities. Keep up the good work!"
              },
              {
                name: "Andrew Cheung",
                image: "https://pbs.twimg.com/media/F3bNBiiWMAEc-lF.jpg",
                time: "10 min",
                rating: 3,
                comment: "Seems like it could work, but not completely confident."
              },
              {
                name: "Jason Mun",
                image: "https://pbs.twimg.com/media/F3bNBiiWMAEc-lF.jpg",
                time: "15 min",
                rating: 4,
                comment: "That sounds like a great idea, I never thought about that before, I love smart cities so much!"
              },
              {
                name: "Sean Zhang",
                image: "https://pbs.twimg.com/media/F3bNBiiWMAEc-lF.jpg",
                time: "6 min",
                rating: 1,
                comment: "This is not a good idea at all. You guys should stop before you waste any more taxpayers' money!"
              },]} />
            )

            )}
          </div>

          <div className="bg-white pt-10 h-[85vh] w-[2px]"> </div>


          <div className="flex flex-col gap-y-4 py-10 pr-10">
            <div className="text-[#286F40] font-bold text-3xl mb-4">
              Recently Posted
            </div>
            <SidePost name="Smart Sensor Alerts..." tags={["Health", "Safety"]} />
            <SidePost name="Highway Expansion..." tags={["Transportation", "Infastructure"]} />
            <SidePost name="Renewable Budget..." tags={["Energy"]} />


            <div className="text-[#286F40] font-bold text-3xl mb-4">
              Highest Rated
            </div>
            <SidePost name="Education Reform..." tags={["Education"]} />
            <SidePost name="New Waste Soln..." tags={["Waste Management"]} />
          </div>

        </div>
      </div>
    </>
  );
}

