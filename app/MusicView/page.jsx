import React from 'react'
import { ChevronLeft, ChevronRight, ArrowDownToLine, Bell, UserRound, ChevronDownCircle, InstagramIcon, TwitterIcon, FacebookIcon, UserCircle2Icon, LibraryBigIcon, LibrarySquare, LibraryIcon, GemIcon, BombIcon, LinkedinIcon, HeartPulse, HeartHandshake, BookHeart, HeartIcon, Music3, Music4, MusicIcon, SearchCodeIcon, SearchXIcon, SearchIcon, CirclePlayIcon, FileStack, HomeIcon, Music2Icon, MinusIcon, FileMusicIcon } from 'lucide-react';
import Navbar2 from './Navbar';
import Cards from './Cards';
import Player from './Player';


function page() {
    return (
        <>
            <div>
                <Navbar2 />
            </div>
            <div className='overflow-y-auto max-h-[470px]'>
                 <Cards/>
                 <Cards/>

                 <Cards/>

                 <Cards/>

                 <Cards/>
                 <Cards/>
                 <Cards/>
                 <Cards/>
                 <Cards/>

            </div>
            <div>
                <Player/>
            </div>
        </>
    )
}

export default page
