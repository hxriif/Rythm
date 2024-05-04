"use client"


import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Axios from '../axios'

function Account() {

  const [userDetails, setUserDetails] = useState([])
  const userId = localStorage.getItem("UserId")


  useEffect(() => {

    const fetchUserDetails = async () => {
      try {
        const response = await Axios.get(`/api/users/getDetails/${userId}`)
        if (response.status === 200) {
          setUserDetails(response.data.data)
        }
      } catch (error) {

      }
    }
    fetchUserDetails()

  }, [])






  return (
    <div className='  h-screen w-full flex justify-center items-center p-3 '>
      {userDetails.map((user)=>(
      <div className=' rounded-lg h-[400px] w-[400px] flex flex-col items-center border border-solid font-extrabold' key={user._id}>
        <div className=' text-white mt-16 h-auto w-auto rounded-full  bg-blue-500  '>
          <img className='w-20 h-20  p-2 rounded-full' src={user.image} />
        </div>
        <div className='mt-14   gap-7 text-white '>
          <h1 className=''>name:<span>{user.name}</span></h1>
          <h1>email:<span>{user.email}</span></h1>
         </div>
        <div className=' rounded-lg mt-10  '>
          <Link href="/LoginPage">
            <button className='p-2 text-red-500 hover:text-red-600'>
              Sign Out
            </button>
          </Link>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Account
