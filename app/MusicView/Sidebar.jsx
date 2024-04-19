import { HomeIcon, LibraryIcon,  PlusIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Sidebar() {
    return (
        <div className='h-full w-full flex flex-col   rounded-lg gap-2 p-2 bg-black'>
            <div className='flex items-center p-2 bg-[#0d0d0d] text-white rounded-lg '>
                <img className='h-10 w-10 rounded-full' src='rythm_logo.jpg' />
                <h1 className=' text-x text-blue-500  '>𝐑𝐲𝐭𝐡𝐦 𝐦𝐮𝐬𝐢𝐜 𝐩𝐥𝐚𝐭𝐟𝐨𝐫𝐦</h1>
            </div>
            <div className='text-white bg-[#0f0f0f] flex flex-col rounded-lg p-2   gap-5'>
            <Link href="/FirstView">
                <button className='flex gap-3'><HomeIcon strokeWidth={3}/>Home</button>
            </Link>
                <button className='flex gap-3'><LibraryIcon strokeWidth={3} /> Library</button>
                <button className='flex gap-3'><PlusIcon strokeWidth={3}/> create Playlists</button>
            </div>
            <div className='text-white bg-[#0e0d0d] rounded-lg h-full w-full p-2 flex flex-col items-center overflow-y-auto '>
                <div className='sticky'>
                    <h1>Top rated songs</h1>
                </div>
                <p className='mt-2'>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
                <p>sldjfldkfjldf</p>
            </div>
        </div>
    )
}

export default Sidebar
