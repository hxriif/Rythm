import React, { useEffect } from 'react';
import { PauseCircleIcon, PlayCircleIcon, ShuffleIcon, SkipBack, SkipForward, HeartIcon } from 'lucide-react';
import Axios from '../../axios';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';

function Player() {
  const { musicId } = useParams();
  const userId = localStorage.getItem("UserId");

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


  return (
    <div className='w-full h-full text-white bg-black rounded-lg rounded-t-none'>
      <div className='flex justify-center gap-4 p-2 '>
        <button><ShuffleIcon className='w-5 h-5' /></button>
        <button><SkipBack className='w-6 h-6' /></button>
        <button><PlayCircleIcon className='w-9 h-9' /></button>
        <button><SkipForward className='w-6 h-6' /></button>
        <button onClick={handleAddToLikedSongs}><HeartIcon className='w-5 h-5' /></button>
      </div>
      <div className=' p-2'>
        {/* Add your music player UI here */}
      </div>
    </div>
  );
}

export default Player;
