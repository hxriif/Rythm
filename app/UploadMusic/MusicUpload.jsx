import React from 'react'

function MusicUpload() {
    return (
        <div className='w-full h-full flex items-center justify-center '>
            <div className='h-[28rem] w-[28rem] flex flex-col items-center p-2 gap-2 bg-cover bg-center rounded-lg' style={{ backgroundImage: "url('bg.jpg')" }}>                <div className='mt-3 w-full flex justify-center p-2'>
                <h1 className='font-extrabold text-cyan-500' style={{ fontSize: '20px' }}>Add Your Own Music To Rythm</h1>
            </div>
                <div className=''>
                    <input className='p-1  rounded-lg w-64 bg-black' type='text' placeholder='name' />
                </div>
                <div>
                    <input className='p-1 rounded-lg bg-black w-64 ' type='file' placeholder='image' />
                </div>
                <div>
                    <input className='p-1 rounded-lg w-64 bg-black' type='text' placeholder='category' />
                </div>
                <div>
                    <input className='p-1 rounded-lg w-64 bg-black' type='text' placeholder='description' />
                </div>
                <div>
                    <input className='p-1 rounded-lg w-64 bg-black' type='text' placeholder='Artist' />
                </div>
                <div>
                    <input className='p-1 rounded-lg w-64 bg-black' type='file' placeholder='song' />
                </div>
                <div className='mt-3'>
                    <button className='bg-black text-white rounded-lg p-2 border hover:bg-slate-400'>Upload</button>
                </div>
            </div>
        </div>
    )
}

export default MusicUpload
