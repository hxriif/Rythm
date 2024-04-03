import { ChevronLeft, ChevronRight, ArrowDownToLine, Bell, UserRound, ChevronDownCircle, InstagramIcon, TwitterIcon, FacebookIcon } from 'lucide-react';
import Display from './Display';
import Playlists from './Display';
import Cards from './Cards';


const Navbar = () => {


    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between p-5 bg-[#080808]  w-[55rem] mt-2 rounded-lg  '>
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
            <div className='bg-[#121212]  overflow-y-auto max-h-[400px]  p-1 '>
                <Cards />
                <Cards />
                <div className='text-gray-400  h-auto flex gap-20 p-5 mt-3'>
                    <div className='p-2'>
                        <h1 className='text-white'>Company</h1>
                        <div className='p-2 mt-2'>
                            <p>About</p>
                            <p>Jobs</p>
                            <p>For The Records</p>
                        </div>
                    </div>
                    <div className='p-2'>
                        <h1 className='text-white'>Communities</h1>
                        <div className='p-2 mt-2'>
                            <p>For Artists</p>
                            <p>Developers</p>
                            <p>Advertising</p>
                            <p>Investors</p>
                            <p>Vendors</p>
                        </div>
                    </div>
                    <div className='p-2'>
                        <h1 className='text-white'>UsefulLinks</h1>
                        <div className='p-2 mt-2'>
                            <p>Support</p>
                            <p>Free Mobile</p>
                            <p>App</p>
                        </div>
                    </div>
                    <div className='flex items-center p-2'>
                        <div className='flex gap-5 text-gray-300'>
                            <InstagramIcon className='hover:text-white' />
                            <TwitterIcon className='hover:text-white' />
                            <FacebookIcon className='hover:text-white' />
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 p-5 text-[11px] text-gray-400 '>
                    <div className='flex gap-14  '>
                        <p>Legal</p>
                        <p>Safety & Privacy Center</p>
                        <p>Privacy Policy</p>
                        <p>Cookies</p>
                        <div className=''>
                            <p>© 2024 Spotify AB</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-6 p-5 text-[11px] text-gray-400  '>
                    <p>About Ads</p>
                    <p>Accessibility</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
