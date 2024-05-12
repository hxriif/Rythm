import React, { useEffect, useState } from 'react'
import Axios from '../axios';
import { DeleteIcon, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

function PlaylistView() {
  const [playlists, setplaylists] = useState([])
  const userId = localStorage.getItem("UserId")

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      try {
        const response = await Axios.get(`/api/users/getUserPlaylists/${userId}`)
        if (response.status === 200) {
          setplaylists(response.data.data)
        }
      } catch (error) {
        console.log(error, 'error fetcing user playlists');
      }
    }

    fetchUserPlaylists()
  }, [])


  const handleDelatePlaylist = async (PlaylistId) => {
    const playlistId = PlaylistId
    try {
      const response = await Axios.delete(`/api/users/deletePlaylist/${userId}`, { data: { playlistId } })
      if (response.status === 200) {
        console.log("success");
        toast.success("playlist deleted")
        window.location.reload();
      }
    } catch (error) {
      console.log(error, 'error deleting ');
    }
  }
  useEffect(() => {
    handleDelatePlaylist()
  }, [])



  return (
    <div className='bg-black h-full w-full overflow-y-auto'>
      <div className=' h-auto w-full p-1  gap-2   bg-black text-white '>
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <div className=' flex   mt-1 h-[4rem] gap-5   lg:grid-cols-7' key={playlist._id}>
              <div className=' rounded-lg   border w-[10rem] flex p-1 bg-red-800 text-white font-extrabold justify-between items-center  '>
                <div className='p-1 '>
                  <h1 className='text-sm'>Playlist</h1>
                  <button className='font-semibold'>{playlist.name}</button>
                </div>
                <button onClick={() => handleDelatePlaylist(playlist._id)}>
                  <Trash2 className='flex justify-end' />
                </button>
                <div>
                  <delete />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1 className='font-extrabold bg-white text-red-600 h-[10rem] rounded-lg flex items-center justify-center'>playlist is empty</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default PlaylistView
