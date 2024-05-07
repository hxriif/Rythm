"use client"


import React, { useEffect, useState } from 'react';
import Axios from '../axios';
import { HeartOff } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

function LikedsongsCards() {
    const userId = localStorage.getItem('UserId');
    const [likedSongs, setLikedSongs] = useState([]);


    useEffect(() => {
        const viewLikedSongs = async () => {
            try {
                const response = await Axios.get(`/api/users/viewLikedSongs/${userId}`);
                if (response.status === 200) {
                    setLikedSongs(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching liked songs:', error);
            }
        };

        viewLikedSongs();
    }, [userId]);


    const handleRemoveLikedSong = async (musicId) => {
        try {
            const response = await Axios.delete(`/api/users/deleteFromLikedSongs/${userId}`, { data: { musicId } })
            if (response.status === 200) {
                toast.success("removed successfully")
                window.location.reload();
            }
        } catch (error) {
            console.log(error, 'error removing');
        }
    }


    useEffect(() => {
        handleRemoveLikedSong()
    }, [])





    return (
        <div className="music-cards-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-2 ">
            {likedSongs.length > 0 ? (
                likedSongs.map((liked) => (
                    <div key={liked.musicsId._id} className="music-card bg-gray-800 border rounded-lg shadow-md w-[12rem]">
                        <img
                            className="w-full h-40 object-cover object-center p-1"
                            src={liked.musicsId.image}
                            alt={liked.musicsId.name}
                        />
                        <div className="p-4">
                            <h3 className="text-white text-lg font-semibold">{liked.musicsId.name}</h3>
                            <p className="text-white text-sm">{liked.musicsId.artist}</p>
                            <div className="flex items-center mt-2 justify-end">
                                <button
                                    className="flex items-center text-white hover:text-gray-300"
                                    onClick={() => handleRemoveLikedSong(liked.musicsId._id)}
                                >
                                    <HeartOff size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-white text-lg font-semibold flex justify-center w-screen">Liked Songs is empty </div>
            )}
        </div>
    );

}

export default LikedsongsCards;
