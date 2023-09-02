import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="shrink-0 mr-4">
                        <div className="text-3xl text-[#05386b]">IIC</div>
                    </div>
                    {/* Nav */}
                    <nav className="hidden md:flex md:grow">
                        <ul className="flex grow justify-end flex-wrap items-center gap-5">
                            <li className="text-[#05386b]"><Link to="/team">Team</Link></li>
                            <li className="text-[#05386b]"><Link to="/event">Events</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}