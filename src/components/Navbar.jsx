import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"

export default function Navbar() {
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
                    <nav className="flex grow">
                        <ul className="flex grow justify-end flex-wrap items-center gap-5">
                            <li className="font-semibold text-[0.5rem] sm:text-lg"><Link to="/team">Team</Link></li>
                            <li className="font-semibold text-[0.5rem] sm:text-lg"><Link to="/events">Events</Link></li>
                            <li className="font-semibold text-[0.5rem] sm:text-lg"><Link to="/gallery">Gallery</Link></li>
                            <li className="font-semibold text-[0.5rem] sm:text-lg"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}