"use client"


import { HeartIcon, PlayCircle, Volume1, Volume2 } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Axios from '../axiosInstance'

function MusicCards() {

    const [musics, setMusics] = useState([])

    useEffect(() => {
        const musicFetch = async () => {
            try {
                const response = await Axios.get("/api/users/getallMusics")
                if (response.status === 200) {
                    setMusics(response.data)
                }
            } catch (error) {
                console.log("error", error.message)
            }
        }
        musicFetch()
        window.scrollTo(0, 0);

    }, [])


    return (
        <div className='flex flex-col sm:flex-row items-center p-2 justify-evenly rounded-lg hover:bg-slate-500 text-white mt-2'>
            <div className='bg-cover bg-center w-14 h-14 rounded-lg mb-2 sm:mb-0 sm:mr-2' style={{ backgroundImage: 'url("home_image.webp")' }}></div>
            <div className='flex flex-col items-center gap-2 sm:flex-row'>
                <p className='text-center sm:text-left'>Enjoy the next 30 minutes of uninterrupted music listening</p>
                <div className='flex items-center gap-3 mt-2 sm:mt-0'>
                    <Link href="/SongView">
                        <button><PlayCircle /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MusicCards
