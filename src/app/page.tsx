import Image from "next/image";
import { useState, useEffect } from 'react'
import React from "react";

import Navbar from "../components/navbar"
import background1 from '../assets/background1.png'
import {supabaseBrowser} from '../lib/supabase/browser'
import {createClient} from '../lib/supabase/server'

import {Post} from "../components/post"
import {SidePost} from "../components/SidePost"
import {Filter} from '../components/Filter'


const supabase = createClient()

async function fetchData(){
  const {data, error} = await supabase.from("Posts").select()
  if (error){
    throw error
  }
  return data
}

export default async function Home() {
  const post = await fetchData()

  return (
    <>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${background1.src || background1})`}}>
        <Navbar/>


          <div className="flex flex-row justify-between">
            <Filter/>

            <div className="flex flex-col ">
              {post.map((post) => <Post key={post.id} name={post.title} image={post.img_url} description={post.description} tags={post.categories}/>)}
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="text-[#286F40] font-bold text-3xl">
                Recently Posted 
              </div>
              <SidePost name="This is Testing text" tags={["Energy"]}/>
              <SidePost name="This is Testing text" tags={["Energy"]}/>
              <SidePost name="This is Testing text" tags={["Energy"]}/>


              <div className="text-[#286F40] font-bold text-3xl">
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
