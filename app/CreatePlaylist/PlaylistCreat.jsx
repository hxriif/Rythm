"use client"

import React, { useEffect, useState } from 'react'
import Axios from '../axios'
import toast from 'react-hot-toast'
import { CircleChevronLeft } from 'lucide-react'
import Link from 'next/link'

function PlaylistCreat() {

    const userId = localStorage.getItem("UserId")

    const [Name, setName] = useState("")
    const [Description, setdescription] = useState("")


    const payload = { name: Name, description: Description}

    const playlistCreation = async () => {
        try {
            const response = await Axios.post(`/api/users/createPlaylist/${userId}`, payload)
            if(response.status===200){
            toast.success("Successfully created playlist")
        }
        } catch (error) {
            console.log(error, 'failed')

        }
    }

    useEffect(() => {
        playlistCreation()
    }, [])






    return (
        <div className='flex items-center justify-center  h-full w-full '>
            <div className='flex flex-col h-96 w-96 p-2 gap-3 justify-center items-center text-white rounded-lg bg-cover bg-center' style={{ backgroundImage: "url('bg.jpg')" }}>
                <div className='mb-5'>
                    <h1 className='font-extrabold text-cyan-500 ' style={{ fontSize: '2rem' }}>Create Your Playlist</h1>
                </div>
                <div>
                    <input className='p-1  rounded-lg w-64 bg-black' type='text' placeholder='name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input className='p-1  rounded-lg w-64 bg-black' type='text' placeholder='description' onChange={(e) => setdescription(e.target.value)} />
                </div>
                <div className='mt-8'>
                    <button className='border rounded-lg p-2 hover:bg-slate-500' onClick={playlistCreation}>Create</button>
                </div>
                <div className='flex justify-end  w-full'>
                    <Link href="/MusicHome">
                    <button><CircleChevronLeft/></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PlaylistCreat
