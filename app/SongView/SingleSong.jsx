import { HeartIcon, PlayCircle, Volume1, Volume2 } from 'lucide-react'
import React from 'react'

function SingleSong() {
  return (
    <div className='text-black h-screen w-full flex justify-center p-2 '>
      <div className=' w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl h-auto flex flex-col p-2 rounded-lg bg-white'>
        <div className='w-full h-auto flex flex-col md:flex-row gap-5 p-2'>
          <img className='h-52 w-52 rounded-lg' src='rythm_logo.jpg' alt='Rythm Logo' />
          <div className='w-full md:w-52 h-auto flex flex-col items-center justify-center'>
            <p>aufhsdhfskdhf</p>
            <p>aufhsdhfskdhf</p>
            <p>aufhsdhfskdhf</p>
            <p>aufhsdhfskdhf</p>
            <p>aufhsdhfskdhf</p>
            <p>aufhsdhfskdhf</p>
          </div>
        </div>
        <div className='mt-2 rounded-lg flex flex-col p-2'>
          <p>EMinem</p>
          <p>Mockingbird</p>
          <button><HeartIcon /></button>
        </div>
        <div className='flex flex-col md:f justify-center items-center mt-4'>
          <div className='flex gap-3'>
            <button><Volume1 /></button>
            <button><PlayCircle /></button>
            <button><Volume2 /></button>
          </div>
          <div className='flex items-center'>
            <p>0:01</p>
            <p>_________________________________________________</p>
            <p>3:25</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SingleSong
