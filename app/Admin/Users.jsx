import React from 'react'

function Users() {
    return (
        <div className='w-full h-full  flex gap-2 p-2'>
            <div className='bg-slate-700 w-[40rem] rounded-lg overflow-y-auto max-h-full p-2 text-white'>
                <div className='w-full'>
                    <h1 className='flex justify-center font-extrabold text-black text-2xl'>Users</h1>
                </div>
                <div className='flex font-extrabold justify-between p-2 items-center rounded-lg hover:bg-slate-300 bg-slate-500 text-black'>
                    <div>
                        <img className='w-14 h-14 rounded-full' src='home_image.webp' />
                    </div>
                    <div>
                        <h1>#q293jfwjf2384038</h1>
                    </div>
                    <div>
                        <h1>zaidbnuarifc@gmail.com</h1>
                    </div>
                    <div>
                        <h1> harif c</h1>
                    </div>
                </div>
            </div>






            <div className='w-[25rem] bg-slate-700 rounded-lg p-2 overflow-y-auto max-h-full'>
                <div className='w-full '>
                    <h1 className='flex justify-center font-extrabold text-2xl'>Pending Requests</h1>
                </div>
                <div className='w-full hover:bg-slate-300 bg-slate-500  flex justify-between p-2 items-center rounded-lg gap-2'>
                    <div className='flex items-center gap-1'>
                    <img className='w-14 h-14 rounded-full' src='home_image.webp' />
                    <h1>Arjun</h1>
                    </div>
                    <div className='flex gap-2'>
                           <button className='p-2 flex items-center justify-center rounded-lg bg-green-600'>Approve</button>
                           <button className='p-2 flex items-center justify-center rounded-lg bg-red-600'>Reject</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users
