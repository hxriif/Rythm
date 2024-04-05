import { ChevronLeft, ChevronRight, ArrowDownToLine, Bell, UserRound, ChevronDownCircle, InstagramIcon, TwitterIcon, FacebookIcon, UserCircle2Icon, LibraryBigIcon, LibrarySquare, LibraryIcon, GemIcon, BombIcon, LinkedinIcon, HeartPulse, HeartHandshake, BookHeart, HeartIcon, Music3, Music4, MusicIcon, SearchCodeIcon, SearchXIcon, SearchIcon, CirclePlayIcon, FileStack, HomeIcon } from 'lucide-react';
import Display from './Display';
import Playlists from './Display';
import Cards from './Cards';
import Homepage from './Homepage';


const Navbar = () => {


    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between p-2 bg-[#d7d2cc]  w-screen    '>
                <div className='flex gap-2 mb-3 md:mb-0'>
                    <img className='w-10 h-10 rounded-full' src='rythm_logo.jpg'></img>
                    <h1 class="text-2xl text-[#070e0f]  ">𝐑𝐲𝐭𝐡𝐦 𝐦𝐮𝐬𝐢𝐜 𝐩𝐥𝐚𝐭𝐟𝐨𝐫𝐦</h1>
                </div>
                <div className='flex  items-center justify-between '>
                    {/* <button className='rounded-full p-2 hover:scale-105 transition-transform h-8 text-sm font-weight: 900'>
                        Explore premium
                    </button> */}
                    <button className='rounded-full   flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
                        <HomeIcon className='text-[#0c1618] hover:text-[#393b82] '  strokeWidth={3}/>
                    </button>
                    <button className='rounded-full  flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
                        <LibraryIcon className='text-[#030707] hover:text-[#393b82]' strokeWidth={3}/>
                    </button>
                    <button className='rounded-full  flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
                        <GemIcon className='text-[#060c0d] hover:text-[#393b82]'  strokeWidth={2}/>
                    </button>
                    <button className='rounded-full  flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
                        <HeartIcon className='text-[#040b0c] hover:text-[#393b82]' strokeWidth={3}/>
                    </button>
                    <button className='rounded-full  flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
                        <MusicIcon className='text-[#050b0c] hover:text-[#393b82]' strokeWidth={3}/>
                    </button>
                    <button className='rounded-full  flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
                        <SearchIcon className='text-[#0a1315] hover:text-[#393b82]' strokeWidth={3}/>
                    </button>
                    <button className='rounded-full  flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
                        <FileStack className='text-[#0c1618] hover:text-[#393b82]'  strokeWidth={3}/>
                    </button>
                    <div className='p-3 relative flex items-center'>
                        <div
                            className='flex items-center  bg-opacity-35  space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-l-full rounded-r-full p-1  text-black'
                        >
                            <UserCircle2Icon strokeWidth={2} className='h-6 w-6' />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' h-auto'>
                <Homepage/>
            </div>
            {/* <div className='bg-[#b6bac7]  overflow-y-auto max-h-[400px] p-1  '>
              
                <div className='text-black  h-auto flex gap-20 p-5 mt-3 justify-between ms-4 '>
                    <div className='p-2'>
                        <h1 className='text-black'>Company</h1>
                        <div className='p-2 mt-2'>
                            <p>About</p>
                            <p>Jobs</p>
                            <p>For The Records</p>
                        </div>
                    </div>
                    <div className='p-2'>
                        <h1 className='text-black'>Communities</h1>
                        <div className='p-2 mt-2'>
                            <p>For Artists</p>
                            <p>Developers</p>
                            <p>Advertising</p>
                            <p>Investors</p>
                            <p>Vendors</p>
                        </div>
                    </div>
                    <div className='p-2'>
                        <h1 className='text-black'>UsefulLinks</h1>
                        <div className='p-2 mt-2'>
                            <p>Support</p>
                            <p>Free Mobile</p>
                            <p>App</p>
                        </div>
                    </div>
                    <div className='flex items-center p-2'>
                        <div className='flex gap-5 text-black'>
                            <InstagramIcon className='hover:text-blue-500' />
                            <TwitterIcon className='hover:text-blue-500' />
                            <FacebookIcon className='hover:text-blue-500' />
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 p-5 text-[11px] text-black  '>
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
                <div className='flex gap-6 p-5 text-[11px] text-black  '>
                    <p>About Ads</p>
                    <p>Accessibility</p>
                </div>
            </div> */}
        </div>
    );
};

export default Navbar;
