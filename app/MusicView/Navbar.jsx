"use client"


import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Bell, UserRound, LibraryIcon, SearchIcon, UserRoundIcon, UserCircle, UserCircle2Icon } from 'lucide-react';
import Link from 'next/link';

function Navbar2() {

const [dropDown,setDropDown]=useState(false)

  return (
      <div className="flex justify-between h-[5rem]   " >
      <div className="flex gap-2 items-center">
      <img className='rounded-full w-14 h-14' src='rythm_logo.jpg'></img>
                <h1 className=' text-3xl font-bold text-red-600 '>𝐑𝐲𝐭𝐡𝐦 𝐦𝐮𝐬𝐢𝐜 𝐩𝐥𝐚𝐭𝐟𝐨𝐫𝐦</h1>
      </div>
      <div className="flex gap-4 items-center  me-4 ">
        <input  className='rounded-lg p-1 text-black text-xs '  placeholder='search here '/>
      {/* <button>
       <SearchIcon/>
       </button> */}
        <button className='relative'>
          {
            dropDown&&(
              <div className=' top-8 rounded-lg rounded-tr-none h-auto w-32  absolute flex flex-col gap-2  '>
                <div className='text-white p-2 hover:bg-stone-800 bg-opacity-40'>arabic </div>
                <div className='text-white p-2 hover:bg-stone-800 bg-opacity-40'>tamil </div>
                <div className='text-white p-2 hover:bg-stone-800 bg-opacity-40'>malayalm </div>
                <div className='text-white p-2 hover:bg-stone-800 bg-opacity-40'>hindi </div>
                <div className='text-white p-2 hover:bg-stone-800 bg-opacity-40'>english </div>



              </div>
            )
          }
       <LibraryIcon onClick={()=>setDropDown(!dropDown)}/>
       </button>
        <button className="p-2">
          <Bell/>
        </button>
        <Link href="/AccountView">
          <button className=" bg-black rounded-full w-fit p-2">
            <UserCircle2Icon className='hover:dropdown dropdown-end'/>
          </button>
          </Link>
      </div>
    </div>
  )
}

export default Navbar2