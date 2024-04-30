import { LogOut } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Prequest() {
    return (
        <div className='h-full w-full '>
            <div className=' h-full flex items-center justify-center'>
                <div className='bg-white text-black h-[33rem] w-[25rem] rounded-lg'>
                    <div className='flex justify-center items-center border-b-2 gap-7'>
                        <h1 className='font-extrabold text-[#0d080e]' style={{ fontSize: '2rem' }}>Pending requests</h1>
                        <Link href='/Admin'>
                        <button className='flex items-center'><LogOut/></button>
                        </Link>
                    </div>
                    <div className='flex p-2 justify-between items-center h-auto '>
                        <div className='flex gap-4 items-center w-auto'>
                            <img className='w-14 h-14 rounded-lg' src='home_image.webp' />
                            <h1 className='font-semibold'>#id</h1>
                        </div>
                        <div className='flex gap-2'>
                            <button className='bg-green-600 rounded-lg p-1 text-white font-semibold'>approve</button>
                            <button className='bg-red-700 rounded-lg p-1 text-white font-semibold'>Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prequest
