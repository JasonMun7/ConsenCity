import Image from "next/image";
import { useState, useEffect } from 'react'
import React from "react";
import Navbar from "../components/navbar"
import background1 from '../assets/background1.png'
import {supabaseBrowser} from '../lib/supabase/browser'
import {createClient} from '../lib/supabase/server'


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
  console.log(post)

  return (
    <>
      <div className="bg-cover bg-center h-[100vh]" style={{ backgroundImage: `url(${background1.src || background1})`}}>
        <Navbar/>
      </div>
    </>
  );
}
