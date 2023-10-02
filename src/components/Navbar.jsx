import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"
import hambtn from "../assets/images/hamburger-menu.svg";
import close from "../assets/images/close_black.svg";
import { useState } from 'react';

export default function Navbar() {
    const [isOpen,setOpen] = useState(false);
    
    return (
        <header className="w-full pt-2">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="shrink-0 mr-4">
                        <div className="text-3xl font-bold text-cyan"><Link to="/">
                            <img className='w-[80px] rounded' src={logo} alt="" />
                            </Link></div>
                    </div>
                    {/* Nav */}
                    <nav className="flex grow hidden sm:flex">
                        <ul className="flex grow justify-end flex-wrap items-center gap-5">
                            <li className="font-semibold text-[0.5rem] sm:text-lg"><Link to="/team">Team</Link></li>
                            <li className="font-semibold text-[0.5rem] sm:text-lg"><Link to="/events">Events</Link></li>
                            <li className="font-semibold text-[0.5rem] sm:text-lg"><Link to="/gallery">Gallery</Link></li>
                            <li className="font-semibold text-[0.5rem] sm:text-lg"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <nav className="flex grow sm:hidden justify-end" onClick={()=>setOpen(!isOpen)}>
                        <span className="ham-btn material-symbols-rounded">
                            <img src={hambtn} alt="" className='w-[75px]'/>
                        </span>
                        <ul className={`${isOpen? 'translate-y-0' : '-translate-y-[25rem]'} flex duration-1000 transition-all ease-in-out  grow justify-end flex-wrap items-center gap-4 flex-col w-screen fixed top-0 p-4 pb-8 bg-cyan z-50`}>
                            <li className="font-semibold sm:text-lg text-black  w-full" onClick={()=>setOpen(!isOpen)}>
                                <img src={close} alt="" className='w-[45px]  mt-2 float-right'  />
                            </li>
                            <li className="font-semibold sm:text-lg text-black w-full text-center"><Link to="/team"  className='hover:text-black p-[10px] w-full inline-block'>Team</Link></li>
                            <li className="font-semibold sm:text-lg text-black w-full text-center"><Link to="/events" className='hover:text-black p-[10px] w-full inline-block'>Events</Link></li>
                            <li className="font-semibold sm:text-lg text-black w-full text-center"><Link to="/gallery" className='hover:text-black p-[10px] w-full inline-block'>Gallery</Link></li>
                            <li className="font-semibold sm:text-lg text-black w-full text-center"><Link to="/contact" className='hover:text-black p-[10px] w-full inline-block'>Contact</Link></li>
                        </ul>
                    </nav>


                </div>
            </div>
        </header>
    )
}