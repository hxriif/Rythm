import React from 'react'

function Account() {
  return (
    <div className='  h-screen w-full flex justify-center items-center'>
      <div className=' rounded-lg h-[400px] w-[400px] flex flex-col items-center border border-solid '>
          <div className=' text-white mt-16 h-auto w-auto rounded-full  bg-red-800  '>
              <img className='w-20 h-20  p-2 rounded-full' src='rythm_logo.jpg'/>
          </div>
          <div className='mt-14   gap-7 text-white '>
             <h1>name:<span>harif</span></h1>
             <h1>email:<span>zaidbnuarifc@gmail.com</span></h1>
          </div>
          <div className=' rounded-lg mt-10 '>
            <button className='p-2 text-red-500 hover:text-red-600'>
                Sign Out
            </button>
          </div>
      </div>
    </div>
  )
}
 
export default Account
