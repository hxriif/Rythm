"use client"

import { signIn } from 'next-auth/react';
import axios from 'axios';
import { useState } from 'react';
import { AppleIcon, HomeIcon, Router } from 'lucide-react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';




function Login() {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const router = useRouter()


    const handleLogin = async () => {

        if (Email === "" || Password === "") {
            toast.error("Input field is empty")
            return
        }

        let url = "http://localhost:3003/api/users/login"

        const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL
        if (adminEmail && Email === adminEmail) {
            url = "http://localhost:3003/api/admin/login"
        }



        try {
            const payload = { email: Email, password: Password };
            const response = await axios.post(url, payload);

            if (response.status === 200) {
                if (adminEmail && Email === adminEmail) {
                    localStorage.setItem("role", "admin");
                    localStorage.setItem("jwt", response.data.data);
                    toast.success("Login successfull")
                    router.push('/Admin')

                }
                else  {
                    localStorage.setItem("UserId", response.data.data.id);
                    localStorage.setItem("jwt", response.data.data.Token);
                    localStorage.setItem("UserEmail", response.data.data.email);
                    toast.success("Login successfull")
                    router.push('/MusicHome')

                    setTimeout(() => {
                        localStorage.removeItem("jwt");
                        localStorage.removeItem("UserId");
                        localStorage.removeItem("UserEmail");
                        localStorage.removeItem("Admin jwt");
                    }, 3600000);

                }
            }

        } catch (error) {
            console.log(error);
            toast.error("invalid user input")
        }

    }

    return (
        <div className='w-full h-full flex  justify-center items-center '>
            <div className=' w-[20rem] h-[25rem] bg-black text-white p-2 rounded-xl border flex flex-col gap-3'>
                <div className=' flex justify-center'>
                    <h1 className='text-2xl font-extrabold '>Login to Rythm</h1>
                </div>
                <div className=' gap-3  flex flex-col mt-6 items-center bg-black p-2'>
                    <div className=' '>
                        <input className='border h-[2rem] p-2 rounded-lg text-black text-sm' type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className=''>
                        <input className='border h-[2rem] p-2 rounded-lg text-black text-sm' type='text' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='flex'>
                        <button className='text-blue-700 underline'>forgett password</button>
                    </div>
                </div>
                <div className='flex justify-evenly'>
                    <button><HomeIcon /></button>
                    <button><AppleIcon /></button>
                </div>
                <div className='flex justify-center mt-5'>
                    <button className=' rounded-lg p-2 text-black w-20 bg-gray-600 hover:bg-slate-500' onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
