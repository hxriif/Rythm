import { CircleAlert, CircleDashed, CircleUserRound,  LogInIcon, LogOutIcon, MicVocal, Music, Music2, UserCircle, Users2 } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

function AdminPage() {
    return (
        <div className='h-full w-full p-2 flex  '>
            <div className='text-white bg-black h-full w-[15%] rounded-l-lg '>
                <div className='flex  justify-center'>
                    <h1 className='font-extrabold ' style={{ fontSize: '2rem' }}>ADMIN</h1>
                </div>
                <div className='flex flex-col items-center   h-[32rem] mt-2 text-[#a232a8]'>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>D</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>A</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>S</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>H</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>B</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>O</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>A</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>R</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>D</h1>
                    <Link href='/Loginpage'>
                    <button className='mt-5'><LogOutIcon /></button>
                    </Link>
                </div>
            </div>
            <div className='text-black bg-gray-900 h-full w-[85%] rounded-r-lg p-2  '>
                <div className='  flex justify-evenly p-2'>
                    <div className='w-80 h-44 rounded-lg bg-slate-950'>
                        <div>
                            <h1 className='text-white font-extrabold p-2'>Number of <span className=' font-serif'>Users</span></h1>
                        </div>
                        <div className='flex p-2 mt-4 gap-10'>
                            <Link href='Admin/users'>
                            <button><CircleUserRound className=' bg-[#a232a8] rounded-lg' size={58} strokeWidth={2.75} /></button>
                            </Link>
                            <h1 className='text-white flex items-center' style={{ fontSize: '2rem' }}>1,786</h1>
                        </div>
                    </div>
                    <div className='w-80 h-44 rounded-lg bg-slate-950'>
                        <div>
                            <h1 className='text-white font-extrabold p-2'>Number of <span className=' font-serif'>Songs</span></h1>
                        </div>
                        <div className='flex p-2 mt-4 gap-10'>
                        <Link href='Admin/songs'>
                           <button><Music className=' bg-[#a232a8] rounded-lg' size={58} strokeWidth={2.75} /></button>
                           </Link>
                            <h1 className='text-white flex items-center' style={{ fontSize: '2rem' }}>1,786</h1>
                        </div>
                    </div>
                </div>
                <div className='  flex justify-evenly p-2 mt-3'>
                    <div className='w-80 h-44 rounded-lg bg-slate-950'>
                        <div>
                            <h1 className='text-white font-extrabold p-2'>Number of <span className=' font-serif'>Artists</span></h1>
                        </div>
                        <div className='flex p-2 mt-4 gap-10'>
                        <button> <MicVocal className=' bg-[#a232a8] rounded-lg' size={58} strokeWidth={2.75} /></button>
                            <h1 className='text-white flex items-center' style={{ fontSize: '2rem' }}>1,786</h1>
                        </div>
                    </div>
                    <div className='w-80 h-44 rounded-lg bg-slate-950'>
                        <div>
                            <h1 className='text-white font-extrabold p-2'>Number of <span className=' font-serif'>Pending Requests</span></h1>
                        </div>
                        <div className='flex p-2 mt-4 gap-10'>
                        <Link href='Admin/pendingRequest'>
                        <button><CircleDashed className=' bg-[#a232a8] rounded-full' size={58} strokeWidth={2.75} /></button>
                        </Link>
                            <h1 className='text-white flex items-center' style={{ fontSize: '2rem' }}>1,786</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage

