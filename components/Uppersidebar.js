import React from 'react'
import { Home, Search,} from 'lucide-react';

function Uppersidebar() {
    return (
        <div>
            <div className='bg-[#121212] h-[8rem] rounded-lg p-8 font-medium text-lg flex flex-col gap-4 text-gray-400'>
                <div className='flex gap-4 items-center'>
                    <Home strokeWidth={3}/>
                    <button >Home</button>
                </div>
                <div className='flex gap-4 items-center hover:text-white'>
                    <Search className=''strokeWidth={3}/>
                    <button className=''>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Uppersidebar
