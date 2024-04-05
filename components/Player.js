import React from 'react'
import { PauseCircleIcon, PlayCircleIcon, Volume1, Volume2, ShuffleIcon, SkipBack, SkipForward, HeartPulse } from 'lucide-react';

function Player() {
  return (
    <div className='  flex justify-around p-3 w-screen'>
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