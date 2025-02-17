import { Link } from "react-router-dom"

export default function () {
    return (
            <section className="w-[100%] min-h-[100vh] bg-[url(../src/wednesday/components/images/image10.jpg)] bg-center bg-cover bg-no-repeat">
                <div className="clip-path md:w-[80%] w-[100%] min-h-[100vh] bg-[#fff] text-[#000] flex md:justify-start justify-center items-center sm:clip-path-none " >
                    <div className="md:mt-[50px] mt-10 mb-10 md:ml-[30%] md:translate-x-[-30%]  md:w-[450px] w-[80%] ">
                        <h1 className="text-4xl font-bold mb-[20px] ">Prêt(e) pour l'enregistrement ?</h1>
                        <span className="text-[16px] font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil architecto, est quibusdam officia consectetur libero consequatur fuga totam aperiam.</span>
                        <div className="border-2 md:p-5 p-5 md:font-bold border-[#00000042] mt-[20px] w-full h-[30px] flex justify-between items-center rounded-[5px] cursor-pointer ">
                            <i class="las la-user md:la-2x la-1x md:block hidden"></i>
                            <p className="">M'enregstrez à partir de mon compte</p>
                            <i class="las la-angle-right md:la-2x la-1x"></i>
                        </div>
                        <div className="mt-5 mb-5 flex flex-col justify-center items-start ">
                            <span>Vous n'avez pas de compte ? Inscrivez-vous gratuitement pour bénéficier de nombreux avantages.</span>
                            <Link className="text-[#1565d8] ">
                                <span>M'inscrire</span>
                                <i class="las la-angle-right la-1x"></i>
                            </Link>
                        </div>
                        <form className="border-0 p-[20px] shadow-[2px_2px_5px_#000] mb-5 flex flex-col justify-center items-center rounded-[10px] " action="">
                            <h1 className="text-2xl font-bold mb-[20px] ">M'enregistrz avec ma référence de reservation</h1>
                            <div className="w-full ">
                                <label htmlFor="">Numéro de billet ou référence de reservation</label>
                                <input className='border-1 border-[#00000073] w-full h-[45px] rounded-[5px] mt-[10px] mb-[10px] pl-[10px] ' type="text" />
                            </div>
                            <div className="mt-5 w-full ">
                                <label htmlFor="">Noms complet</label>
                                <input className='border-1 border-[#00000073] w-full h-[45px] rounded-[5px] mt-[10px] mb-[10px] pl-[10px] ' type="text" />
                            </div>
                            <div className="w-full mt-5 flex flex-col ">
                                <label htmlFor="">Numéro de vol</label>
                                <span>Ex: AF1234</span>
                                <input className='border-1 border-[#00000073] w-full h-[45px] rounded-[5px] mt-[10px] mb-[10px] pl-[10px] ' type="text" />
                            </div>
                            <input className="border-2 mt-[20px] bg-[#1565d8] hover:bg-[#1566d8b9] transition-all duration-300 text-[#fff] w-[100%] p-2 flex justify-center items-center rounded-[6px] cursor-pointer " type="submit" value={"S'enrégistrer"} />
                        </form>
                        <div className="flex flex-col justify-center items-start mb-10 w-full">
                            <Link className="text-[#1565d8] mb-2 ">
                                <span>Tout savoir sur l'enrégistrement </span>
                                <i className="las la-angle-right la-1x"></i>
                            </Link>
                            <Link className="text-[#1565d8] ">
                                <span>Tout savoir sur l'enrégistrement </span>
                                <i className="las la-angle-right la-1x"></i>
                            </Link>
                        </div>
                        <ul className="flex text-[14px] ">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse quaerat alias et facilis reprehenderit nulla hic doloribus ad, saepe maxime, culpa dolores sequi? Nisi necessitatibus enim quibusdam iusto possimus.</li>
                        </ul>
                    </div>
                </div> 
            </section>
    )
}