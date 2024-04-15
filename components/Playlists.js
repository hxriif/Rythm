import { ChevronLeft, ChevronRight, Search, SkipForward } from 'lucide-react'
import React from 'react'

function Playlists() {
  return (
    <div className=''>
      <div className='bg-gray-500  rounded-lg h-[2.8rem] w-[15rem] text-white p-2 flex gap-4 hover:text-green-500 mt-3'>
        <h1>Playlists</h1>
        <h1>image</h1>
      </div>
      <button className='flex p-2 text-white hover:text-blue-400 mt-2'>show all <ChevronRight /></button>
    </div>
  )
}

export default Playlists
