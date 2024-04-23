import React from 'react';
import Link from 'next/link';
import PlaylistView from './PlaylistView';

function Sidebar2() {
  return (
    <div className='h-full w-full rounded-r-lg p-3 bg-flex flex-col gap-3'>
      <div className='flex justify-center mt-16'>
        <h1 className='text-white font-extrabold text-center lg:text-left' style={{ fontSize: '2rem' }}>Trending artists</h1>
      </div>
      <div className='flex flex-col gap-3 mt-2 font-extrabold text-yellow-300'>
        <div className='bg-cover bg-center w-full h-14 rounded-lg' style={{backgroundImage: 'url("shallipopi.jpg")'}}>
          <h1 className='text-right'>Shalli Poppi</h1>
        </div>
        <div className='bg-cover bg-center w-full h-14 rounded-lg' style={{backgroundImage: 'url("big.jpg")'}}>
          <h1 className='text-right'>Big Wizz</h1>
        </div>
        <div className='bg-cover bg-center w-full h-14 rounded-lg' style={{backgroundImage: 'url("renee.jpg")'}}>
          <h1 className='text-right'>renee rapp</h1>
        </div>
        <div className='bg-cover bg-center w-full h-14 rounded-lg' style={{backgroundImage: 'url("brunoo.jpg")'}}>
          <h1 className='text-right'>Bruno Mars</h1>
        </div>
      </div>
      <div className='text-white mt-3 gap-2'>
        {/* <div>
          <h1 className='font-extrabold text-center lg:text-left' style={{ fontSize: '2rem' }}>Category</h1>
        </div> */}
        {/* <div className='flex flex-col gap-3 mt-2 lg:flex-row lg:ms-3'>
          <div className='rounded-full border border-opacity-40 bg-black font-extrabold'>
            <button className='hover:text-slate-300 text-slate-500 p-1'>Hip Hop</button>
          </div>
          <div className='rounded-full border border-opacity-40 bg-black font-extrabold'>
            <button className='hover:text-slate-300 text-slate-500 p-1'>House</button>
          </div>
          <div className='rounded-full border border-opacity-40 bg-black font-extrabold'>
            <button className='hover:text-slate-300 text-slate-500 p-1'>Country</button>
          </div>
        </div>
        <div className='flex flex-col gap-3 mt-2 lg:flex-row lg:ms-3'>
          <div className='rounded-full border border-opacity-40 bg-black font-extrabold'>
            <button className='hover:text-slate-300 text-slate-500 p-1'>Classic</button>
          </div>
          <div className='rounded-full border border-opacity-40 bg-black font-extrabold'>
            <button className='hover:text-slate-300 text-slate-500 p-1'>Pop</button>
          </div>
          <div className='rounded-full border border-opacity-40 bg-black font-extrabold'>
            <button className='hover:text-slate-300 text-slate-500 p-1'>Blues</button>
          </div>
          <div className='rounded-full border border-opacity-40 bg-black font-extrabold'>
            <button className='hover:text-slate-300 text-slate-500 p-1'>Rock</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar2;
