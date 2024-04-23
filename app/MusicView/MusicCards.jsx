import { HeartIcon, PlayCircle, Volume1, Volume2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function MusicCards() {
    return (
        <div className='flex  p-2  justify-evenly rounded-lg hover:bg-slate-500  text-white  mt-2 '>
            <div className='bg-cover bg-center w-14 h-14 rounded-lg ' style={{backgroundImage: 'url("home_image.webp")'}}>
            </div>
            <div className='flex items-center'>
                <p>enjoy the next 30 minutes of uninterrupted music listening</p>
            </div>
            <div className='flex items-center gap-3'>
                <Link href="/SongView">
                    <button><PlayCircle /></button>
                </Link>
            </div>
        </div>
    )
}

export default MusicCards
