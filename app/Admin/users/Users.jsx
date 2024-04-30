import { DeleteIcon, LogOutIcon, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Users() {
    return (
        <div className='w-full h-full p-2 flex '>
            <div className='h-full w-[5%] bg-white border border-r-4 rounded-l-lg'>
                <div className='flex flex-col items-center   h-[32rem] mt-2 text-[#a232a8] '>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>D</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>A</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>S</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>H</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>B</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>O</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>A</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>R</h1>
                    <h1 className='font-extrabold' style={{ fontSize: '2rem' }}>D</h1>
                    <Link href='/Admin'>
                        <button className='mt-16'><LogOutIcon /></button>
                    </Link>
                </div>
            </div>
            <div className='h-full w-[95%] bg-white p-2 rounded-r-lg  '>
                <div className='text-black bg-white  h-full p-8 rounded-lg overflow-y-auto max-h-full'>
                    <div>
                        <h1>Users</h1>
                        <h1>Total:<span>41</span></h1>
                    </div>
                     <div className=' mt-4'>
                    <div className='flex justify-between text-black border-b-2'>
                         <h1>Name</h1>
                         <h1>Username</h1>
                         <h1>Email</h1>
                         <h1>Phone number</h1>
                    </div>
                    <div  className='flex justify-between text-black mt-5 '>
                        <h1>Harif</h1>
                        <h1>Saidbnu Harif</h1>
                        <h1>Saidbnuharifc@gmail.com</h1>
                        <h1>8590776251</h1>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Users
