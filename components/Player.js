import React from 'react'
import { PauseCircleIcon, PlayCircleIcon, Volume1, Volume2, ShuffleIcon, SkipBack, SkipForward, HeartPulse } from 'lucide-react';

function Player() {
  return (
    <div className='h-16 bg-black border-t border-neutral-700 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8'>
    <div className='flex items-center space-x-4'>
    </div>
    <div className='flex items-center justify-center '>
       <PauseCircleIcon  className='w-5 h-5' /> : <PlayCircleIcon  className='w-5 h-5' />
    </div>
    <div className='flex items-center justify-end  space-x-3 md:space-x-4 pr-5'>
      <Volume1  />
      <Volume2  />
    </div>
  </div>
  )
}

export default Player