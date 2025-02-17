import image from '../components/images/image9.jpg'
import { Link } from 'react-router-dom'

export default function () {
    
    return (
        <section className="w-full h-[100vh] flex justify-center items-center">
            <div className="bg-[#0cf] w-[70%] h-[100vh] bg-no-repeat md:block hidden">
                <img className='w-full h-full object-cover object-center' src={image}  alt="" />
            </div>
            <div className="w-full h-[100vh] bg-[#fff] flex flex-col justify-center items-center ">
                <div className='flex flex-col justify-center items-center md:w-[400px] '>
                    <h1 className='text-3xl font-bold uppercase '>Welcome Onboard</h1>
                    <div className='border-2 mt-[20px] bg-[#1565d8] hover:bg-[#1566d8b9] transition-all duration-300 text-[#fff] w-[100%] p-2 flex justify-center items-center rounded-[6px] cursor-pointer '>
                        <span><i class="lab la-google"></i></span>
                        <Link className='ml-[10px] '>Login with google</Link>
                    </div>
                    <div className='flex justify-between items-center mt-[20px] mb-[20px] w-full '>
                        <div className='w-[100px] h-[2px] bg-[#0000006c] '></div>
                        <Link className='text-[14px] text-[#1565d8] '>or, login up with your E-Mail</Link>
                        <div className='w-[100px] h-[2px] bg-[#0000006c] '></div>
                    </div>
                    <form className='flex flex-col p-2 w-full ' action="" method="post">
                        <div className='flex flex-col justify-center items-start p-2 '>
                            <label className='font-bold ' htmlFor="name">Your Email*</label>
                            <input className='border-1 border-[#00000073] w-full h-[45px] rounded-[5px] mt-[10px] mb-[10px] pl-[10px] ' type="text" placeholder='Enter your E-Mail address' />
                        </div>
                        <div className='flex flex-col justify-center items-start p-2 '>
                            <label className='font-bold ' htmlFor="name">Your Password*</label>
                            <input className='border-1 border-[#00000073] w-full h-[45px] rounded-[5px] mt-[10px] mb-[10px] pl-[10px] ' type="password" placeholder='Enter your Password' />
                        </div>
                        <div className='flex justify-center items-center font-semibold w-full '>
                            <Link className='ml-3 text-[#1565d8] ' htmlFor="name">Forgot password ?</Link>
                        </div>
                        <Link className='border-2 mt-[20px] bg-[#1565d8] hover:bg-[#1566d8b9] transition-all duration-300 text-[#fff] w-[100%] p-2 flex justify-center items-center rounded-[6px] cursor-pointer '>Sign In</Link>
                        <div className='flex justify-start items-center mt-5 '>
                            <span>Don't have an account ?</span>
                            <Link to="/accounts" className='text-[#1565d8] ml-[5px] '>Sign up here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )

} 