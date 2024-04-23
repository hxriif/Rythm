import React from 'react'

function PlaylistCards() {
  return (
    <div className='w-full h-full'>
         <div className=' h-full p-2 flex gap-3 justify-center'>
         <div className='bg-cover bg-center w-36 h-44 rounded-lg ' style={{backgroundImage: 'url("harry.jpg")'}}>
            <p className='font-extrabold text-yellow-400'>Harry Styles</p>
        </div>
        <div className='bg-cover bg-center w-36 h-44 rounded-lg ' style={{backgroundImage: 'url("eminem.jpg")'}}>
        <p className='font-extrabold text-yellow-400'>Eminem</p>
        </div>
        <div className='bg-cover bg-center w-36 h-44 rounded-lg ' style={{backgroundImage: 'url("tentacion.jpg")'}}>
        <p className='font-extrabold text-yellow-400'>XXXtentacioin</p>
        </div>
        <div className='bg-cover bg-center w-36 h-44 rounded-lg ' style={{backgroundImage: 'url("billie.jpg")'}}>
        <p className='font-extrabold text-yellow-400'>Billie Eilish</p>
        </div>
        <div className='bg-cover bg-center w-36 h-44 rounded-lg ' style={{backgroundImage: 'url("snoop.jpg")'}}>
        <p className='font-extrabold text-yellow-400'>Snoop Dogg</p>
        </div>
         </div>
    </div>
  )
}

export default PlaylistCards
