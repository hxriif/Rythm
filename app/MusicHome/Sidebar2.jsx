"use client"


import React, { useEffect, useState } from 'react';
import PlaylistView from './PlaylistView';

function Sidebar2() {

  

  return (
    <div className='h-full w-full rounded-r-lg p-3 bg-flex flex-col gap-3 '>
      <div className='flex  mt-16'>
        <h1 className='text-white font-extrabold text-center lg:text-left' style={{ fontSize: '1rem' }}>your playlists</h1>
      </div>
      <div className='bg-white h-[15rem]'>
        <PlaylistView/>
      </div>
      <div className="mt-6">
        <h1 className="text-white text-lg font-bold">Categories</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          <button className="rounded-full bg-black text-white font-bold py-2 px-4 hover:bg-gray-700">
            Hip Hop
          </button>
          <button className="rounded-full bg-black text-white font-bold py-2 px-4 hover:bg-gray-700">
            House
          </button>
          <button className="rounded-full bg-black text-white font-bold py-2 px-4 hover:bg-gray-700">
            Country
          </button>
          <button className="rounded-full bg-black text-white font-bold py-2 px-4 hover:bg-gray-700">
            Classic
          </button>
          <button className="rounded-full bg-black text-white font-bold py-2 px-4 hover:bg-gray-700">
            Pop
          </button>
          <button className="rounded-full bg-black text-white font-bold py-2 px-4 hover:bg-gray-700">
            Blues
          </button>
          <button className="rounded-full bg-black text-white font-bold py-2 px-4 hover:bg-gray-700">
            Rock
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar2;
