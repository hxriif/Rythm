import { ChevronLeft, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import LikedsongsCards from './LikedsongsCards';


function Likedsongs() {
    return (
        <div className='text-white h-full w-full  p-3  '>
            <div className=' rounded-lg '>
                <div className='flex gap-4 h-[13rem] p-2 border-b-2 border-cyan-300 '>
                    <div className=' w-48 p-2'>
                        <img className='w-full h-full rounded-lg' src='liked_songs.jpg' />
                    </div>
                    <div className=' p-2 flex flex-col items-start justify-center w-[500px]'>
                        <p className='font-bold'>Playlists</p>
                        <h1 className='font-extrabold ' style={{ fontSize: '4rem' }}>Liked songs</h1>
                        <Link href='/MusicHome'>
                        <button><ChevronLeft/></button>
                        </Link>
                    </div>
                </div>
                <div className='  mt-3'>
                    <LikedsongsCards/>
                </div>

            </div>

        </div>
    )
}

export default Likedsongs;
