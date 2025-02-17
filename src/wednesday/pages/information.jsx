import image1 from '../components/images/image11.jpg'
import image2 from '../components/images/image12.jpg'
import image3 from '../components/images/image13.jpg'
import image4 from '../components/images/image14.jpg'

export default function () {

    return (
        <section className="min-h-[100vh] w-[100%] p-10 ">
            <div className='flex flex-col justify-center items-start w-full min-h-[100vh] '>
                <h1 className='md:text-4xl text-2xl font-semibold mb-5 '>Voyager avec GEDEON travel : Information et conseil pratiques</h1>
                <span className='font-medium mb-5 '>À la une</span>
                <div className='w-[100%] grid md:grid-cols-4 grid-cols-1 gap-3 p-3 '>
                    <div className='md:w-[300px] md:min-h-[300px] flex flex-col justify-center items-start rounded-[10px] shadow-[2px_2px_5px_#000] '>
                        <div className='w-[100%] h-[200px] overflow-hidden '>
                            <img className='h-[200px] w-[100%] object-top object-cover scale-100 hover:scale-120 transition duration-300 ' src={image1} alt="" />
                        </div>
                        <h2 className='md:m-[50px_20px] text-[18px] font-semibold '>Gagnez du temps à l'aéroport en période d'affluence</h2>
                    </div>
                    <div className='md:w-[300px] md:min-h-[300px] flex flex-col justify-center items-start rounded-[10px] shadow-[2px_2px_5px_#000] '>
                        <div className='w-[100%] h-[200px] overflow-hidden '>
                            <img className='h-[200px] w-[100%] object-top object-cover scale-100 hover:scale-120 transition duration-300 ' src={image2} alt="" />
                        </div>
                        <h2 className='md:m-[50px_20px] text-[18px] font-semibold '>Horraire et statuts des vols</h2>
                    </div>
                    <div className='md:w-[300px] md:min-h-[300px] flex flex-col justify-center items-start rounded-[10px] shadow-[2px_2px_5px_#000] '>
                        <div className='w-[100%] h-[200px] overflow-hidden '>
                            <img className='h-[200px] w-[100%] object-top object-cover scale-100 hover:scale-120 transition duration-300 ' src={image3} alt="" />
                        </div>
                        <h2 className='md:m-[50px_20px] text-[18px] font-semibold '>Profitez d'un service d'exception a Baleng avec les Nyang-Nyang</h2>
                    </div>
                    <div className='md:w-[300px] md:min-h-[300px] flex flex-col justify-center items-start rounded-[10px] shadow-[2px_2px_5px_#000] '>
                        <div className='w-[100%] h-[200px] overflow-hidden '>
                            <img className='h-[200px] w-[100%] object-top object-cover scale-100 hover:scale-120 transition duration-300 ' src={image4} alt="" />
                        </div>
                        <h2 className='md:m-[50px_20px] text-[18px] font-semibold '>Gagnez du temps à l'aéroport en période d'affluence</h2>
                    </div>
                    <div className='md:w-[300px] md:min-h-[300px] flex flex-col justify-center items-start rounded-[10px] shadow-[2px_2px_5px_#000] '>
                        <div className='w-[100%] h-[200px] overflow-hidden '>
                            <img className='h-[200px] w-[100%] object-top object-cover scale-100 hover:scale-120 transition duration-300 ' src={image3} alt="" />
                        </div>
                        <h2 className='md:m-[50px_20px] text-[18px] font-semibold '>Gagnez du temps à l'aéroport en période d'affluence</h2>
                    </div>
                    <div className='md:w-[300px] md:min-h-[300px] flex flex-col justify-center items-start rounded-[10px] shadow-[2px_2px_5px_#000] '>
                        <div className='w-[100%] h-[200px] overflow-hidden '>
                            <img className='h-[200px] w-[100%] object-top object-cover scale-100 hover:scale-120 transition duration-300 ' src={image1} alt="" />
                        </div>
                        <h2 className='md:m-[50px_20px] text-[18px] font-semibold '>Gagnez du temps à l'aéroport en période d'affluence</h2>
                    </div>
                </div>
            </div>
        </section>
    )

}