import React from 'react'
import { ChevronLeft, ChevronRight, Bell, UserRound, LibraryIcon, SearchIcon } from 'lucide-react';


function Navbar2() {
  return (
      <div className="flex justify-between    ">
      <div className="flex gap-2 ">
        <button className="bg-black rounded-full  p-2 hover:text-green-500">
          <ChevronLeft strokeWidth={2} />
        </button>
        <button className="bg-black rounded-full  p-2 hover:text-green-500">
          <ChevronRight strokeWidth={2} />
        </button>
      </div>
      <div className="flex gap-4 items-center  ">
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