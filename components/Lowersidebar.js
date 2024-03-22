import React from 'react'
import { Home, Search, Plus, Library, Music } from 'lucide-react';

function Lowersidebar() {
  return (
    <div className=' p-2 bg-[#121212] rounded-lg '>
    <div className='p-6 font-medium text-gray-400 flex items-center justify-between'>
      <Library strokeWidth={2} />
      <p >Your Library</p>
      <Plus strokeWidth={2} />
    </div>
    <div className='flex flex-col gap-4'>
      <div className='bg-[#121212] rounded-lg p-4  overflow-y-auto'>
        <div>
          <p className='text-base sm:text-lg'>Your Playlist</p>
          <p>shows here</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Lowersidebar
