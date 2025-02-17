import image from '../components/images/image8.jpg'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <section className="w-full flex justify-center items-center">
            <div className="bg-[#0cf] w-[70%] h-[115vh] bg-no-repeat md:block hidden">
                <img className='w-full h-full object-cover object-center' src={image} alt="" />
            </div>
            <div className="w-full mt-10 mb-10 h-[100%] bg-[#fff] flex flex-col justify-center items-center ">
                <div className='flex flex-col justify-center items-center md:w-[400px] '>
                    <h1 className='text-3xl font-bold uppercase '>Welcome Onboard</h1>
                    <div className='border-2 mt-[20px] bg-[#1565d8] hover:bg-[#1566d8b9] transition-all duration-300 text-[#fff] w-[100%] p-2 flex justify-center items-center rounded-[6px] cursor-pointer '>
                        <span><i class="lab la-google"></i></span>
                        <span className='ml-[10px] '>Sing up with google</span>
                    </div>
                    <div className='flex justify-between items-center mt-[20px] mb-[20px] w-full '>
                        <div className='w-[100px] h-[2px] bg-[#0000006c] '></div>
                        <span className='text-[14px] '>or, sign up with your E-Mail</span>
                        <div className='w-[100px] h-[2px] bg-[#0000006c] '></div>
                    </div>
                    <form className='flex flex-col p-2 w-full ' action="" method="post">
                        <div className='flex flex-col justify-center items-start p-2 '>
                            <label className='font-bold ' htmlFor="name">Your Name*</label>
                            <input className='border-1 border-[#00000073] w-full h-[45px] rounded-[5px] mt-[10px] mb-[10px] pl-[10px] ' type="text" placeholder='Enter your name' />
                        </div>
                        <div className='flex flex-col justify-center items-start p-2 '>
                            <label className='font-bold ' htmlFor="name">Your Email*</label>
                            <input className='border-1 border-[#00000073] w-full h-[45px] rounded-[5px] mt-[10px] mb-[10px] pl-[10px] ' type="text" placeholder='Enter your E-Mail address' />
                        </div>
                        <div className='flex flex-col justify-center items-start p-2 '>
                            <label className='font-bold ' htmlFor="name">Password*</label>
                            <input className='border-1 border-[#00000073] w-full h-[45px] rounded-[5px] mt-[10px] mb-[10px] pl-[10px] ' type="password" placeholder='Enter a Password' />
                        </div>
                        <div className='flex flex-col justify-center items-start p-2 '>
                            <label className='font-bold ' htmlFor="name">Confirm password*</label>
                            <input className='border-1 border-[#00000073] w-full h-[45px] rounded-[5px] mt-[10px] mb-[10px] pl-[10px] ' type="password" placeholder='Confirm your Password' />
                        </div>
                        <div className='flex justify-start items-center font-semibold '>
                            <input type="checkbox" />
                            <label className='ml-3' htmlFor="name">Aggree to terms & conditions</label>
                        </div>
                        <Link className='border-2 mt-[20px] bg-[#1565d8] hover:bg-[#1566d8b9] transition-all duration-300 text-[#fff] w-[100%] p-2 flex justify-center items-center rounded-[6px] cursor-pointer '>Sign Up</Link>
                        <div className='flex justify-start items-center mt-5 '>
                            <span>Already have an account ?</span>
                            <Link to="/login" className='text-[#1565d8] ml-[5px] '>Sign in here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}