import React from 'react'
import Link from 'next/link'


function Sidebar2() {
  return (
    <div className=' h-full w-full rounded-lg p-3 bg-black'>
        <div className=' rounded-lg  flex flex-col items-center'>
          <Link href="/AccountView">
           <img className='w-36 rounded-full p-2' src='rythm_logo.jpg'/>
           </Link>
        </div>
        <div className='  mt-2 flex flex-col items-center'>
             <h1 className='text-xl font-extrabold text-white '>Your Playlists</h1>
        </div>
    </div>
  )
}

export default Sidebar2
