"use client"


import React, { useEffect, useState } from 'react';
import Axios from '../axios'; // Assuming Axios instance for API calls
import { HeartOff } from 'lucide-react'; // Assuming HeartOff icon component
import Link from 'next/link'; // Assuming Next.js for routing

function LikedsongsCards() {
  const userId = localStorage.getItem('UserId');
  const [likedSongs, setLikedSongs] = useState([]);

  useEffect(() => {
    const viewLikedSongs = async () => {
      try {
        const response = await Axios.get(`/api/users/viewLikedSongs/${userId}`);
        if (Array.isArray(response.data.data)) {
          setLikedSongs(response.data.data);
        } else {
          console.error('Liked songs data is not in expected format:', response.data.data);
        }
      } catch (error) {
        console.error('Error fetching liked songs:', error);
      }
    };

    viewLikedSongs();
  }, [userId]);

  return (
    <div className="music-cards-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 p-2">
            {likedSongs.map((liked) => (
                <div key={liked.musicsId._id} className="music-card bg-red-950 rounded-lg  shadow-md w-[12rem] ">
                    <img
                        className="w-full h-32 object-cover object-center p-1 rounded-full"
                        src={liked.musicsId.image}
                        alt={liked.musicsId.name}
                    />
                    <div className="p-4">
                        <h3 className="text-white text-lg font-semibold">{liked.musicsId.name}</h3>
                        <p className="text-white text-sm">{liked.musicsId.artist}</p>
                        <div className="flex items-center mt-2 justify-end">
                                <button
                                    className="flex items-center text-white hover:text-gray-300"
                                >
                                    <HeartOff size={20} /> 
                                </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
  );
}

export default LikedsongsCards;
