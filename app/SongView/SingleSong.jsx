import { HeartIcon, PlayCircle, Volume1, Volume2 } from 'lucide-react'
import React from 'react'

function SingleSong() {
  return (
    <div className='text-white  h-screen w-screen flex  justify-center p-2 items-center '>
      <div className=' bg-blue-400 w-auto h-auto flex flex-col  p-2  rounded-lg '>
             <div className='w-fit h-fit flex gap-5'>
              <img className='h-52 w-52 rounded-lg' src='rythm_logo.jpg'/>
              <div className=' w-52 h-40 flex flex-col items-center justify-center  ' >
              <p>aufhsdhfskdhf</p>
                 <p>aufhsdhfskdhf</p>
                 <p>aufhsdhfskdhf</p>
                 <p>aufhsdhfskdhf</p>
                 <p>aufhsdhfskdhf</p>
                 <p>aufhsdhfskdhf</p>
              </div>
             </div>
             <div className='mt-2 rounded-lg h-auto flex flex-col   '>
             <p>EMinem</p>
              <p>Mockingbird</p>
              <button><HeartIcon/></button>
             </div> 
             <div className='flex flex-col justify-center items-center mt-4 '>
                <div className='flex gap-3 '>
                       <button><Volume1/></button>
                       <button><PlayCircle/></button>
                       <button><Volume2/></button>
                </div>
                <div className='flex'>
                  <p>0:01</p>
                  <p>_____________________________________________________________</p>
                  <p>3:25</p>
                </div>
             </div>
      </div>
    </div>
  )
}

export default SingleSong
