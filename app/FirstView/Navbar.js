import { ChevronLeft, ChevronRight, ArrowDownToLine, Bell, UserRound, ChevronDownCircle, InstagramIcon, TwitterIcon, FacebookIcon, UserCircle2Icon, LibraryBigIcon, LibrarySquare, LibraryIcon, GemIcon, BombIcon, LinkedinIcon, HeartPulse, HeartHandshake, BookHeart, HeartIcon, Music3, Music4, MusicIcon, SearchCodeIcon, SearchXIcon, SearchIcon, CirclePlayIcon, FileStack, HomeIcon, Music2Icon, MinusIcon, FileMusicIcon } from 'lucide-react';
import Link from 'next/link';


const Navbar = () => {


    return (
        <div className='flex  bg-black p-2 justify-end'>
            <div className='items-center flex '>
                <Music2Icon className='text-blue-500' strokeWidth={3} />
                <Link href="/Loginpage">
                <button><ChevronRight className='text-blue-500' strokeWidth={3}  /></button>
                </Link>
            </div>

        </div>

    );
};

export default Navbar;


