import { Link } from "react-router-dom"
import apple from "../components/images/apple.png"
import google from "../components/images/google.jpg"
import facebook from "../components/images/facebook.png"
import cameroon from "../components/images/Cameroon.png"
import booking from "../components/images/booking.png"
import openTable from "../components/images/open-table.png"
import priceline from "../components/images/priceline.jpg"
import agoda from "../components/images/agoda.png"
import mtn from "../components/images/mtn.png"

export default function () {

    return (
        <footer className="border-0 w-[100vw] max-w-[100%] ">
            <div className="border-0 flex lg:flex-row flex-col justify-start lg:space-x-[150px] md:p-[20px_60px] p-[20px_20px] ">
                <div className="flex flex-col ">
                    <h1 className="mb-2 font-semibold ">Enterprise</h1>
                    <Link className="underline hover:no-underline ">À propos</Link>
                    <Link className="underline hover:no-underline ">Offre d'emploi</Link>
                    <Link className="underline hover:no-underline ">Mobile</Link>
                    <Link className="underline hover:no-underline ">Blog</Link>
                    <Link className="underline hover:no-underline ">Mention Légale</Link>
                    <Link className="underline hover:no-underline ">Notre fonctionement</Link>
                </div>
                <hr className="border-[#7772724b] lg:hidden block m-[30px_0px] " />
                <div className="flex flex-col ">
                    <h1 className="mb-2 font-semibold ">Contact</h1>
                    <Link className="underline hover:no-underline ">Aide/FAQ</Link>
                    <Link className="underline hover:no-underline ">Presse</Link>
                    <Link className="underline hover:no-underline ">Affiliation</Link>
                    <Link className="underline hover:no-underline ">Propriétaires d’hôtels</Link>
                    <Link className="underline hover:no-underline ">Professionalle</Link>
                    <Link className="underline hover:no-underline ">Faire de la publicité</Link>
                </div>
                <hr className="border-[#7772724b] lg:hidden block m-[30px_00px] " />
                <div className="flex flex-col ">
                    <h1 className="mb-2 font-semibold ">Plus</h1>
                    <Link className="underline hover:no-underline ">Frais de compagnie</Link>
                    <Link className="underline hover:no-underline ">Compagnie aérienne</Link>
                    <Link className="underline hover:no-underline ">Astuces meilleurs tarifs</Link>
                    <Link className="underline hover:no-underline ">Badges et certificats</Link>
                </div>
                <hr className="border-[#7772724b] lg:hidden block m-[30px_00px] " />
                <div className="flex flex-col ">
                    <h1 className="mb-2 font-semibold ">Télécharger l'appli GEDE</h1>
                    <div className="flex lg:flex-col flex-row space-x-5 ">
                        <div className="group border-1 flex justify-center p-[2px] w-[130px] rounded-[10px] mt-3 ">
                            <div className=" border-0 flex justify-start items-center cursor-pointer ">
                                <img src={google} className="w-[35px] transition duration-500 grayscale-100 hover:grayscale-0 " alt="" />
                            </div>
                            <div className="border-0 space-y-[-8px] flex flex-col justify-center items-start cursor-pointer ">
                                <p className="text-[12px] text-[#192024] ">Get it on</p>
                                <h1 className="font-semibold text-[#192024] text-[15px] ">Google Play</h1>
                            </div>
                        </div>
                        <div className="border-1 flex justify-start p-[2px] w-[130px] rounded-[10px] mt-3 ">
                            <div className="group border-0 flex justify-start items-center cursor-pointer ">
                                <img src={apple} className="w-[35px] grayscale-100 group-hover:grayscale-0 " alt="" />
                            </div>
                            <div className="border-0 space-y-[-8px] flex flex-col justify-center items-start cursor-pointer ">
                                <p className="text-[12px] text-[#192024] ">Get it on</p>
                                <h1 className="font-semibold text-[#192024] text-[15px] ">App Store</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-[#7772724b] w-[90%] m-[20px_80px] " />
            <div className="border-0 border-[#ff0000] flex lg:flex-col flex-col-reverse ">
                <div className="border-0 flex lg:flex-row flex-col-reverse justify-between items-center md:p-[20px_40px] p-[20px_20px] ">
                    <div className="border-0 text-[15px] flex justify-start flex-wrap lg:mt-0 mt-5 items-center space-x-[30px] lg:w-[70%] ">
                        <p>@ 2025 GEDE</p>
                        <Link className="underline hover:no-underline ">Paramèttres de cookies</Link>
                        <Link className="underline hover:no-underline ">Confidentialité</Link>
                        <Link className="underline hover:no-underline ">Conditions générales</Link>
                    </div>
                    <div className="border-0 lg:w-[30%] w-[100%] flex justify-start items-center ">
                        <img src={facebook} className="w-[35px] cursor-pointer transition duration-500 grayscale-100 hover:grayscale-0 " alt="" />
                    </div>
                </div>
                <div className="border-0 flex justify-between items-center md:p-[20px_40px] p-[20px_20px] ">
                    <div className="border-0 text-[15px] lg:flex justify-start items-center space-x-[30px] lg:w-[70%] hidden ">
                        <img className="border-0 w-[130px] cursor-pointer grayscale-100 transition duration-300 hover:grayscale-0 " src={booking} alt="" />
                        <img className="border-0 w-[130px] cursor-pointer grayscale-100 transition duration-300 hover:grayscale-0 " src={mtn} alt="" />
                        <img className="border-0 w-[120px] cursor-pointer grayscale-100 transition duration-300 hover:grayscale-0 " src={openTable} alt="" />
                        <img className="border-0 w-[80px] cursor-pointer grayscale-100 transition duration-300 hover:grayscale-0 " src={priceline} alt="" />
                        <img className="border-0 w-[80px] cursor-pointer grayscale-100 transition duration-300 hover:grayscale-0 " src={agoda} alt="" />
                    </div>
                    <div className="border-0 lg:w-[30%] flex lg:flex-row flex-col justify-start items-start space-x-[40px] ">
                        <div className="bg-transparent transition duration-300 hover:bg-[#7772724b] p-3 flex justify-center items-center rounded-[5px] cursor-pointer ">
                            <img src={cameroon} className="w-[20px] h-[20px] cursor-pointer lg:ml-0 " alt="" />
                            <p className="ml-3">Camerounais</p>
                        </div>
                        <div className="bg-transparent transition duration-300 hover:bg-[#7772724b] p-3 flex justify-center items-center rounded-[5px] cursor-pointer ">
                            <p className="font-bold ">€  EUR</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

} 