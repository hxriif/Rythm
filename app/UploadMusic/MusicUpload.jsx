"use client"

import React, { useEffect, useState } from 'react';
import Axios from '../axios';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { CircleChevronLeft } from 'lucide-react';

function MusicUpload() {

    const userId = typeof window !== 'undefined' ? localStorage.getItem("UserId") : null;


    const [Name, setName] = useState("");
    const [Image, setImage] = useState(null);
    const [Category, setCategory] = useState("");
    const [Description, setDescription] = useState("");
    const [Artist, setArtist] = useState("");
    const [Song, setSong] = useState("");

    const payload = { name: Name, image: Image, category: Category, description: Description, artist: Artist, song: Song}


    const handleUploadMusic = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', Name);
        formData.append('image', Image);
        formData.append('category', Category);
        formData.append('artist', Artist);
        formData.append('song', Song);


        try {
            const response = await Axios.post(`api/users/musicRequest/${userId}`, formData);
            if (response.status === 200) {
                toast.success("music added to pending request");
            }
        } catch (error) {
            toast.error("error uploading music");
        }
    };





    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-full md:w-[28rem] flex flex-col items-center p-2 gap-2 bg-cover bg-center rounded-lg' style={{ backgroundImage: "url('bg.jpg')" }}>
            <form className='flex flex-col items-center text-black' onSubmit={handleUploadMusic}>
                    <input className='mt-2 h-10 rounded-lg p-2' type='text' placeholder="Name" value={Name} onChange={(event) => setName(event.target.value)} />
                    <input className='mt-2 h-10 rounded-lg p-2 bg-white w-56' type='file' placeholder="Image" onChange={(event) => setImage(event.target.files[0])} />
                    <input className='mt-2 h-10 rounded-lg p-2' type='text' placeholder="category" value={Category} onChange={(event) => setCategory(event.target.value)} />
                    <input className='mt-2 h-10 rounded-lg p-2' type='text' placeholder="description" value={Description} onChange={(event) => setDescription(event.target.value)} />
                    <input className='mt-2 h-10 rounded-lg p-2' type='text' placeholder="artist" value={Artist} onChange={(event) => setArtist(event.target.value)} />
                    <input className='mt-2 h-10 rounded-lg p-2' type='text' placeholder="song" value={Song} onChange={(event) => setSong(event.target.value)} />
                    <div className='flex gap-2 ms-10 mt-4'> 
                    <button className='h-10 text-black font-extrabold bg-slate-500 rounded-xl p-2 mt-2 hover:bg-slate-400' type='submit'>Upload</button>
                    <Link href="/MusicHome">
                    <button><CircleChevronLeft/></button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MusicUpload;
