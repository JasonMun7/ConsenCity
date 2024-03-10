"use client"

import Image from "next/image";
import {useState, useEffect} from 'react'
import React from "react";
import { CardBody, CardContainer, CardItem } from '../components/3d-card'
import{ Post} from '../components/post'
import {SidePost} from '../components/SidePost'
export default function Home() {
  return (
    <>
    <div className = "flex justify-center w-full h-full">
      <SidePost name="Project Name" tags={["Waste Management", "Education", "Safety"]}/>
    </div>
      
    </>
  );
}
