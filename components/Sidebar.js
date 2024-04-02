import React from 'react'
import { Home, Search, Plus, Library } from "lucide-react";
import Uppersidebar from './Uppersidebar';
import Lowersidebar from './Lowersidebar';







export default function Sidebar() {
  return (
    <div className=' lg:w-[23rem]  flex flex-col p-3 text-white  '>
      <div className='pb-2 bg-black '>
      <Uppersidebar/>
      </div>
      <div>
      <Lowersidebar/>
     </div>
     </div>
  )
};
