"use client"

import { PlayCircle } from 'lucide-react'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Axios from '../axios';
import { useRouter } from 'next/navigation';


function MusicCards() {
    const [musics, setMusics] = useState([])
    const router = useRouter()

    const handlePassId = (musicId) => {
        router.push(`/SongView/${musicId}`)
    }

    useEffect(() => {
        const musicFetch = async () => {
            try {
                const response = await Axios.get("/api/users/getallMusics");
                if (response.status === 200) {
                    setMusics(response.data.data);
                }
            } catch (error) {
                console.log("error", error.message);
            }
        };

        musicFetch()
    }, []);

    return (
        <div className="music-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-4">
            {musics.length>0?(
            musics.map((music) => (
                <div key={music._id} className="music-card bg-red-950 rounded-lg overflow-hidden shadow-md w-[10rem] ">
                    <img
                        className="w-full h-32 object-cover object-center"
                        src={music.image}
                        alt={music.name}
                    />
                    <div className="p-4">
                        <h3 className="text-white text-lg font-semibold">{music.name}</h3>
                        <p className="text-white text-sm">{music.artist}</p>
                        <div className="flex items-center mt-2 ">

                            <Link href={`/SongView/${music._id}`}>
                                <button
                                    className="flex items-center text-white hover:text-gray-300"
                                    onClick={() => handlePassId(music._id)}
                                >
                                    <PlayCircle size={20} /> Play Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        ):(
            <div className='flex h-[15rem] w-[50rem] rounded-lg bg-white items-center justify-center'>
            <h1 className='text-red-600 font-extrabold'>Login To get Musics</h1>
            </div>
        )
        }
        </div>
    );
}

export default MusicCards
