import { PlayCircle } from 'lucide-react'
import React from 'react'

function Cards() {
    return (
        <>
            <div className=' text-white  justify-evenly  '>
                <div className=' rounded-lg w-auto h-auto p-2 mt-2 flex items-center justify-around'>
                    <div className='rounded-lg  h-[9rem] bg-black p-5 '>
                        <img className='w-20 h-20' src='rythm_logo.jpg'></img>
                    </div>
                    <div className='p-1 text-white'>
                        <h1>Daily mix one</h1>
                        <h3>EMinem,Akon,Bruno</h3>
                        <h6>mars and more</h6>
                    </div>
                    <div>
                        <PlayCircle/>
                    </div>
                </div>
                <div className=' rounded-lg w-auto h-auto p-2 mt-2 flex items-center justify-around'>
                    <div className='rounded-lg  h-[9rem] bg-black p-5 '>
                        <img className='w-20 h-20' src='rythm_logo.jpg'></img>
                    </div>
                    <div className='p-1 text-white'>
                        <h1>Daily mix one</h1>
                        <h3>EMinem,Akon,Bruno</h3>
                        <h6>mars and more</h6>
                    </div>
                    <div>
                        <PlayCircle/>
                    </div>
                </div>
                <div className=' rounded-lg w-auto h-auto p-2 mt-2 flex items-center justify-around'>
                    <div className='rounded-lg  h-[9rem]  bg-black p-5 '>
                        <img className='w-20 h-20' src='rythm_logo.jpg'></img>
                    </div>
                    <div className='p-1 text-white'>
                        <h1>Daily mix one</h1>
                        <h3>EMinem,Akon,Bruno</h3>
                        <h6>mars and more</h6>
                    </div>
                    <div>
                        <PlayCircle/>
                    </div>
                </div>
                <div className=' rounded-lg w-auto h-auto p-2 mt-2 flex items-center justify-around'>
                    <div className='rounded-lg  h-[9rem] bg-black p-5 '>
                        <img className='w-20 h-20' src='rythm_logo.jpg'></img>
                    </div>
                    <div className='p-1 text-white'>
                        <h1>Daily mix one</h1>
                        <h3>EMinem,Akon,Bruno</h3>
                        <h6>mars and more</h6>
                    </div>
                    <div>
                        <PlayCircle/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
