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
    <div>
      <SidePost name="Post 1" tags={["tag1", "tag2", "tag3"]}/>
    </div>
      
    </>
  );
}
