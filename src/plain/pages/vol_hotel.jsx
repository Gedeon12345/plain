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
import Pro from "./pro/pro"
import Destination from "./destination/destination"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import ProMap from "./pro_map/proMap"
import CheapMap from "./cheap_map/cheapMap"
import Section1 from "./travels/Section1"
import Section2 from "./travels/Section2"
import Section3 from "./travels/section3"
import QuestionSection1 from "./questions/questionSection1"
import section1 from "./questions/section/section1"
import Loader from "../components/loader"

export default function () {

    const scrollRef = useRef(null);
    const [isClicked, setIsClicked] = useState(false)

    function toggleClick () {
        setIsClicked(!isClicked)
    }

    const scrollLeft = () => {
        if(scrollRef.current) {
            scrollRef.current.scrollBy({left: -330, behavior: "smooth"});
        }
    }

    const scrollRight = () => {
        if(scrollRef.current) {
            scrollRef.current.scrollBy({left: 335, behavior: "smooth"});
        }
    }

    const mapProEllemens = ProMap.map((mapPro) =>{
        return <Pro 
                 mapPro = {mapPro}
            />
    })

    const mapCheapEllements = CheapMap.map((mapCheap) => {
        return <Cheap 
                {...mapCheap}
        />
    })

    const question1 = section1.map(firstSection => (
        <QuestionSection1
            key = {firstSection.id}
            question = {firstSection.question}
            details = {firstSection.details}
        />
    ))

        const[loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, []);



    return (
        <secction>
            {loading ? (
                <Loader />
            ) : (
                <section className="border-0 border-[#000000] mt-[90px] min-h-[400px] lg:w-[100%] md:w-[100%] sm:w-full bg-[#f0f3f5] flex items-center overflow-hidden rounded-[30px] ">
                <div className="border-0 p-5 xl:w-[75%] w-[100%] h-[100%] flex flex-col lg:justify-start justify-center lg:items-start items-center ">
                    <h1 className="border-0 md:ml-5 ml-0 text-[45px] text-[#192024] font-bold md:block hidden ">Comparez les offres de vols + Hôtels parmi des centain de site</h1>
                    <div className="border-0 md:ml-5 ml-0 md:w-[500px] w-[100%] md:mt-5 mb-5 flex md:justify-center justify-between items-center md:text-[12px] text-[13px] ">
                        <Link to="/" className="border-0 md:w-[120px] w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 w-[50px] h-[50px] bg-[#ff6b0fea] p-2 text-[#fff] flex justify-center items-center rounded-[10px] cursor-pointer shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition duration-150 hover:bg-[#ff6b0f] ">
                                <i className="las la-plane la-2x"></i>
                            </div>
                            <span>Vols</span>
                        </Link>
                        <Link to="/hebergement" className="border-0 md:w-[120px] w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 w-[50px] h-[50px] bg-[#ffffff] p-2 text-[#252323] flex justify-center items-center rounded-[10px] cursor-pointer shadow-[0px_4px_15px_rgba(0,0,0,0.2)] transition duration-150 hover:bg-[#00000013] ">
                                <i className="las la-bed la-2x"></i>
                            </div>
                            <span>Hébergement</span>
                        </Link>
                        <Link to="/voiture"  className="border-0 md:w-[120px] w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 w-[50px] h-[50px] bg-[#ffffff] p-2 text-[#252323] flex justify-center items-center rounded-[10px] cursor-pointer shadow-[0px_4px_15px_rgba(0,0,0,0.2)] transition duration-150 hover:bg-[#00000013] ">
                                <i className="las la-car la-2x"></i>
                            </div>
                            <span>Voiture</span>
                        </Link>
                        <Link to="/vol_hotel" className="border-0 md:w-[120px] w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 w-[50px] h-[50px] bg-[#ffffff] p-2 text-[#252323] flex justify-center items-center rounded-[10px] cursor-pointer shadow-[0px_4px_15px_rgba(0,0,0,0.2)] transition duration-150 hover:bg-[#00000013] ">
                                <i className="las la-umbrella-beach la-2x"></i>
                            </div>
                            <span>Vols + Hotels</span>
                        </Link>
                    </div>
                    <div className="border-0 lg:p-2 lg:ml-5 ml-0 w-[100%] flex flex-col md:justify-start items-center justify-center ">
                        <div className="border-0 lg:flex hidden justify-start items-center space-x-4 w-[100%] mb-3 ">
                            <div className="space-x-2 cursor-pointer">
                                <span>Aller-Retour</span>
                                <i className="las la-angle-down"></i>
                            </div>
                            <div className="space-x-2 cursor-pointer">
                                <span>Aucun bagage</span>
                                <i className="las la-angle-down"></i>
                            </div>
                        </div>
                        <div className="border-0 w-[100%] bg-[#fff] lg:flex hidden justify-between items-center shadow-[0px_4px_15px_rgba(0,0,0,0.2)] rounded-[10px] ">
                            <div className="border-0 border-red-500 text-[#000] w-[60%] relative flex items-center justify-between ">
                                <div className="border-0 p-4 mr-3 w-[50%] flex justify-start items-center rounded-[10px] space-x-2 transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                    <input className="w-[100%] outline-none " type="text" placeholder="De..." />
                                </div>
                                <div className="border-0 p-4 w-[50%] flex justify-start items-center rounded-[10px] transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                    <input className="w-[100%] outline-none " type="text" placeholder="Saisisez une destination" />
                                </div>
                                <div className="border-0 w-[1px] h-[50%] absolute left-[50%] translate-x-[-50%] bg-[#d9e2e8] "></div>
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
                        <Destination  />  
                    </div>  
                </div>
                <div className="border-0 w-[25%] h-[600px] xl:flex hidden relative ">
                    <div className="border-0 space-y-4 w-[300px] ">
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                                <img className="h-[230px] w-full object-center object-cover " src={image1} alt="" />
                        </div>
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] overflow-hidden ">
                            <img className="h-[300px] w-full object-center object-cover " src={image2} alt="" />
                        </div>
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                            <img className="h-[230px] w-full object-center object-cover " src={image3} alt="" />
                        </div>
                    </div>
                    <div className="border-0 space-y-4 w-[300px] absolute right-[-220px] top-[-100px] ">
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                            <img className="h-[230px] w-full object-center object-cover " src={image7} alt="" />
                        </div>
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                            <img className="h-[230px] w-full object-center object-cover " src={image8} alt="" />
                        </div>
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                            <img className="h-[230px] w-full object-center object-cover " src={image9} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            )}
            <section className="border-0 no-scrollbar w-[100%] bg-[#fafbfb] overflow-hidden  ">
                <div className="border-0 p-6 w-full flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-[#192024] ">Pour les pros du voyage</h1>
                    <div className="border-0 cursor-pointer p-2 rounded-[10px] transition duration-200 hover:bg-[#d9e2e8] md:block hidden ">
                        <span>En savoir plus</span>
                        <i className="las la-angle-right"></i>
                    </div>
                </div>
                <div ref={scrollRef} className="border-0 no-scrollbar overflow-x-scroll ">
                    <div className="border-0 p-5  flex justify-start items-center space-x-3 ">
                        <div className="flex justify-center items-center space-x-3   ">
                            {mapProEllemens}
                        </div>
                    </div>
                    <div className="w-[100px] h-[50px] mr-3 flex justify-between items-center absolute right-3 ">
                        <div onClick={scrollLeft} className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#c2b1b1] hover:bg-[#6b6565] transition duration-200 text-[#fff] text-[20px] cursor-pointer ">
                            <i className="las la-angle-left "></i>
                        </div>
                        <div onClick={scrollRight} className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#c2b1b1] hover:bg-[#6b6565] transition duration-200 text-[#fff] text-[20px] cursor-pointer ">
                            <i className="las la-angle-right "></i>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-0 md:m-[100px_20px_0px_20px] m-6 mt-12 "> 
                <div className=" ">
                    <h1 className="text-[32px] font-bold text-[#192024] ">Trouvez un billet d’avion pas cher pour l’une de ces destinations</h1>
                    <h2 className="text-[20px] text-[#192024] font-medium mb-9 ">Recherchez des vols pas chers</h2>
                    <p className="text-[16px] ">Faites des économies sur vos billets d'avion en cherchant des vols pas chers sur GEDEON Travel. GEDEON Travel est un comparateur de vols qui vous aidera à trouver rapidement les meilleures offres pour vos vacances. Que vous cherchiez à organiser votre séjour à l'avance ou que vous vouliez un aller-retour pas cher pour un voyage à la dernière minute, KAYAK vous accompagne en vous montrant les bons plans et les vols les moins chers.</p>
                </div>
                <div className="border-0 p-2 w-[100%] mt-2 ">
                    <div className="border-0 border-red-700 p-1 grid lg:grid-cols-3 md:grid-cols-2 gap-5 items-start w-[100%] ">
                        <Section1 />
                        <Section2 />
                        <Section3 />
                    </div>
                    <h1 className="text-2xl font-semibold m-[80px_0px_30px_0px] ">Foire aux questions</h1>
                    <div className="border-0 border-red-700 p-1 grid lg:grid-cols-2 md:grid-cols-2 gap-4 items-start w-[100%] ">
                        {question1}
                    </div>
                </div>
            </section>
            <section className="border-0 md:m-[20px_20px_0px_20px] p-2 m-6 mt-10 text-[13px] ">
                <p>Recherchez des vols pas chers sur KAYAK. Trouvez les billets d’avion les moins chers pour toutes les <Link className="text-[#003cff] underline hover:no-underline ">compagnies aériennes</Link> populaires, les <Link className="text-[#003cff] underline hover:no-underline ">aéroports du monde entier</Link> et pour les <Link className="text-[#003cff] underline hover:no-underline ">itinéraires internationaux les plus prisés</Link>. KAYAK parcourt des centaines de sites et vous aide à dénicher un billet pas cher et à trouver le vol qu’il vous faut. Comme KAYAK recherche des vols pas chers sur de nombreux sites à la fois, vous pouvez trouver rapidement des billets pas chers auprès de compagnies aériennes bon marché, <Link className="text-[#003cff] underline hover:no-underline ">des offres de dernière minute</Link> et des trajets en <Link className="text-[#003cff] underline hover:no-underline ">trains en bus.</Link></p>
                <p className="mt-3 ">KAYAK vous aide aussi à trouver les <Link className="text-[#003cff] underline hover:no-underline ">hôtels</Link> adaptés à vos besoins.</p>
            </section>
            <hr className="border-[#7772724b] mt-3 w-[100%] mb-3 " />
        </secction>
        

    )
}