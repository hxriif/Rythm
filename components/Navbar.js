import { ChevronLeft, ChevronRight, ArrowDownToLine, Bell, UserRound, ChevronDownCircle, InstagramIcon, TwitterIcon, FacebookIcon, UserCircle2Icon, LibraryBigIcon, LibrarySquare, LibraryIcon, GemIcon, BombIcon, LinkedinIcon, HeartPulse, HeartHandshake, BookHeart, HeartIcon, Music3, Music4, MusicIcon, SearchCodeIcon, SearchXIcon, SearchIcon, CirclePlayIcon, FileStack, HomeIcon, Music2Icon, MinusIcon, FileMusicIcon } from 'lucide-react';
import Display from './Display';
import Playlists from './Display';
import Cards from './Cards';
import Homepage from './Homepage';


const Navbar = () => {


    return (
        <div className='flex justify-between bg-black p-2'>
            <div className='flex items-center w-auto'>
                <img className='rounded-full w-14 h-14' src='rythm_logo.jpg'></img>
                <h1 className=' text-2xl font-bold text-red-600 '>𝐑𝐲𝐭𝐡𝐦 𝐦𝐮𝐬𝐢𝐜 𝐩𝐥𝐚𝐭𝐟𝐨𝐫𝐦</h1>
            </div>
            <div className='items-center flex me-10'>
                <Music2Icon className='text-red-500' strokeWidth={3} />
                <button><ChevronRight className='text-red-500' strokeWidth={3} /></button>
            </div>

        </div>

    );
};

export default Navbar;


