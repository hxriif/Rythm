import React from 'react'
import { ChevronLeft, ChevronRight, ArrowDownToLine, Bell, UserRound, ChevronDownCircle, InstagramIcon, TwitterIcon, FacebookIcon, UserCircle2Icon, LibraryBigIcon, LibrarySquare, LibraryIcon, GemIcon, BombIcon, LinkedinIcon, HeartPulse, HeartHandshake, BookHeart, HeartIcon, Music3, Music4, MusicIcon, SearchCodeIcon, SearchXIcon, SearchIcon, CirclePlayIcon, FileStack, HomeIcon, Music2Icon, MinusIcon, FileMusicIcon } from 'lucide-react';


function Navbar2() {
  return (
      <div className="flex justify-between p-2  ">
      <div className="flex gap-2 ">
        <button className="bg-black rounded-full w-fit p-2 hover:text-green-500">
          <ChevronLeft strokeWidth={2} />
        </button>
        <button className="bg-black rounded-full w-fit p-2 hover:text-green-500">
          <ChevronRight strokeWidth={2} />
        </button>
      </div>
      <div className="flex gap-3 items-center  ">
        <button className="rounded-full">
          Explore Premium
        </button>
        <button className="rounded-full bg-black text-white flex">
          <ArrowDownToLine />
          Install App
        </button>
        <div className="p-2">
          <Bell className='hover:ring-2 rounded-md'/>
        </div>
          <div className=" bg-black rounded-full w-fit p-2">
            <UserRound className='hover:dropdown dropdown-end'/>
          </div>
      </div>
    </div>
  )
}

export default Navbar2