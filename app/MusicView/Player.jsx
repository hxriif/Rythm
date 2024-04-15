import React from 'react'
import { PauseCircleIcon, PlayCircleIcon, Volume1, Volume2, ShuffleIcon, SkipBack, SkipForward, HeartPulse } from 'lucide-react';

function Player() {
  return (
    <div className='h-16 bg-black border-t border-neutral-700   text-xs md:text-base px-2 md:px-8 flex justify-between p-3  '>
    <div className='flex p-2'>
      <h1>dfiifg</h1>
    </div>
    <div>
      <div className='flex bg-red-600  '>
        <PlayCircleIcon  className='w-10 h-10' />
        </div>
        <div>
          <h1>ifgiugfegf</h1>
        </div>
    </div>
    <div className='flex  p-2 '>
      <Volume1  />
      <Volume2  />
    </div>
  </div>
  )
}

export default Player