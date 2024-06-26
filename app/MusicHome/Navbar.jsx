"use client"


import React, { useState } from 'react'
import {  BellDot, HeartIcon, ListIcon } from 'lucide-react';
import Link from 'next/link';
import MusicCards from './MusicCards';
import PlaylistCards from './ArtistCards';

function Navbar2() {

  const [dropDown, setDropDown] = useState(false)

  return (
    <div className="flex flex-col  h-full w-full rounded-lg " >
      <div className="flex gap-4 items-center  h-[5rem]  w-full  justify-center   rounded-lg ">
        <input className='rounded-full p-3 h-8 w-72 text-white bg-blue-950 text-xs font-extrabold ' placeholder='search here ' />
      </div>
      <div className=' h-[17rem]'>
               <div className='text-white p-2 ms-3 '>
                    <h1 className='font-extrabold'>Popular Artists</h1>
               </div>
               <div className=' h-full w-full'>
                   <PlaylistCards/>
               </div>
      </div>
      <div className='h-full  font-extrabold w-full rounded-b-lg  overflow-y-auto '>
        <h1 className='text-white ms-4'>Popular songs</h1>
        <MusicCards/> 
      </div>
    </div>
  )
}

export default Navbar2