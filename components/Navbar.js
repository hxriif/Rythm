import { ChevronLeft, ChevronRight, ArrowDownToLine, Bell, UserRound, ChevronDownCircle } from 'lucide-react';
import Display from './Display';


const Navbar = () => {


    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between p-5 bg-[#121212] h-20 w-[55rem] mt-3 rounded-lg '>
                <div className='flex gap-2 mb-3 md:mb-0'>
                    <button className='bg-[#121212] rounded-full w-fit p-2 hover:text-green-500 h-10'>
                        <ChevronLeft strokeWidth={2} />
                    </button>
                    <button className='bg-[#121212] rounded-full w-fit p-2 hover:text-green-500 h-10'>
                        <ChevronRight strokeWidth={2} />
                    </button>
                </div>
                <div className='flex gap-2 items-center'>
                    <button className='rounded-full bg-white text-black p-2 hover:scale-105 transition-transform h-8 text-sm font-weight: 900'>

                        Explore premium
                    </button>
                    <button className='rounded-full bg-black flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
                        <ArrowDownToLine />
                        Install App
                    </button>
                    <div className='p-3 relative flex items-center'>
                        <div className='mr-2'>
                            <Bell />
                        </div>

                        <div
                            className='flex items-center bg-black bg-opacity-35  space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-l-full rounded-r-full p-1 pr-2'
                        >

                            <UserRound className='h-5 w-5' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-400 h-screen'>
                <h1>songs display here</h1>
            </div>
        </div>
    );
};

export default Navbar;