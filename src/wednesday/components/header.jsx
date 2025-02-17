import { useState } from "react"
import { Link } from "react-router-dom"; 
import logo from "../components/images/logo.jpg"

export default function () {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="bg-[#fff] md:w-[100%] w-[100%] h-[70px] flex flex-none items-center justify-around text-[#000] relative top-0 shadow-[2px_2px_5px_#000] z-10">
            <div className="flex md:justify-between justify-start items-center md:w-[400px] w-[300px]">
                <img className="w-[90px] h-[60px]" src={logo} alt="" />
                <h1 className="md:text-4xl text-2xl font-bold">GEDEONS TRAVEL</h1>
            </div>
            <button className="md:hidden transition duration-300" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <i class="las la-times-circle la-2x"></i>
                ) : (
                    <i class="las la-bars la-2x"></i>
                )}
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex md:items-center md:justify-between md:flex-row md:w-100 md:text-[#000] md:static md:bg-none md:border-none">
                <li className="cursor-pointer transition duration-300 hover:text-[#000000a4]  md:w-auto"><Link to="/" >Home</Link></li>
                <li className="cursor-pointer transition duration-300 hover:text-[#000000a4]  md:w-auto"><Link to="/articles" >Enrégistrement</Link></li>
                <li className="cursor-pointer transition duration-300 hover:text-[#000000a4]  md:w-auto"><Link to="/information" >Information</Link></li>
                <li className="cursor-pointer transition duration-300 hover:text-[#000000a4]  md:w-auto"><Link to="/accounts" >Account</Link></li>
            </ul>

            {/* Mobile Menu */}
                <ul className={`${isOpen ? 'opacity-[1]' : 'opacity-[0] pointer-events-none'} md:hidden flex items-center justify-center flex-col w-full text-[#fff] absolute bg-[#1b262cde] top-[70px] leading-10 transition duration-500`}>
                    <li className="cursor-pointer transition duration-300 hover:text-[#ffffffa4] ml-20 italic  w-100"><Link to="/" >Home</Link></li>
                    <li className="cursor-pointer transition duration-300 hover:text-[#ffffffa4] ml-20 italic  w-100"><Link to="/articles" >Enrégistrement</Link></li>
                    <li className="cursor-pointer transition duration-300 hover:text-[#ffffffa4] ml-20 italic  w-100"><Link to="/information" >Information</Link></li>   
                    <li className="cursor-pointer transition duration-300 hover:text-[#ffffffa4] ml-20 italic  w-100"><Link to="/accounts" >Account</Link></li>
                </ul>
        </header>
    )
}