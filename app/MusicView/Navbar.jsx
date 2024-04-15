import React from 'react'
import { ChevronLeft, ChevronRight, Bell, UserRound, LibraryIcon, SearchIcon } from 'lucide-react';


function Navbar2() {
  return (
      <div className="flex justify-between    ">
      <div className="flex gap-2 items-center">
      <img className='rounded-full w-14 h-14' src='rythm_logo.jpg'></img>
                <h1 className=' text-2xl font-bold text-red-600 '>𝐑𝐲𝐭𝐡𝐦 𝐦𝐮𝐬𝐢𝐜 𝐩𝐥𝐚𝐭𝐟𝐨𝐫𝐦</h1>
      </div>
      <div className="flex gap-4 items-center  me-4 ">
      <div>
       <SearchIcon/>
       </div>
        <div>
       <LibraryIcon/>
       </div>
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