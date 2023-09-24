import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"
export default function Footer() {
    return (

        <footer className="w-full bg-cyan p-5">
            <div className="flex justify-around">
                <div className="logo text-black text-4xl flex items-center">
                    IIC
                </div>
                <div className="cols flex gap-10">
                    <div className="col1 flex flex-col gap-2">
                        <div className="title text-black text-xl underline">
                            Social
                        </div>
                        <ul>
                            <li className="text-black"><Link to="https://github.com/DCRUSTODC/iic">Github</Link></li>
                            <li className="text-black"><Link to="https://www.instagram.com/dcrust_iic/">Instagram</Link></li>
                            <li className="text-black"><Link to="https://www.facebook.com/profile.php?id=100067162215624">Facebook</Link></li>
                        </ul>
                    </div>
                    <div className="col2 flex flex-col gap-2">
                        <div className="title text-black text-xl underline">
                            Quick Link
                        </div>
                        <ul>
                            <li className="text-black"><Link to="/events">Events</Link></li>
                            <li className="text-black"><Link to="/team">Team</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>

    )
}