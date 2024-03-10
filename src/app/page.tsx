'use client'
import Image from "next/image";
import { useState, useEffect, Suspense } from 'react'
import React from "react";

import Navbar from "../components/navbar"
import background1 from '../assets/background1.png'
import {supabaseBrowser} from '../lib/supabase/browser'
import {createClient} from '../lib/supabase/server'

import {Post} from "../components/post"
import {SidePost} from "../components/SidePost"
import {Filter} from '../components/Filter'
import {fetchData} from './actions'

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


export default function Home() {
  const [posts, setPosts] = useState<PostType[]>([] as PostType[]);
  const [topRatedPosts, setTopRatedPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchData();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    loadPosts();
  }, []);
  return (
    <>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${background1.src || background1})`}}>
        <Navbar/>


          <div className="flex flex-row pt-10 justify-between">
            <Filter/>

            <div className="bg-white h-[85vh] w-[2px]"> </div>


          <div className="flex flex-col overflow-auto h-[85vh]">
                      {posts.map((post) => (
                        <Post key={post.id} name={post.title} image={post.img_url} description={post.description} tags={post.categories}/>
                      ))}
                    </div>

            <div className="bg-white pt-10 h-[85vh] w-[2px]"> </div>


            <div className="flex flex-col gap-y-4 py-10 pr-10">
                <div className="text-[#286F40] font-bold text-3xl mb-4">
                  Recently Posted 
                </div>
                <SidePost name="This is Testing text" tags={["Energy"]}/>
                <SidePost name="This is Testing text" tags={["Energy"]}/>
                <SidePost name="This is Testing text" tags={["Energy"]}/>


              <div className="text-[#286F40] font-bold text-3xl mb-4">
                Highest Rated
              </div>
              <SidePost name="This is Testing text" tags={["Energy"]}/>
                <SidePost name="This is Testing text" tags={["Energy"]}/>
                <SidePost name="This is Testing text" tags={["Energy"]}/>
              </div>

          </div>
      </div>
    </>
  );
}
