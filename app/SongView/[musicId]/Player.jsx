"use client"

import React, { useEffect, useState } from 'react';
import { PauseCircleIcon, PlayCircleIcon, ShuffleIcon, SkipBack, SkipForward, HeartIcon, PlusIcon } from 'lucide-react';
import Axios from '../../axios';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';

function Player() {
  const { musicId } = useParams();
  const userId = localStorage.getItem("UserId");
  const [playlists, setPlaylists] = useState([]);
  const [isOpen, setIsOpen] = useState(false); 

  const handleAddToLikedSongs = async () => {
    try {
      const response = await Axios.post(`/api/users/addToLikedSongs/${userId}`, { musicId });
      if (response.status === 200) {
        console.log("Successfully added to liked songs");
        toast.success("Successfully added to liked songs");
      }
    } catch (error) {
      if (error.response && error.response.status === 409 && error.response.data.message) {
        console.error("Error:", error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      try {
        const response = await Axios.get(`/api/users/getUserPlaylists/${userId}`);
        if (response.status === 200) {
          console.log("success", response);
          setPlaylists(response.data.data);
        }
      } catch (error) {
        console.log(error, 'error fetching user playlists');
      }
    };

    fetchUserPlaylists();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };



 
 const addToPlaylists=async(playlistId)=>{
  try {
    const response=await Axios.post(`/api/users/addMusicToPlaylist/${playlistId}`,{musicId})
    if(response.status===200){
      console.log("success");
      toast.success("music added ")
    }
  } catch (error) {
    console.log("error");
    toast.error("error adding")
  }
 }

  return (
    <div className='w-full h-full text-white bg-black rounded-lg rounded-t-none'>
      <div className='flex justify-center items-center gap-4 p-2'>
        <button className='dropdown-toggle focus:outline-none' onClick={toggleDropdown}>
          <PlusIcon className='w-6 h-6' />
        </button>

        {isOpen && (
          <div className='dropdown-menu absolute  right-10 top-10 bg-blue-500 shadow-md rounded-md overflow-hidden flex flex-col p-2 gap-2'>
            <h1 className='text-black fkex ms-2 underline'>Add to playlist</h1>
            {playlists.map((playlist) => (
              <button key={playlist.id} className='rounded-lg   border dropdown-item text-left hover:bg-gray-100 px-4 py-2 text-black' onClick={() =>addToPlaylists(playlist._id)}>
                {playlist.name}
              </button>
            ))}
          </div>
        )}
        <button><SkipBack className='w-6 h-6' /></button>
        <button><PlayCircleIcon className='w-9 h-9' /></button>
        <button><SkipForward className='w-6 h-6' /></button>
        <button onClick={handleAddToLikedSongs}><HeartIcon className='w-5 h-5' /></button>
      </div>
      <div className='p-2'>
        {/* Add your music player UI here */}


      </div>
    </div>
  );
}

export default Player;
