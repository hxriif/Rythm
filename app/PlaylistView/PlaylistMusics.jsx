import React, { useEffect, useState } from 'react'
import Axios from '../axios'

function PlaylistMusics() {

    const userId = localStorage.getItem("UserId")

    const [Psongs, setPsongs] = useState([])


    useEffect(() => {
        const fetchPlaylistSongs = async () => {
            try {
                const response = await Axios.get(`/api/users/playlistSongs/${userId}`)
                if (response.status === 200) {
                    setPsongs(response.data.data)
                }
            } catch (error) {
                console.log("error", error);
            }
        }
        fetchPlaylistSongs()
    }, [])


    return (
        <>
            {Psongs.map((playlist) => (
                playlist.map((song) => (
                    <div className="music-card bg-red-950 rounded-lg overflow-hidden shadow-md w-[10rem]" key={song._id}>
                        <img
                            className="w-full h-32 object-cover object-center"
                            src={song.image}
                            alt={song.name}
                        />
                        <div className="p-4">
                            <h3 className="text-white text-lg font-semibold">{song.name}</h3>
                            <p className="text-white text-sm">{song.artist}</p>
                        </div>
                    </div>
                ))
            ))}
        </>
    )
}

export default PlaylistMusics
