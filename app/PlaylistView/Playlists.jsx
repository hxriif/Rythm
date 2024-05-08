"use client"


import React, { useEffect, useState } from 'react'
import PlaylistMusics from './PlaylistMusics'
import Axios from '../axios'

function Playlists() {

    const [playlists, setplaylists] = useState([])
    const userId = localStorage.getItem("UserId")

    console.log(playlists,'playy');

    useEffect(() => {
        const fetchUserPlaylists = async () => {
            try {
                const response = await Axios.get(`/api/users/getUserPlaylists/${userId}`)
                if (response.status === 200) {
                    setplaylists(response.data.data)
                }
            } catch (error) {
                console.log(error, 'error fetcing user playlists');
            }
        }

        fetchUserPlaylists()
    }, [])





    return (
        <div className='h-full w-full bg-black'>
            <div className=' bg-black ms-2 '>
                <h1 className='font-extrabold text-white'>Your Playlists</h1>
            </div>
            <div className=' h-auto w-full p-1  gap-2  lg:grid-cols-7 grid grid-cols-1 md:grid-cols-2'>
                {playlists.map((playlist) => (
                    <div className='flex   mt-1 h-auto gap-2  lg:grid-cols-7' key={playlist._id}>
                        <div className=' rounded-lg flex flex-col  justify-center border '>
                            <div className='flex '>
                                <img className='rounded-tl-lg h-20 w-20' src={playlist.image} />
                                <img className='rounded-tr-lg h-20 w-20' src={playlist.image}  />
                            </div>
                            <div className='flex '>
                                <img className=' h-20 w-20' src={playlist.image}  />
                                <img className=' h-20 w-20' src={playlist.image}  />
                            </div>
                            <div className='p-1 '>
                                <h1 className='text-sm'>Playlist</h1>
                                <h1 className='font-semibold'>{playlist.name}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Playlists
