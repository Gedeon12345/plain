import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import image1 from "./images/menu.svg"
import image2 from "./images/heart.svg"
import image3 from "./images/account.svg"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)
    const [isHovered, setIsHoverde] = useState(false)

    console.log(menuRef)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if(menuRef.current && !menuRef.current.contains(e.target)){
                setIsOpen(false)
            }
        }
        if(isOpen){
            document.addEventListener("mousedown", handleClickOutside)
        }
        return () =>{
            document.removeEventListener("mousedown", handleClickOutside)
        }
    })

return (

    <header className="p-0 w-[100%] bg-[#fff] fixed top-[0%] flex items-center justify-between z-100 ">
        <div className="border-0 p-2 w-[350px] flex items-center justify-start ">
            {isOpen ? 
                (<button ref={menuRef} onClick={toggleSidebar} className="text-3xl cursor-pointer ">
                    <img className="w-[30px] h-[40px] " src={image1} alt="" />
                </button>) 
                : 
                (<button onClick={toggleSidebar} className="text-3xl cursor-pointer ">
                    <img className="w-[30px] h-[40px] " src={image1} alt="" />
                </button>)
            }
            <h1 className="border-0 border-black md:text-[20px] text-[15px] text-[#fff] font-bold flex flex-col justify-center items-center space-y-2 ">
                <div className="border-0 border-[#f00] flex justify-center items-center ">   
                    <span className="bg-[#ff690f] flex justify-center items-center md:w-[30px] w-[20px] md:h-[30px] h-[20px] mr-[2px] rounded-[5px] ">G</span>
                    <span className="bg-[#ff690f] flex justify-center items-center md:w-[30px] w-[20px] md:h-[30px] h-[20px] mr-[2px] rounded-[5px] ">E</span>
                    <span className="bg-[#ff690f] flex justify-center items-center md:w-[30px] w-[20px] md:h-[30px] h-[20px] mr-[2px] rounded-[5px] ">D</span>
                    <span className="bg-[#ff690f] flex justify-center items-center md:w-[30px] w-[20px] md:h-[30px] h-[20px] mr-[2px] rounded-[5px] ">E</span>
                    <span className="bg-[#ff690f] flex justify-center items-center md:w-[30px] w-[20px] md:h-[30px] h-[20px] mr-[2px] rounded-[5px] ">O</span>
                    <span className="bg-[#ff690f] flex justify-center items-center md:w-[30px] w-[20px] md:h-[30px] h-[20px] mr-[2px] rounded-[5px] ">N</span>
                </div>
                <div className="border-0 border-[#00ff2a] flex ml-10 justify-center items-center ">
                    <span className="bg-[#ff690f] flex justify-center items-center md:w-[30px] w-[20px] md:h-[30px] h-[20px] mr-[2px] rounded-[5px] ">T</span>
                    <span className="bg-[#ff690f] flex justify-center items-center md:w-[30px] w-[20px] md:h-[30px] h-[20px] mr-[2px] rounded-[5px] ">R</span>
                    <span className="bg-[#ff690f] flex justify-center items-center md:w-[30px] w-[20px] md:h-[30px] h-[20px] mr-[2px] rounded-[5px] ">A</span>
                    <span className="bg-[#ff690f] flex justify-center items-center md:w-[30px] w-[20px] md:h-[30px] h-[20px] mr-[2px] rounded-[5px] ">V</span>
                    <span className="bg-[#ff690f] flex justify-center items-center md:w-[30px] w-[20px] md:h-[30px] h-[20px] mr-[2px] rounded-[5px] ">E</span>
                    <span className="bg-[#ff690f] flex justify-center items-center md:w-[30px] w-[20px] md:h-[30px] h-[20px] mr-[2px] rounded-[5px] ">L</span>
                </div>
            </h1>
        </div>
        <div className="border-0 flex justify-between items-center md:w-[200px] w-[100px] space-x-2 mr-3 ">
            <div className="border-0 w-[45px] h-[45px] flex justify-center items-center rounded-[10px] cursor-pointer transition duration-300 hover:bg-[#00000023] ">
                <img src={image2} alt="" />
            </div>
            <button className="md:border-1 border-0 flex justify-center items-center md:w-[150px] w-[50%] h-[45px] rounded-[10px] cursor-pointer transition duration-300 hover:bg-[#00000023] ">
                <img src={image3} alt="" />
                <span className="lg:block md:block hidden">Connexion</span>
            </button>
        </div>

        <div ref={menuRef} className={`border-0 h-[85vh] lg:w-[20%] md:w-[50%] w-[100%] bg-[#ffffff] text-[#000] shadow-lg absolute top-[100%] left-0 transition duration-300 z-100 overflow-y-hidden ${isHovered ? "scrollbar-thin overflow-y-scroll" : "overflow-y-hidden"} ${isOpen ? "translate-x-0" : "translate-x-[-100%] "}`}
        onMouseEnter={() => setIsHoverde(true)}
        onMouseLeave={() => setIsHoverde(false)}>
            <div className="flex flex-col justify-center items-start space-y-2 ">
                <div className="w-[100%] p-2 flex items-center transition duration-100 hover:bg-[#00000023] cursor-pointer rounded-[10px] ">
                    <i className="las la-plane-departure la-2x ml-2"></i>
                    <span className="ml-10">Vols</span>
                </div>
                <div className="w-[100%] p-2 flex items-center transition duration-100 hover:bg-[#00000023] cursor-pointer rounded-[10px] ">
                    <i className="las la-bed la-2x ml-2"></i>
                    <span className="ml-10">Hébergement</span>
                </div>
                <div className="w-[100%] p-2 flex items-center transition duration-100 hover:bg-[#00000023] cursor-pointer rounded-[10px] ">
                    <i className="las la-car la-2x ml-2"></i>
                    <span className="ml-10">Voiture</span>
                </div>
                <div className="w-[100%] p-2 flex items-center transition duration-100 hover:bg-[#00000023] cursor-pointer rounded-[10px] ">
                    <i className="las la-umbrella-beach la-2x ml-2"></i>
                    <span className="ml-10">Vol + Hôtel</span>
                </div>
                <hr className="border-0 w-full h-[2px] m-[10px_auto] bg-[#00000023] " />
                <div className="w-[100%] p-2 flex items-center transition duration-100 hover:bg-[#00000023] cursor-pointer rounded-[10px] ">
                    <i className="las la-globe la-2x ml-2"></i>
                    <span className="ml-10">Explore</span>
                </div>
                <div className="w-[100%] p-2 flex items-center transition duration-100 hover:bg-[#00000023] cursor-pointer rounded-[10px] ">
                    <i className="las la-file-alt la-2x ml-2"></i>
                    <span className="ml-10">Conseil de voyage</span>
                </div>
                <div className="w-[100%] p-2 flex items-center transition duration-100 hover:bg-[#00000023] cursor-pointer rounded-[10px] ">
                    <i className="las la-thumbtack la-2x ml-2"></i>
                    <span className="ml-10">Vols direct</span>
                </div>
                <div className="w-[100%] p-2 flex items-center transition duration-100 hover:bg-[#00000023] cursor-pointer rounded-[10px] ">
                    <i className="las la-clock la-2x ml-2"></i>
                    <span className="ml-10">Meilleur moment pour voyagez</span>
                </div>
                <div className="w-[100%] p-2 flex items-center transition duration-100 hover:bg-[#00000023] cursor-pointer rounded-[10px] ">
                    <i className="las la-wallet la-2x ml-2"></i>
                    <span className="ml-10">Business</span>
                </div>
                <hr className="border-0 w-full h-[2px] m-[10px_auto] bg-[#00000023] " />
                <div className="w-[100%] p-2 flex items-center transition duration-100 hover:bg-[#00000023] cursor-pointer rounded-[10px] ">
                    <i className="las la-palette la-2x ml-2"></i>
                    <span className="ml-10">Préférence de confidentialité</span>
                </div>
                <div className="w-[100%] p-2 flex items-center transition duration-100 hover:bg-[#00000023] cursor-pointer rounded-[10px] ">
                    <i className="las la-heart la-2x ml-2"></i>
                    <span className="ml-10">Trips</span>
                </div>
                <hr className="border-0 w-full h-[2px] m-[10px_auto] bg-[#00000023] " />
                <div className="w-[100%] p-2 flex items-center transition duration-100 hover:bg-[#00000023] cursor-pointer rounded-[10px] ">
                    <i className="las la-flag la-2x ml-2"></i>
                    <span className="ml-10">Français</span>
                </div>
                <div className="w-[100%] p-2 flex items-center transition duration-100 hover:bg-[#00000023] cursor-pointer rounded-[10px] ">
                    <i className="las la-money-bill la-2x ml-2"></i>
                    <span className="ml-10">FCFA</span>
                </div>
                <div className="w-[100%] p-2 flex items-center transition duration-100 hover:bg-[#00000023] cursor-pointer rounded-[10px] ">
                    <i className="las la-comment la-2x ml-2"></i>
                    <span className="ml-10">Commentaire</span>
                </div>
            </div>
        </div>
        <div className={`w-[80%] h-[85vh] bg-[#00000023] absolute top-[100%] left-[20%] transition ease-out duration-300 ${isOpen ? "block" : "-translate-x-[150%] "} `}>

        </div>
    </header>

)

}

export default Header;