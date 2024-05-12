"use client"

import { CreativeCommonsIcon, HeartIcon, HomeIcon, LibraryIcon, LogOutIcon, PlusIcon, PlusSquareIcon, UserCircle } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Axios from '../axios';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [userDetails, setUserDetails] = useState([])
  const userId = localStorage.getItem("UserId")

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  useEffect(() => {

    const fetchUserDetails = async () => {
      try {
        const response = await Axios.get(`/api/users/getDetails/${userId}`)
        if (response.status === 200) {
          setUserDetails(response.data.data)
        }
      } catch (error) {

      }
    }
    fetchUserDetails()

  }, [])

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
                {/* <div>
                    <Link href="/PlaylistView">
                    <button className='hover:text-blue-600'><LibraryIcon /></button>
                    </Link>
                </div> */}
                <div className="relative">
                    <button onClick={toggleDropdown} className="flex items-center hover:text-blue-600 focus:outline-none">
                        <PlusIcon />
                    </button>
                    {isOpen && (
                        <div className="origin-top-right absolute left-0 mt-2 w-32 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <Link href='/CreatePlaylist'>
                                    <button className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 w-full text-left " role="menuitem">Playlist</button>
                                </Link>
                                <Link href="/UploadMusic">
                                    <button className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 w-full text-left" role="menuitem">Upload music</button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

            </div>
            {userDetails.map((user)=>(
            <div className='flex flex-col items-center   h-auto ' key={user._id}>
                <Link href="/AccountView">
                    <button> <img className='rounded-lg  h-14 w-14 mt-8' src={user.image} /></button>
                </Link>
                {/* <Link href="/LoginPage">
                <button>
                    <LogOutIcon />
                </button>
                </Link> */}
            </div>
            ))}
        </div>
    )
}

export default Sidebar
