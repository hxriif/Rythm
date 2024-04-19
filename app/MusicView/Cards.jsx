import { HeartIcon, PlayCircle, Volume1, Volume2 } from 'lucide-react'
import React from 'react'
import Sidebar from './Sidebar'
import Navbar2 from './Navbar'
import Sidebar2 from './Sidebar2'


function Cards() {
    return (
        <>
            <div className=' flex h-screen  gap-2   p-2  '>
                <div className='w-[20%] h-full  rounded-lg '>
                   <Sidebar/>
                </div>
                <div className='w-[60%]    rounded-lg'>
             <Navbar2/>
                </div>
                <div className='w-[20%]   rounded-lg'>
                <Sidebar2/>
                </div>
            </div>
        </>
    )
}

export default Cards
