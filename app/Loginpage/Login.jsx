"use client"

import React, { useState } from 'react'
import { AppleIcon, GoogleIcon, Music2Icon, Music4Icon } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
function Login() {

    const [registration, setregistration] = useState(false)
    return (
        <div className='bg-black text-black h-screen w-full flex  justify-center items-center  '>
            {!registration ? (


                <div className='h-[400px] w-[300px] bg-black rounded-lg flex flex-col items-center gap-5 border border-solid p-3'>
                    <h1 className='text-white font-thin '>Welcome Back to </h1>
                    <h1 className='text-red-500 font-extrabold text-xl flex items-center '><Music4Icon />Rythm</h1>
                    <div className='w-full flex flex-col justify-center'>
                        <input className='mt-2 h-10 rounded-lg p-2' placeholder="Email" />
                        <input className='mt-2 h-10 rounded-lg p-2' placeholder="Password" />
                    </div>
                    <div className='flex text-white justify-between w-full '>
                        <div className='gap-2 flex items-center'>
                            <input type='checkbox' /><span className='text-xs'>Remember me</span>
                        </div>
                        <div>
                            <button className='text-xs underline text-blue-400'>forgot password</button>
                        </div>
                    </div>
                    <div className='text-black w-full text-center rounded-lg bg-slate-500'>
                        <Link href="/MusicView">
                        <button className='h-10 text-white font-extrabold '>Login</button>
                        </Link>
                    </div>
                    <div className='w-full h-[1px] relative bg-stone-100 bg-opacity-40 flex justify-center items-center'>
                        <div className='w-10 h-10  absolute text-white text-center mt-1'>OR</div>
                    </div>
                    <div className='flex w-full justify-evenly '>
                        <button className=' '>
                            <FcGoogle className='text-2xl' />
                        </button>
                        <button >
                            <AppleIcon className='text-white ' />
                        </button>
                    </div>
                    <div className='text-white mt-5 flex'>
                        <h1 className='text-md font-thin'>Don't have an account?</h1>
                        <button className='font-extrabold underline text-center ' onClick={() => { setregistration(!registration) }}>SIGN UP</button>
                    </div>
                </div>
            )
                : (
                    <div className='h-[400px] w-[300px] bg-black rounded-lg flex flex-col items-center gap-5 border border-solid p-3'>
                        <h1 className='text-white font-thin '>Welcome  to </h1>
                        <h1 className='text-red-500 font-extrabold text-xl flex items-center '><Music4Icon />Rythm</h1>
                        <div className='w-full flex flex-col justify-center'>
                            <input className='mt-2 h-10 rounded-lg p-2' placeholder="Username" />
                            <input className='mt-2 h-10 rounded-lg p-2' placeholder="Email" />
                            <input className='mt-2 h-10 rounded-lg p-2' placeholder="Password" />

                        </div>
                        <div className='text-black w-full text-center rounded-lg bg-slate-500'>
                            <button className='h-10 text-white font-extrabold '>Register</button>
                        </div>
                        <div className='w-full h-[1px] relative bg-stone-100 bg-opacity-40 flex justify-center items-center'>
                            <div className='w-10 h-10  absolute text-white text-center mt-1'>OR</div>
                        </div>
                        <div className='flex w-full justify-evenly '>
                            <button className=' '>
                                <FcGoogle className='text-2xl' />
                            </button>
                            <button >
                                <AppleIcon className='text-white ' />
                            </button>
                        </div>
                        <div className='text-white mt-5 flex'>
                            <h1 className='text-md font-thin'>already have an account?</h1>
                            <button className='font-extrabold underline text-center ' onClick={() => { setregistration(!registration) }}>SIGN IN</button>
                        </div>
                    </div>

                )


            }
        </div>
    )
}

export default Login
