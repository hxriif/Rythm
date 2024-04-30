import { HeartIcon, LucideAudioLines, PlayCircle, PlaySquare, Volume1, Volume2 } from 'lucide-react'
import React from 'react'
import Player from '../MusicHome/Player'

function SingleSong() {
  return (
    <div className=' h-screen w-full flex justify-center p-2 items-center '>
      <div className=' w-[30rem] h-[29.8rem] rounded-lg  p-1 bg-slate-500'>
        <div className='bg-black h-[300px] p-2 flex  justify-start items-center rounded-lg rounded-b-none gap-3'>
          <div className='w-[14rem] h-[14rem] '>
            <img className='w-full h-full rounded-lg' src='home_image.webp' />
          </div>
          <div className='w-[14rem] h-[14rem] rounded--lg  flex flex-col justify-center '>
            <p>song</p>
            <p className='font-extrabold' style={{ fontSize: "2rem" }}>Mockingbrid</p>
            <p>artist:<span>mockingbird</span></p>
          </div>
        </div>
        <div className='h-[166px]'>
           <Player/>
        </div>
      </div>
    </div>

  )
}

export default SingleSong
