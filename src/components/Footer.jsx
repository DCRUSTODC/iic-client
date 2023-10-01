import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"
import github from '../assets/images/github.svg'
import facebook from '../assets/images/facebook.svg'
import linkedin from '../assets/images/linkedin.svg'

export default function Footer() {
    return (

        <footer className="w-full bg-cyan p-5">
            <div className="flex justify-between p-0 md:px-28 items-center flex-col-reverse md:flex-row">
                <div className="flex justify-around items-center gap-4 py-6 md:gap-6 flex-col-reverse md:flex-row">
                    <div className="logo text-black text-4xl flex items-center font-bold">
                        IIC
                    </div>
                    <div className="rounded-full h-[2px] w-12 md:h-12 md:w-[2px] bg-black"></div>
                    <ul className='flex gap-3 items-center'>
                        <li className="text-black font-medium hover:font-semibold transition duration-300 ease-out"><Link to="/events">Events</Link></li>
                        <li className="text-black font-medium hover:font-semibold transition duration-300 ease-out"><Link to="/team">Team</Link></li>
                    </ul>
                </div>
                <div className="cols flex gap-10">
                    <div className="col1 flex flex-col gap-2">
                        <ul className='flex gap-6'>
                            <Link className='hover:scale-110 transition duration-300 ease-out' to="https://github.com/DCRUSTODC/iic"><img src={github}></img></Link>
                            <Link className='hover:scale-110 transition duration-300 ease-out' to="https://www.instagram.com/dcrust_iic/"><img src={facebook}></img></Link>
                            <Link className='hover:scale-110 transition duration-300 ease-out' to="https://www.facebook.com/profile.php?id=100067162215624"><img src={linkedin}></img></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}