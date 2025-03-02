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
import { useRef } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import ProMap from "./pro_map/proMap"
import CheapMap from "./cheap_map/cheapMap"
import Section1 from "./travels/Section1"
import Section2 from "./travels/Section2"
import Section3 from "./travels/section3"
import QuestionSection1 from "./questions/questionSection1"
import section1 from "./questions/section/section1"

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

    const [count, setCount] = useState(0);
    const target = 41000000; // Target number
    const duration = 2000; // Animation duration in ms (2 seconds)
    const increment = Math.ceil(target / (duration / 16)); // Approx. step size

    useEffect(() => {
        const interval = setInterval(() => {
        setCount((prev) => {
            if (prev >= target) {
            clearInterval(interval);
            return target;
            }
            return prev + increment;
        });
        }, 50); // Runs every ~16ms (approx. 60fps)

        return () => clearInterval(interval);
    }, []);



    return (
        <secction>
            <section className="border-0 border-[red] mt-[90px] min-h-[400px] lg:w-[100%] md:w-[100%] sm:w-full bg-[#f0f3f5] flex items-center overflow-hidden rounded-[30px] ">
                <div className="border-0 p-5 xl:w-[75%] w-[100%] h-[100%] flex flex-col lg:justify-start justify-center lg:items-start items-center ">
                    <h1 className="border-0 md:ml-5 ml-0 text-[45px] text-[#192024] font-bold md:block hidden ">Comparez les locations de voitures parmi des centaines de sites<span className="text-[#ff6b0fea] ">.</span></h1>
                    <div className="border-0 md:ml-5 ml-0 md:w-[500px] w-[100%] md:mt-5 mb-5 flex md:justify-center justify-between items-center md:text-[12px] text-[13px] ">
                        <Link to="/" className="border-0 md:w-[120px] w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 w-[50px] h-[50px] bg-[#fff] p-2 text-[#252323] flex justify-center items-center rounded-[10px] cursor-pointer shadow-[0px_4px_15px_rgba(0,0,0,0.2)] transition duration-150 hover:bg-[#00000013] ">
                                <i className="las la-plane la-2x"></i>
                            </div>
                            <span>Vols</span>
                        </Link>
                        <Link to="/hebergement" className="border-0 md:w-[120px] w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 w-[50px] h-[50px] bg-[#fff] p-2 text-[#ff252323f] flex justify-center items-center rounded-[10px] cursor-pointer shadow-[0px_4px_15px_rgba(0,0,0,0.2)] transition duration-150 hover:bg-[#00000013] ">
                                <i className="las la-bed la-2x"></i>
                            </div>
                            <span>Hébergement</span>
                        </Link>
                        <Link to="/voiture"  className="border-0 md:w-[120px] w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 w-[50px] h-[50px] bg-[#ff6b0fea] p-2 text-[#fff] flex justify-center items-center rounded-[10px] cursor-pointer shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition duration-150 hover:bg-[#ff6b0f] ">
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
                                <span>Même lieu de Retour</span>
                                <i className="las la-angle-down"></i>
                            </div>
                            <div className="space-x-2 cursor-pointer">
                                <span>Âge de la personne qui conduit: <span className="font-bold ">26-65 ans</span></span>
                                <i className="las la-angle-down"></i>
                            </div>
                        </div>
                        <div className="border-0 w-[100%] bg-[#fff] lg:flex hidden justify-between items-center shadow-[0px_4px_15px_rgba(0,0,0,0.2)] rounded-[10px] ">
                            <div className="border-0 border-red-500 text-[#000] w-[55%] relative flex items-center justify-between ">
                                <div className="border-0 p-4 mr-3 w-[100%] flex justify-start items-center rounded-[10px] space-x-2 transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                    <input className="border-0 w-[100%] outline-none " type="text" placeholder="Douala, Cameroun" />
                                </div>
                            </div>
                            <div className="border-0 w-[45%] flex justify-between items-center ">
                                <div className="border-0 p-4 flex justify-center items-center rounded-[10px] transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                    <span>sam. 8/3</span>
                                </div>
                                <div className="border-0 p-4 flex justify-center items-center rounded-[10px] transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                    <span>Midi</span>
                                </div>
                                <div className="border-0 p-4 flex justify-center items-center rounded-[10px] transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                    <span>sam. 15/3</span>
                                </div>
                                <div className="border-0 p-1 pl-3 flex justify-center items-center rounded-[10px] space-x-3 transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                    <span>Midi</span>
                                    <div className="p-4 text-[#fff] bg-[#ff6b0fea] flex justify-center items-center cursor-pointer rounded-[10px] hover:bg-[#ff6b0f] ">
                                        <i className="las la-search la-1x"></i>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="border-0 p-2 w-full flex justify-start items-center text-[#192024] text-[15px] ">
                            <div className="border-0 flex justify-center items-center space-x-6 ">
                                <p>Comparer les sites à KAYAK</p>
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="check" className="cursor-pointer" />
                                    <label htmlFor="">Booking.com</label>
                                </div>
                            </div>
                        </div>
                        {/* <Destination  />   */}
                    </div>  
                </div>
                <div className="border-0 w-[25%] h-[600px] xl:flex hidden relative ">
                    <div className="border-0 space-y-4 w-[300px] ">
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                                <img className="h-[230px] w-full object-center object-cover " src={image3} alt="" />
                        </div>
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] overflow-hidden ">
                            <img className="h-[300px] w-full object-center object-cover " src={image6} alt="" />
                        </div>
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                            <img className="h-[230px] w-full object-center object-cover " src={image10} alt="" />
                        </div>
                    </div>
                    <div className="border-0 space-y-4 w-[300px] absolute right-[-220px] top-[-100px] ">
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                            <img className="h-[230px] w-full object-center object-cover " src={image4} alt="" />
                        </div>
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                            <img className="h-[230px] w-full object-center object-cover " src={image8} alt="" />
                        </div>
                        <div className="border-0 w-[220px] h-[230px] rounded-[50px] object-center object-cover overflow-hidden ">
                            <img className="h-[230px] w-full object-center object-cover " src={image2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
{/* Testimonials */}
            <section className="border-0 p-4 mt-5 mb-5 w-[100%] bg-[#fff] overflow-hidden ">
                <div className="border-0 p-2 w-[100%] flex lg:justify-center justify-start items-center space-x-2 no-scrollbar overflow-x-scroll ">
                    <div className="border-1 xl:w-[450px] border-[#c7d5dd] flex flex-col justify-center items-start rounded-[30px] xl:p-6 pl-5 pr-5 p-0 xl:h-[auto] h-[230px] ">
                        <div className="border-0 lg:h-[50px] h-[30%] lg:w-[auto] w-[230px] flex justify-start items-center lg:mb-6 mb-0 lg:mt-3 mt-0 ">
                            <div className="w-[45px] h-[45px] bg-[#ff0000] rounded-[50%] "></div>
                            <div className="w-[45px] h-[45px] bg-[#00ff00] rounded-[50%] -ml-2 "></div>
                            <div className="w-[45px] h-[45px] bg-[#080808] rounded-[50%] -ml-2 "></div>
                            <div className="w-[45px] h-[45px] bg-[#00e1ff] rounded-[50%] -ml-2 "></div>
                            <div className="w-[45px] h-[45px] bg-[#3700ff] rounded-[50%] -ml-2 "></div>
                        </div>
                        <div className="border-0 lg:h-[auto] h-[50%] lg:mb-8 mb-0 lg:mr-0 mr-0 lg:space-y-0 space-y-1 lg:mt-0 mt-0 ">
                            <h1 className="font-bold md:text-2xl text-[22px] text-[#192024] ">Économisez en comparant</h1>
                            <h2 className="text-[#192024] ">Plus d'offres. Plus de sites. Une seule recherche</h2>
                        </div>
                    </div>
                    <div className="border-1 xl:w-[450px] w-[500px] border-[#c7d5dd] flex flex-col justify-center items-start rounded-[30px] xl:p-6 pl-5 pr-5 p-0 xl:h-[auto] h-[230px] ">
                        <div className="border-0 lg:h-[50px] h-[30%] lg:w-[auto] w-[230px] flex justify-start items-center lg:mb-6 lg-0 lg:mt-3 ">
                            <div className="w-[45px] h-[45px] bg-[#999090] rounded-[50%] flex justify-center items-center ">
                                <img className="w-[100%] h-[100%] rounded-[50%] " src={image10} alt="" />
                            </div>
                            <div className="w-[45px] h-[45px] bg-[#00ff00] rounded-[50%] -ml-2 flex justify-center items-center ">
                                <img className="w-[100%] h-[100%] rounded-[50%] " src={image2} alt="" />
                            </div>
                            <div className="w-[45px] h-[45px] bg-[#080808] rounded-[50%] -ml-2 flex justify-center items-center ">
                                <img className="w-[100%] h-[100%] rounded-[50%] " src={image1} alt="" />
                            </div>
                        </div>
                        <div className="border-0 lg:h-[auto] h-[50%] md:mb-8 mb-0 md:mr-0 mr-0 md:space-y-0 space-y-1 md:mt-0 mt-0 ">
                            <h1 className="font-bold text-2xl text-[#192024] ">{count.toLocaleString()} +</h1>
                            <h2 className="text-[#192024] ">Recherche cette semaine</h2>
                        </div>
                    </div>
                    <div className="border-1 w-[450px] border-[#c7d5dd] flex flex-col justify-center items-start rounded-[30px] xl:p-6 pl-5 pr-5 p-0 xl:h-[auto] h-[230px] ">
                        <div className="border-0 lg:h-[50px] h-[30%] md:w-[auto] w-[230px] flex justify-strat items-center md:mb-6 mb-0 md:mt-3 mt-2 ">
                            <i className="las la-star text-[25px] text-[#ffa30f] "></i>
                            <i className="las la-star text-[25px] text-[#ffa30f] "></i>
                            <i className="las la-star text-[25px] text-[#ffa30f] "></i>
                            <i className="las la-star text-[25px] text-[#ffa30f] "></i>
                            <i className="las la-star text-[25px] text-[#ffa30f] "></i>
                        </div>
                        <div className="border-0 lg:h-[auto] h-[50%] lg:mb-8 mb-0 lg:mr-0 mr-0 lg:space-y-0 space-y-1 lg:mt-0 mt-0 ">
                            <h1 className="font-bold text-2xl text-[#192024] ">Économisez en comparant</h1>
                            <h2 className="text-[#192024] ">Plus d'offres. Plus de sites. Une seule recherche</h2>
                        </div>
                    </div>
                </div>
            </section>

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
                    <h1 className="text-[32px] font-bold text-[#192024] ">Trouvez un endroit où dormir dans l’une de ces destinations</h1>
                    <h2 className="text-[20px] text-[#192024] font-medium mb-9 ">Trouvez un hébergement</h2>
                    <p className="text-[16px] ">Et si vous commenciez vos vacances en économisant sur la réservation de votre hébergement avec KAYAK ? KAYAK est un moteur de recherche dédié aux voyages qui vous aidera notamment à trouver un hébergement au meilleur prix, qu’il s’agisse d’un hôtel, d’une location de vacances ou de tout autre établissement.</p>
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
                <p>Recherchez des locations de voitures pas chères sur KAYAK, le comparateur de location de véhicule qui parcourt de nombreux sites de voyage. Trouvez la voiture de location parfaite dans l’une de nos destinations populaires à travers le monde. Avec KAYAK, louer une voiture pas chère devient un jeu d’enfant.</p>
                <p className="mt-3 ">KAYAK vous aide aussi à trouver les hôtels ainsi que les offres de train et bus adaptés à vos besoins.</p>
            </section>
            <hr className="border-[#7772724b] mt-3 w-[100%] mb-3 " />
        </secction>
        

    )
}