import { HeartOff, PlayCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function LikedsongsCards() {
    return (
        <div className='w-full h-full  p-3 flex gap-5  '>
           <div className='bg-gradient-to-r from-indigo-500 rounded-lg w-[18rem] h-32 text-white flex gap-4'>
            <div className='flex justify-center items-center ms-3'>
               <img className='w-14 h-14 rounded-lg' src='rythm_logo.jpg'/>
            </div>
            <div className=' flex flex-col justify-center'>
                <h1>song name</h1>
                <h1>artist name</h1>
            </div>
            <div className='flex items-center '>
                <button><HeartOff/></button>
            </div>
                 
           </div>
           <div className='bg-gradient-to-r from-indigo-500 rounded-lg w-[18rem] h-32 text-white flex gap-4'>
           <div className='flex justify-center items-center ms-3'>
               <img className='w-14 h-14 rounded-lg' src='rythm_logo.jpg'/>
            </div>
            <div className='flex flex-col justify-center '>
                <h1>song name</h1>
                <h1>artist name</h1>
            </div>
            <div className='flex items-center '>
                <button><HeartOff/></button>
            </div>
           </div>
           <div className='bg-gradient-to-r from-indigo-500 rounded-lg w-[18rem] h-32 text-white flex gap-4'>
           <div className='flex justify-center items-center ms-3'>
               <img className='w-14 h-14 rounded-lg' src='rythm_logo.jpg'/>
            </div>
            <div className='flex flex-col justify-center '>
                <h1>song name</h1>
                <h1>artist name</h1>
            </div>
            <div className='flex items-center '>
                <button><HeartOff/></button>
            </div>
           </div>
           <div className='bg-gradient-to-r from-indigo-500 rounded-lg w-[18rem] h-32 text-white flex gap-4'>
           <div className='flex justify-center items-center ms-3'>
               <img className='w-14 h-14 rounded-lg' src='rythm_logo.jpg'/>
            </div>
            <div className='flex flex-col justify-center '>
                <h1>song name</h1>
                <h1>artist name</h1>
            </div>
            <div className='flex items-center '>
                <button><HeartOff/></button>
            </div>
           </div>
        </div>
    )
}

export default LikedsongsCards