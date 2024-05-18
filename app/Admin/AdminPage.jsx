"use client"


import { BellDot,  CircleUserRound,LibraryIcon,LogOutIcon,Mic2,MicVocalIcon, Music,PlaneLandingIcon, UserCircle, } from 'lucide-react'
import Users from './Users'

function AdminPage() {
    
    return (
        <div className='h-full w-full p-2 flex  '>
            <div className='text-white bg-black h-full w-[15%] rounded-l-lg '>
                <div className='flex  justify-center '>
                    <h1 className='font-extrabold ' style={{ fontSize: '2rem' }}>ADMIN</h1>
                </div>
                <div className='flex flex-col items-center   h-[32rem] mt-6 text-[#a232a8] gap-5'>

                    <div>
                        <button><UserCircle /> </button>
                    </div>
                    <div>
                        <button><LibraryIcon /></button>
                    </div>
                    <div>
                        <button><Music /></button>
                    </div>
                    <div>
                        <button><MicVocalIcon /></button>
                    </div>
                    <div>
                        <button><BellDot /></button>
                    </div>
                    <button className=''><LogOutIcon /></button>
                </div>
            </div>
            <div className='text-black bg-gray-900 h-full w-[85%] rounded-r-lg p-2  '>
                <div className='  flex  p-2 gap-2'>
                    <div className='w-auto h-auto p-2 rounded-lg bg-[#4bc371]'>
                            <div>
                                <h1 className='text-white font-extrabold p-2'>Number of <span className=' font-serif'>Users</span></h1>
                            </div>
                            <div className='flex p-2 mt-4 gap-10'>
                                <button><CircleUserRound className='  rounded-lg' size={40} strokeWidth={2.75} /></button>
                                <h1 className='text-white flex items-center' style={{ fontSize: '2rem' }}>1,786</h1>
                            </div>
                        </div><div className='w-auto h-auto p-2 rounded-lg bg-[#a232a8]'>
                                <div>
                                    <h1 className='text-white font-extrabold p-2'>Number of <span className=' font-serif'>Songs</span></h1>
                                </div>
                                <div className='flex p-2 mt-4 gap-10'>

                                    <button><Music className='  rounded-lg' size={40} strokeWidth={2.75} /></button>

                                    <h1 className='text-white flex items-center' style={{ fontSize: '2rem' }}>420</h1>
                                </div>
                            </div><div className='w-auto h-auto p-2 rounded-lg bg-[#bf8655]'>
                                <div>
                                    <h1 className='text-white font-extrabold p-2'>Number of <span className=' font-serif'>Artists</span></h1>
                                </div>
                                <div className='flex p-2 mt-4 gap-10'>
                                    <button><Mic2 className='  rounded-lg' size={40} strokeWidth={2.75} /></button>
                                    <h1 className='text-white flex items-center' style={{ fontSize: '2rem' }}>50</h1>
                                </div>
                            </div><div className='w-auto h-auto p-2 rounded-lg bg-[#61389e]'>
                                <div>
                                    <h1 className='text-white font-extrabold p-2'>Number of <span className=' font-serif'>Pending Requests</span></h1>
                                </div>
                                <div className='flex p-2 mt-4 gap-10'>
                                    <button><PlaneLandingIcon className='  rounded-lg' size={40} strokeWidth={2.75} /></button>
                                    <h1 className='text-white flex items-center' style={{ fontSize: '2rem' }}>20</h1>
                                </div>
                            </div>
                   
                </div>
                <div className=' h-[26rem]'>
                    <Users />
                </div>
            </div>
        </div>
    )
}

export default AdminPage

