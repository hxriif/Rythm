"use client"



import React, { useEffect, useState } from 'react'
import Player from './Player'
import { useParams } from 'next/navigation'
import Axios from '@/app/axios'



function SingleSong() {
  const { musicId } = useParams();
  const [musics, setMusics] = useState([])

  useEffect(() => {
    const Singlesongfetch = async () => {
      try {
        const response = await Axios.get(`api/users/getmusicByid/${musicId}`)
        if (response.status === 200) {
          setMusics(response.data.data)
          console.log("music fetcehd successfully")
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    Singlesongfetch()
  }, [])




  return (
    <div className=' h-screen w-full flex justify-center p-2 items-center '>
      {musics.map((music) => (
        <div className=' w-[30rem] h-[29.8rem] rounded-lg  p-1 border' key={music._id}>
          <div className='bg-black h-[300px] p-2 flex  justify-start items-center rounded-lg rounded-b-none gap-3'>
            <div className='w-[14rem] h-[14rem] '>
              <img className='w-full h-full rounded-lg' src={music.image} />
            </div>
            <div className='w-[14rem] h-[14rem] rounded--lg  flex flex-col justify-center '>
              <h1>song</h1>
              <h1 className='font-extrabold' style={{ fontSize: "2rem" }}>{music.name}</h1>
              <h1>{music.artist}:<span>{music.name}</span></h1>
            </div>
          </div>
          <div className='h-[166px]'>
            <Player />
          </div>
        </div>
      ))}
    </div>

  )
}

export default SingleSong
