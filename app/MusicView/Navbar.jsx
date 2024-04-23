"use client"


import React, { useState } from 'react'
import {  HeartIcon, ListIcon } from 'lucide-react';
import Link from 'next/link';
import MusicCards from './MusicCards';

function Navbar2() {

  const [dropDown, setDropDown] = useState(false)

  return (
    <div className="flex flex-col  h-full w-full rounded-lg " >
      <div className="flex gap-4 items-center  h-[5rem]  w-full  justify-center bg-black  rounded-lg">
        <input className='rounded-full p-1 h-8 w-72 text-black text-xs ' placeholder='search here ' />
      </div>
      <div className='h-full  text-black w-full rounded-b-lg  bg-black overflow-y-auto '>
        <MusicCards/>
        <MusicCards/>
        <MusicCards/>
        <MusicCards/>
        <MusicCards/>
        <MusicCards/>
        <MusicCards/>
        <MusicCards/>
        <MusicCards/>
        <MusicCards/>
        <MusicCards/>
        <MusicCards/> 
      </div>
    </div>
  )
}

export default Navbar2