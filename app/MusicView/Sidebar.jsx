"use client"

import { CreativeCommonsIcon, HeartIcon, HomeIcon, LibraryIcon, LogOutIcon, PlusIcon, PlusSquareIcon, UserCircle } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


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
                    <Link href="/LikedSongsView">
                        <button className='hover:text-blue-600'><HeartIcon /></button>
                    </Link>
                </div>
                <div>
                    <button className='hover:text-blue-600'><LibraryIcon /></button>
                </div>
                <div className="relative">
                    <button onClick={toggleDropdown} className="flex items-center hover:text-blue-600 focus:outline-none">
                        <PlusIcon />
                    </button>
                    {isOpen && (
                        <div className="origin-top-right absolute left-0 mt-2 w-32 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <Link href='/CreatePlaylist'>
                                    <button className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 w-full text-left" role="menuitem">Create Playlist</button>
                                </Link>
                                <Link href="/UploadMusic">
                                    <button className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 w-full text-left" role="menuitem">Upload music</button>
                                </Link>
                            </div>
                        </div>
                    )}
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
