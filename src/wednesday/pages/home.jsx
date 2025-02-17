import { useState, useEffect } from 'react';
import Image from '../components/images/image1.jpg'
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

export default function () {

    const [count, setCount] = useState(0);
    const target = 20000000; // Target number
    const duration = 3000; // Animation duration in ms (3 seconds)
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
        }, 16); // Runs every ~16ms (approx. 60fps)

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        flatpickr(".datepicker", {
            dateFormat: "Y-m-d"
        });
    }, []);

//   return (
//     <div className="text-[#000] text-4xl font-bold">
//       {count.toLocaleString()} +
//       <p className="text-lg">Number of users</p>
//     </div>
//   );

    return (
        <>
            <section className="main w-[100%] max-w-full h-[100vh] relative">
                <div className='h-full w-full bg-[#00000054]'></div>
                <div className='absolute top-[50%] translate-y-[-50%] md:left-[50px] left-[50%] md:translate-x-0 translate-x-[-50%] md:w-[45%] w-[100%] text-[#fff]'>
                    <h1 className='text-4xl'>Explore Gedeons' store and Book a reservation card easily and rapidely</h1>
                    <div className='w-[150px] h-[5px] mb-[30px] mt-[50px] border-2 border-[#fff] bg-[#fff]'></div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, doloribus!</p>
                    <button className='cursor-pointer mt-5 w-[200px] h-[40px] text-[#fff] bg-[#f35004] rounded-[5px] font-semibold hover:bg-transparent transition duration-300 hover:border-2 border-[#fff] hover:text-[#fff]'>Explore Here</button>
                </div>
            </section>
            <section className='md:p-[50px] p-[20px] bg-[url(../src/wednesday/components/images/image1.jpg)] bg-fixed bg-center bg-no-repeat mt-[50px] w-full h-[300px] flex flex-col justify-center items-center'>
                <div className='bg-[#ffffff] md:w-[95%] w-[100%] rounded-[10px] md:p-[20px] p-[10px] flex flex-col justify-center items-center'>
                    <div className='flex md:w-[100%] w-[100%'>
                        <span className='group cursor-pointer flex justify-center items-center md:mr-10 mr-[30px] relative transition duration-300'>
                            <div className='group-hover absolute top-[25px] bg-[#fff] w-[150px] p-[0px] rounded-[5px] hidden flex-col shadow-[2px_2px_10px_#000] z-10'>
                                <p className='mb-2 w-full text-center p-2 hover:bg-[#00000025] cursor-pointer'>Aller-Retour</p>
                                <p className='w-full text-center p-2 hover:bg-[#00000025] cursor-pointer'>Aller Simple</p>
                            </div>
                            <p className=''>Allez et Retour</p>
                            <i class="las la-angle-down"></i>
                        </span>
                        <span className='md:flex hidden justify-center items-center md:mr-10'><p>1 Passager</p><i class="las la-angle-down"></i></span>
                        <span className='flex justify-center items-center md:mr-10'><p>Economique</p><i class="las la-angle-down"></i></span>
                    </div>
                    <div className='w-[100%] mt-5 grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 grid-rows-4 gap-2'>
                        <div className='w-[100%] h-[40px] md:col-span-1 col-span-2 relative bg-[#00000017] flex justify-center items-center border-0 rounded-[5px]'>
                            <i class="las la-clock la-2x"></i>
                            <input className='w-full pl-[20px]' type="text" placeholder='Depuis ?' />
                        </div>
                        <div className='w-[100%] h-[40px] md:col-span-1 col-span-2 relative bg-[#00000017] flex justify-center items-center border-0 rounded-[5px]'>
                            <i class="las la-map-marker-alt la-2x"></i>
                            <input className='w-full pl-[20px]' type="text" placeholder='Vers ?' />
                        </div>
                        <div className='w-[100%] h-[40px] md:col-span-1 col-span-2 relative bg-[#00000017] flex justify-center items-center border-0 rounded-[5px]'>
                            <i class="las la-calendar la-2x"></i> 
                            <input className='datepicker w-full pl-[20px]' type="text" placeholder='Depart' />
                        </div>
                        <div className='w-[100%] h-[40px] md:col-span-1 col-span-2 relative bg-[#00000017] flex justify-center items-center border-0 rounded-[5px]'>
                            <i class="las la-calendar la-2x"></i> 
                            <input className='datepicker w-full pl-[20px]' type="text" placeholder='Arriver' />
                        </div>
                        <div className='md:hidden grid col-span-2 h-[40px] w-100% bg-[#00000017] rounded-[5px]'>
                            <div className='w-full h-full flex items-center'>
                                <i class="las la-user la-2x"></i>
                                <p>1 Passager</p>
                            </div> 
                        </div>
                        <button className='col-span-2 md:w-[300px] w-[200px] ml-[50%] transform translate-x-[-50%] cursor-pointer p-[5px_10px] m-[20px_0px] rounded-[5px] text-[#fff] bg-[#f35004] border-[#f35004] hover:bg-transparent hover:text-[#000] hover:border-2 transition duration-300'>COMPAREZ</button>
                    </div>
                </div>
            </section>
            <section className='flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-start w-[100%] '>
                    <div className='mt-5 md:w-[100%] w-full flex  flex-col justify-center items-center'>
                        <h1 className='text-2xl font-bold mb-5 text-center'>Nos dernière offres de vols par chers !</h1>
                        <p className='text-center text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque architecto suscipit eum animi rerum. Totam maiores eum eligendi. Quod accusamus enim, reprehenderit nisi, vel autem unde, temporibus culpa consectetur veritatis quibusdam ad. Sint, laudantium sequi molestiae error deleniti praesentium quisquam laboriosam a repellendus ratione excepturi commodi earum possimus cupiditate eveniet maiores</p>
                        <h2 className='md:m-[50px_0px_20px_0px] m-[20px]'>Vols par chers vers le Cameroun</h2>
                        <div className='flex md:flex-row flex-col justify-between items-center md:w-[450px]'>
                            <label htmlFor="">Selectionez votre ville de départ</label>
                            <select className='bg-[#00000017] outline-0 rounded-[5px] p-2 cursor-pointer' name="" id="">
                                <option value="">Douala, Cameroun</option>
                                <option value="">Yaounde, Cameroun</option>
                                <option value="">Bale, Suisse</option>
                                <option value="">Paris, France</option>
                                <option value="">Bruxelle, Belgique</option>
                                <option value="">Baffoussam, Cameroun</option>
                                <option value="">Moscou, Russie</option>
                                <option value="">Washington, USA</option>
                            </select>
                        </div>
                    </div>
                    <div className='md:w-[100%] w-full p-5 grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 grid-rows-4 gap-4'>
                        <div className='bg-[url(../src/wednesday/components/images/ville1.jpg)] bg-cover bg-center bg-no-repeat md:h-[300px] h-[200px] rounded-[10px] relative'>
                            <div className='absolute w-full h-full bg-[#0000006b] rounded-[10px] '></div>
                            <div className='p-2 text-[#fff] absolute bottom-0 left-2 flex flex-col items-start justify-center font-bold'>
                                <h3>Paris</h3>
                                <span>11 Mai - 23 Mai - 12 jours</span>
                                <span className='p-1 bg-[#fff] rounded-[5px] text-[#006eff] '>180000 FCFA</span>
                            </div>
                        </div>
                        <div className='bg-[url(../src/wednesday/components/images/yaounde.jpg)] bg-cover bg-center bg-no-repeat md:h-[300px] h-[200px] rounded-[10px] relative'>
                            <div className='absolute w-full h-full bg-[#0000006b] rounded-[10px] '></div>
                            <div className='p-2 text-[#fff] absolute bottom-0 left-2 flex flex-col items-start justify-center font-bold'>
                                <h3>Yaounde</h3>
                                <span>11 Mai - 23 Mai - 12 jours</span>
                                <span className='p-1 bg-[#fff] rounded-[5px] text-[#006eff] '>200000 FCFA</span>
                            </div> 
                        </div>
                        <div className='bg-[url(../src/wednesday/components/images/ville4.jpg)] bg-cover bg-center bg-no-repeat md:h-[300px] h-[200px] rounded-[10px] relative'>
                            <div className='absolute w-full h-full bg-[#0000006b] rounded-[10px] '></div>
                            <div className='p-2 text-[#fff] absolute bottom-0 left-2 flex flex-col items-start justify-center font-bold'>
                                <h3>Paris</h3>
                                <span>11 Mai - 23 Mai - 12 jours</span>
                                <span className='p-1 bg-[#fff] rounded-[5px] text-[#006eff] '>180000 FCFA</span>
                            </div>
                        </div>
                        <div className='bg-[url(../src/wednesday/components/images/ville3.jpg)] bg-cover bg-center bg-no-repeat md:h-[300px] h-[200px] rounded-[10px] relative'>
                            <div className='absolute w-full h-full bg-[#0000006b] rounded-[10px] '></div>
                            <div className='p-2 text-[#fff] absolute bottom-0 left-2 flex flex-col items-start justify-center font-bold'>
                                <h3>Douala</h3>
                                <span>11 Mai - 23 Mai - 12 jours</span>
                                <span className='p-1 bg-[#fff] rounded-[5px] text-[#006eff] '>180000 FCFA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#1b262c00] h-[110vh] flex flex-col items-center justify-center text-[#000] w-[100%]">
                <h1 className='text-4xl uppercase md:mt-0 mt-20'>Achievments</h1>
                <div className='w-2xs h-[5px] mb-5 mt-3 border-2 bg-[#fff]'></div>
                <div className=" flex md:flex-row flex-col justify-center items-center w-[100%]">
                    <div className='md:w-[45%] w-[100%] flex flex-col items-center justify-center border-2'>
                        <p className='text-[14px] md:mb-10 mb-[50px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, atque. Dolorum magni obcaecati quas, similique officiis blanditiis quos voluptatem accusantium iste sequi ut neque eveniet aliquid est facilis, quisquam amet sint aperiam. Facilis tempore voluptas magnam nulla maxime laudantium nobis natus itaque voluptatem, nisi corrupti culpa error provident enim ratione?</p>
                        <img className='object-center object-cover rounded-[10px]' src={Image} alt="image" />
                    </div>
                    <div className='flex flex-col items-center justify-center md:w-[45%] w-[70%] md:mt-0 mt-[50px] border-2'>
                        <span className='text-4xl md:pb-0 pb-5'>{count.toLocaleString()} +</span>
                        <span>Amount collected</span>
                        <button className='cursor-pointer w-[300px] h-[30px] border-2'>Offer a gift now</button>
                    </div>
                </div>
            </section>
        </>
    )
} 