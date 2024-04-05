import { ChevronLeft, ChevronRight, ArrowDownToLine, Bell, UserRound, ChevronDownCircle, InstagramIcon, TwitterIcon, FacebookIcon, UserCircle2Icon, LibraryBigIcon, LibrarySquare, LibraryIcon, GemIcon, BombIcon, LinkedinIcon, HeartPulse, HeartHandshake, BookHeart, HeartIcon, Music3, Music4, MusicIcon, SearchCodeIcon, SearchXIcon, SearchIcon, CirclePlayIcon } from 'lucide-react';
import Display from './Display';
import Playlists from './Display';
import Cards from './Cards';


const Navbar = () => {


    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between p-2 bg-[#080808]  w-screen  rounded-lg   '>
                <div className='flex gap-2 mb-3 md:mb-0'>
                    <img className='w-10 h-10' src='rythm_logo.jpg'></img>
                    <h1 class="text-2xl text-[#25DAF7]  ">𝐑𝐲𝐭𝐡𝐦 𝐦𝐮𝐬𝐢𝐜 𝐩𝐥𝐚𝐭𝐟𝐨𝐫𝐦</h1>
                </div>
                <div className='flex gap-3 items-center'>
                    {/* <button className='rounded-full hover:text-[#25DAF7] p-2 hover:scale-105 transition-transform h-8 text-sm font-weight: 900'>
                        Explore premium
                    </button> */}
                    
                    <button className='rounded-full hover:text-[#25DAF7]  flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
                        <LibraryIcon strokeWidth={3}/>
                    </button>
                    <button className='rounded-full hover:text-[#25DAF7]  flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
                        <GemIcon  strokeWidth={2}className=''/>
                    </button>
                    <button className='rounded-full hover:text-[#25DAF7]  flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
                        <HeartIcon strokeWidth={3} className=''/>
                    </button>
                    <button className='rounded-full hover:text-[#25DAF7]  flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
                        <MusicIcon strokeWidth={3} className=''/>
                    </button>
                    <button className='rounded-full hover:text-[#25DAF7]  flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
                        <SearchIcon strokeWidth={3} className=''/>
                    </button>
                    <div className='p-3 relative flex items-center'>
                        <div
                            className='flex items-center bg-black bg-opacity-35  space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-l-full rounded-r-full p-1hover:text-[#25DAF7]'
                        >
                            <UserCircle2Icon strokeWidth={2} className='h-5 w-5' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#121212]  overflow-y-auto max-h-[400px] p-1  '>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <div className='text-gray-400  h-auto flex gap-20 p-5 mt-3 justify-between'>
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
                            <InstagramIcon className='hover:text-blue-500' />
                            <TwitterIcon className='hover:text-blue-500' />
                            <FacebookIcon className='hover:text-blue-500' />
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 p-5 text-[11px] text-gray-400  '>
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
