import React from 'react'

function PlaylistCreat() {
    return (
        <div className='flex items-center justify-center  h-full w-full '>
            <div className='flex flex-col h-96 w-96 p-2 gap-3 justify-center items-center text-white rounded-lg bg-cover bg-center' style={{ backgroundImage: "url('bg.jpg')" }}>
                <div className='mb-5'>
                    <h1 className='font-extrabold text-cyan-500 ' style={{ fontSize: '2rem' }}>Create Your Playlist</h1>
                </div>
                <div>
                    <input className='p-1  rounded-lg w-64 bg-black' type='text' placeholder='name' />
                </div>
                <div>
                    <input className='p-1  rounded-lg w-64 bg-black' type='text' placeholder='description' />
                </div>
                <div>
                    <input className='p-1  rounded-lg w-64 bg-black' type='file' placeholder='image' />
                </div>
                <div className='mt-8'>
                    <button className='border rounded-lg p-2 hover:bg-slate-500'>Create</button>
                </div>
            </div>
        </div>
    )
}

export default PlaylistCreat
