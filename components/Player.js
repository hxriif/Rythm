import React from 'react'
import { PauseCircleIcon, PlayCircleIcon, Volume1, Volume2, ShuffleIcon, SkipBack, SkipForward, HeartPulse } from 'lucide-react';

function Player() {
  return (
    <div className=' bg-black h-[4rem] flex justify-around p-3'>
      <div>
      </div>
      <div>
        <div className='flex gap-5'>
          <ShuffleIcon />
          <SkipBack />
          <PlayCircleIcon />
          <SkipForward />
          <HeartPulse />
        </div>
        <div>
        </div>
      </div>
      <div className='flex gap-5'>
        <Volume1 />
        <Volume2 />
      </div>
    </div>
  )
}

export default Player