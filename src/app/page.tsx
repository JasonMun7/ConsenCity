import Image from "next/image";
import {useState, useEffect} from 'react'
import React from "react";
import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import {Database} from '../../database.types'
import {cookies} from 'next/headers'

async function fetchData(){
  const supabase = createServerComponentClient<Database>({
    cookies
  })

  const {data, error} = await supabase.from('test').select("*");
  if(error){
    throw error
  }
  console.log(data)
  return data
}

export default async function Home() {
  const test = await fetchData()

  return (
    <>
    {test && (
      test.map(test => (
        <p className="text-red-500">{test.name}</p>
      ))
    )}

    </>
  );
}
