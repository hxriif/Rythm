import { PlayCircle, Volume1, Volume2 } from 'lucide-react'
import React from 'react'

function Cards() {
    return (
        <>
            <div className=' text-red-600  justify-evenly mb-5 '>
                <div className=' rounded-lg w-auto h-auto p-2 mt-2 flex items-center justify-around'>
                    <div className='rounded-lg  h-[9rem] bg-black p-5 '>
                        <img className='w-20 h-20' src='rythm_logo.jpg'></img>
                    </div>
                    <div className='p-1 text-white'>
                        <h1>Daily mix one</h1>
                        <h3>EMinem,Akon,Bruno</h3>
                        <h6>mars and more</h6>
                    </div>
                    <div >
                        <button className='flex gap-3'>
                            <PlayCircle className='text-white hover:text-red-600'/>
                            <Volume1 className='text-white hover:text-red-600'/>
                            <Volume2 className='text-white hover:text-red-600'/>
                        </button>
                    </div>
                </div>
                {/* <div className=' rounded-lg w-auto h-auto p-2 mt-2 flex items-center justify-around'>
                    <div className='rounded-lg  h-[9rem] bg-black p-5 '>
                        <img className='w-20 h-20' src='rythm_logo.jpg'></img>
                    </div>
                    <div className='p-1 text-white'>
                        <h1>Daily mix one</h1>
                        <h3>EMinem,Akon,Bruno</h3>
                        <h6>mars and more</h6>
                    </div>
                    <div>
                        <button className='flex gap-3'>
                            <PlayCircle/>
                            <Volume1/>
                            <Volume2/>
                        </button>
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
                        <button className='flex gap-3'>
                            <PlayCircle/>
                            <Volume1/>
                            <Volume2/>
                        </button>
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
                        <button className='flex gap-3'>
                            <PlayCircle/>
                            <Volume1/>
                            <Volume2/>
                        </button>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Cards
