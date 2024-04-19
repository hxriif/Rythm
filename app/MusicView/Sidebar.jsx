import { HomeIcon, LibraryIcon, PlusIcon } from 'lucide-react'
import React from 'react'

function Sidebar() {
    return (
        <div className='h-full w-full flex flex-col   rounded-lg gap-2 p-2 bg-[#343333]'>
            <div className='flex items-center p-2 bg-[#161515] text-white rounded-lg '>
                <img className='h-10 w-10 rounded-full' src='rythm_logo.jpg' />
                <h1 className=' text-x text-red-600  '>𝐑𝐲𝐭𝐡𝐦 𝐦𝐮𝐬𝐢𝐜 𝐩𝐥𝐚𝐭𝐟𝐨𝐫𝐦</h1>
            </div>
            <div className='text-white bg-[#161515] flex flex-col rounded-lg p-2   gap-5'>
                <button className='flex gap-3'><HomeIcon />Home</button>
                <button className='flex gap-3'><LibraryIcon /> Library</button>
                <button className='flex gap-3'><PlusIcon /> create Playlists</button>
            </div>
            <div className='text-white bg-[#161515] rounded-lg h-full w-full p-2 flex flex-col items-center '>
                <h1 className=''>Top rated songs</h1>
                <p className='mt-2'>sldjfldkfjldf</p>
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
