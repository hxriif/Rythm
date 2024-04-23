import React from 'react'
import Link from 'next/link'
import PlaylistView from './PlaylistView'


function Sidebar2() {
  return (
    <div className=' h-full w-full rounded-r-lg p-3 bg- flex flex-col gap-3 '>
        <div className='flex justify-center mt-16'>
          <h1 className='text-white font-extrabold' style={{ fontSize: '2rem' }}>Trending artists</h1>
        </div>
        <div className='flex gap-3 flex-col mt-2 text-white '>
          <div className='flex items-center gap-3'>
            <img className='w-14 h-14 rounded-full' src='rythm_logo.jpg'/>
            <h1>David Podsiadlo</h1>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-14 h-14 rounded-full' src='rythm_logo.jpg'/>
            <h1>David Podsiadlo</h1>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-14 h-14 rounded-full' src='rythm_logo.jpg'/>
            <h1>David Podsiadlo</h1>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-14 h-14 rounded-full' src='rythm_logo.jpg'/>
            <h1>David Podsiadlo</h1>
          </div>
        </div>
        <div className='text-white mt-3 gap-2 '>
                <div>
                  <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>Genres</h1>
                </div>
                <div className='flex gap-3 mt-2 ms-3'>
                <div className='rounded-lg border p-1' >
                  <button>Hip Hop</button>
                </div>
                <div className='rounded-lg border p-1' >
                  <button>House</button>
                </div>
                <div className='rounded-lg border p-1' >
                  <button>Country</button>
                </div>
                </div>
                <div className='flex gap-5 mt-2 ms-3'>
                <div className='rounded-lg border p-1' >
                  <button>Classic</button>
                </div>
                <div className='rounded-lg border p-1' >
                  <button>Pop</button>
                </div>
                <div className='rounded-lg border p-1' >
                  <button>Blues</button>
                </div>
                <div className='rounded-lg border p-1' >
                  <button>Rock</button>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Sidebar2
