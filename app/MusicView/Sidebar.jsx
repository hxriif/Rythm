import { HeartIcon, HomeIcon, LibraryIcon, LogOutIcon, PlusIcon, UserCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Sidebar() {
    return (
        <div className='h-full w-full flex flex-col   rounded-l-lg gap-9 p-2 '>
            <div className='flex items-center p-2  text-white rounded-lg flex-col '>
                <img className='h-10 w-10 rounded-full' src='rythm_logo.jpg' />
                <h1 className=' text-x text-blue-500  '>𝐑𝐲𝐭𝐡𝐦 </h1>
            </div>
            <div className='text-white  flex flex-col rounded-lg p-2   gap-6 h-full items-center'>
                <div>
                    <Link href="/FirstView">
                        <button className='flex gap-3 hover:text-blue-600'><HomeIcon /></button>
                    </Link>
                </div>
                <div>
                    <button className='hover:text-blue-600'><LibraryIcon /></button>
                </div>
                <div>
                    <button className='hover:text-blue-600'><PlusIcon /> </button>
                </div>
                <div>
                    <button className='hover:text-blue-600'><UserCircle /> </button>
                </div>
                <div>
                    <Link href="/LikedSongsView">
                        <button className='hover:text-blue-600'><HeartIcon /></button>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col items-center  h-full gap-3 '>
                <Link href="/AccountView">
                    <button> <img className='rounded-full h-14 w-14 mt-8' src='rythm_logo.jpg' /></button>
                </Link>
                <button>
                    <LogOutIcon />
                </button>
            </div>
        </div>
    )
}

export default Sidebar
