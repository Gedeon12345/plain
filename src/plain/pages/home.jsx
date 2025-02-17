import image1 from "../components/images/image1.jpg"
import image2 from "../components/images/image2.jpg"
import image3 from "../components/images/image3.jpg"
import image4 from "../components/images/image4.jpg"
import image5 from "../components/images/image5.jpg"
import image6 from "../components/images/image6.webp"
import image7 from "../components/images/image7.jpg"
import image8 from "../components/images/image8.jpg"
import image9 from "../components/images/image9.jpg"
import image10 from "../components/images/image10.jpg"
import Cheap from "./cheap/cheap"

export default function () {
    return (
        <>
            <section className="border-0 mt-[90px] min-h-[400px] h-[500px] w-[100%] bg-[#f0f3f5] flex items-center overflow-hidden ">
                <div className="border-0 p-5 w-[75%] h-[100%] flex flex-col justify-center items-start ">
                    <h1 className="border-0 ml-5 text-[45px] text-[#192024] font-bold ">Comparez les offres de vols parmi des centain de site</h1>
                    <div className="border-0 ml-5 mt-5 mb-5 flex justify-center items-center ">
                        <div className="border-0 p-2 w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 bg-[#ff6b0fea] p-2 text-[#fff] flex justify-center items-center rounded-[10px] cursor-pointer shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition duration-150 hover:bg-[#ff6b0f] ">
                                <i className="las la-plane la-2x"></i>
                            </div>
                            <span>Vols</span>
                        </div>
                        <div className="border-0 p-2 w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 bg-[#ffffff] p-2 text-[#252323] flex justify-center items-center rounded-[10px] cursor-pointer shadow-[0px_4px_15px_rgba(0,0,0,0.2)] transition duration-150 hover:bg-[#00000013] ">
                                <i className="las la-plane la-2x"></i>
                            </div>
                            <span>Hébergement</span>
                        </div>
                        <div className="border-0 p-2 w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 bg-[#ffffff] p-2 text-[#252323] flex justify-center items-center rounded-[10px] cursor-pointer shadow-[0px_4px_15px_rgba(0,0,0,0.2)] transition duration-150 hover:bg-[#00000013] ">
                                <i className="las la-car la-2x"></i>
                            </div>
                            <span>Voiture</span>
                        </div>
                        <div className="border-0 p-2 w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 bg-[#ffffff] p-2 text-[#252323] flex justify-center items-center rounded-[10px] cursor-pointer shadow-[0px_4px_15px_rgba(0,0,0,0.2)] transition duration-150 hover:bg-[#00000013] ">
                                <i className="las la-plane la-2x"></i>
                            </div>
                            <span>Vols + Hotels</span>
                        </div>
                    </div>
                    <div className="border-0 p-2 ml-5 w-[100%]  ">
                        <div className="border-0 flex justify-between items-center w-[30%] mb-3 ">
                            <div className="space-x-2">
                                <span>Aller-Retour</span>
                                <i className="las la-angle-down"></i>
                            </div>
                            <div className="space-x-2">
                                <span>Aucun bagage</span>
                                <i className="las la-angle-down"></i>
                            </div>
                        </div>
                        <div className="border-0 w-[100%] bg-[#fff] flex justify-between items-center shadow-[0px_4px_15px_rgba(0,0,0,0.2)] rounded-[10px] ">
                            <div className="border-0 border-red-500 text-[#000] w-[60%] relative flex items-center justify-between ">
                                <div className="border-0 p-4 mr-3 w-[50%] flex justify-start items-center rounded-[10px] space-x-2 transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                    <div className="border-1 w-[50%] bg-[#f1f1f1] flex justify-center items-center rounded-[5px] p-[0px_0px_0px_5px] space-x-2 ">
                                        <span>Douala(DLA)</span>
                                        <span className="border-0 p-[2px] flex justify-center items-center rounded-[5px] transition duration-150 hover:bg-[#00000041] ">
                                            <i className="las la-times la-1x"></i>
                                        </span>
                                    </div>
                                    <input className="w-[50%] outline-none " type="text" placeholder="De..." />
                                </div>
                                <div className="border-0 p-4 w-[50%] flex justify-start items-center rounded-[10px] transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                    <input className="w-[100%] outline-none " type="text" placeholder="À..." />
                                </div>
                                <div className="border-0 p-1 w-[30px] absolute left-[50%] translate-x-[-50%] flex justify-center items-center rounded-[5px] transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                    <i className="las la-exchange-alt"></i>
                                </div>
                            </div>
                            <div className="border-0 w-[40%] flex justify-between items-center ">
                                <div className="border-0 p-4 flex justify-center items-center rounded-[10px] transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                    <span>Aller</span>
                                </div>
                                <div className="border-0 p-4 flex justify-center items-center rounded-[10px] transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                    <span>Retour</span>
                                </div>
                                <div className="border-0 p-1 pl-3 flex justify-center items-center rounded-[10px] space-x-3 transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                    <span>1 adulte, Economique</span>
                                    <div className="p-4 text-[#fff] bg-[#ff6b0fea] flex justify-center items-center cursor-pointer rounded-[10px] hover:bg-[#ff6b0f] ">
                                        <i className="las la-search la-1x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>  
                </div>
                <div className="border-0 w-[25%] h-[600px] flex relative ">
                    <div className="border-0 space-y-4 w-[300px] ">
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                                <img className="h-[230px] object-center object-cover " src={image1} alt="" />
                        </div>
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] overflow-hidden ">
                            <img className="h-[300px] object-center object-cover " src={image2} alt="" />
                        </div>
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                            <img className="h-[230px] w-full object-center object-cover " src={image3} alt="" />
                        </div>
                    </div>
                    <div className="border-0 space-y-4 w-[300px] absolute right-[-220px] top-[-100px] ">
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                            <img className="h-[230px] object-center object-cover " src={image7} alt="" />
                        </div>
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                            <img className="h-[230px] object-center object-cover " src={image8} alt="" />
                        </div>
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                            <img className="h-[230px] object-center object-cover " src={image9} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="border-0 no-scrollbar w-[100%] min-h-[85vh] bg-[#fafbfb] overflow-hidden  ">
                <div className="border-0 p-6 w-full flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-[#192024] ">Offre de voyage à moin de 500000frs</h1>
                    <div className="border-0 cursor-pointer p-2 rounded-[10px] transition duration-200 hover:bg-[#d9e2e8] ">
                        <span>En savoir plus</span>
                        <i className="las la-angle-right"></i>
                    </div>
                </div>
                <div className="no-scrollbar overflow-x-scroll ">
                    <div className="border-0 p-5 min-w-[200%] flex justify-start items-center space-x-3 ">
                        <Cheap
                                image = "../src\plain\components\images\image10.jpg"
                                city = "Yaounde"
                                duration = "0h 50min"
                                start = "mer. 12/3"
                                end = "sam. 15/3"
                                price = "120000"
                        /> 
                        <Cheap
                                image = "../src\plain\components\images\ville1.jpg"
                                city = "Yaounde"
                                duration = "0h 50min"
                                start = "mer. 12/3"
                                end = "sam. 15/3"
                                price = "120000"
                        />
                        <Cheap
                                image = "../src\plain\components\images\ville2.jpg"
                                city = "Yaounde"
                                duration = "0h 50min"
                                start = "mer. 12/3"
                                end = "sam. 15/3"
                                price = "120000"
                        />
                        <Cheap
                                image = "../src\plain\components\images\ville3.jpg"
                                city = "Yaounde"
                                duration = "0h 50min"
                                start = "mer. 12/3"
                                end = "sam. 15/3"
                                price = "120000"
                        />
                        <Cheap
                                image = "../src\plain\components\images\ville4.jpg"
                                city = "Yaounde"
                                duration = "0h 50min"
                                start = "mer. 12/3"
                                end = "sam. 15/3"
                                price = "120000"
                        />
                        <Cheap
                                image = "../src\plain\components\images\ville5.jpg"
                                city = "Yaounde"
                                duration = "0h 50min"
                                start = "mer. 12/3"
                                end = "sam. 15/3"
                                price = "120000"
                        />
                        <Cheap
                                image = "../src\plain\components\images\ville6.jpg"
                                city = "Yaounde"
                                duration = "0h 50min"
                                start = "mer. 12/3"
                                end = "sam. 15/3"
                                price = "120000"
                        />
                        <Cheap
                                image = "../src\plain\components\images\ville7.jpg"
                                city = "Yaounde"
                                duration = "0h 50min"
                                start = "mer. 12/3"
                                end = "sam. 15/3"
                                price = "120000"
                        />
                    </div>
                </div>
            </section>
        </>
        

    )
}