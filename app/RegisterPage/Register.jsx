"use client"


import React, { useState } from 'react';
import {  Music4Icon } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(null);
    const router=useRouter()

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('image', image);

        try {
            const response = await axios.post("http://localhost:3003/api/users/Register", formData);
            if (response.status === 201) {
                toast.success("successfully registered with rythm")
                router.push('/LoginPage')
                
                
            }
        } catch (error) {
            toast.error("Error with registrartion")
        }
    };


    return (
        <div className='bg-black text-black h-screen w-full flex justify-center items-center'>
            <div className='h-auto w-[400px] bg-black rounded-xl flex flex-col items-center gap-5 border border-solid p-3'>
                <h1 className='text-white font-thin'>Welcome to </h1>
                <h1 className='text-blue-500 font-extrabold text-xl flex items-center '><Music4Icon />Rythm</h1>
                <form className='flex flex-col items-center ' onSubmit={handleFormSubmit}>
                    <input className='mt-2 h-10 rounded-lg p-2' type='text' placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
                    <input className='mt-2 h-10 rounded-lg p-2' type='email' placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input className='mt-2 h-10 rounded-lg p-2' type='text' placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    <input className='mt-2 h-10 rounded-lg p-2' type='password' placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <input className='mt-2 h-10 rounded-lg p-2 bg-white w-56' type='file' placeholder="Image" onChange={(event) => setImage(event.target.files[0])} />
                    <div className='flex gap-2 ms-10 mt-4'> 
                    <button className='h-10 text-black font-extrabold bg-slate-500 rounded-xl p-2 mt-2 hover:bg-slate-400' type='submit'>Register</button>
                    <Link href="/LoginPage">
                    <button className='h-10 text-white underline font-extrabold  rounded-xl p-2 mt-2'>SIGN IN</button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
