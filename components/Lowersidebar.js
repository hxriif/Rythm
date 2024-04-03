import React from 'react'
import { Home, Search, Plus, Library, Music } from 'lucide-react';
import Display from './Display';
import Playlists from './Display';
import Navbar from './Navbar';

function Lowersidebar() {
  return (
    <div className=' p-2 bg-[#121212] rounded-lg '>
      <div className='p-6 font-medium text-gray-400 flex items-center justify-between'>
        <Library strokeWidth={2} />
        <p > About Artists</p>
        <Plus strokeWidth={2} />
      </div>
      <div className='flex flex-col gap-4 '>
        <div className='bg-[#121212] rounded-lg p-4 overflow-y-auto max-h-[400px] '>
          <div>
            <Playlists />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lowersidebar
