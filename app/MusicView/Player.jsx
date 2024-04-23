import React from 'react'
import { PauseCircleIcon, PlayCircleIcon, Volume1, Volume2, ShuffleIcon, SkipBack, SkipForward, HeartPulse, HeartIcon } from 'lucide-react';

function Player() {
  return (
    <div className='w-full h-full text-white bg-black rounded-lg rounded-t-none'>
       <div className='flex justify-center gap-4 p-2 '>
        <button><ShuffleIcon className='w-5 h-5'/></button>
         <button><SkipBack className='w-6 h-6'/></button>
         <button><PlayCircleIcon className='w-9 h-9' /></button>
         <button><SkipForward className='w-6 h-6'/></button>
         <button><HeartIcon  className='w-5 h-5'/></button>
       </div>
       <div>

       </div>
    </div>
  )
}

export default Player