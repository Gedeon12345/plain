export default function () {
    return (
        <section className="bg-(--main-color) w-[100%] text-[#fff] md:p-5">
            <div className="flex md:flex-row flex-col md:justify-between justify-center md:items-start items-start w-full">
                <div className="md:ml-0 ml-[30px] flex flex-col justify-between items-start md:w-[30%] w-[90%] mb-5">
                    <h3 className="text-2xl">GEDEONS' store</h3>
                    <p className="text-[16px] mb-5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto.</p>
                    <div className="flex md:items-center justify-between items-start md:w-full w-[50%] md:text-[30px]">
                        <div className="cursor-pointer bg-[#fff] w-[40px] h-[40px] text-(--main-color) rounded-[50%] flex justify-center items-center hover:text-[#fff] hover:bg-transparent transition duration-300">
                            <i class="lab la-facebook-f"></i>
                        </div>
                        <div className="cursor-pointer bg-[#fff] w-[40px] h-[40px] text-(--main-color) rounded-[50%] flex justify-center items-center hover:text-[#fff] hover:bg-transparent transition duration-300">
                        <i class="lab la-instagram"></i>
                        </div>
                        <div className="cursor-pointer bg-[#fff] w-[40px] h-[40px] text-(--main-color) rounded-[50%] flex justify-center items-center hover:text-[#fff] hover:bg-transparent transition duration-300">
                            <i class="lab la-twitter"></i>
                        </div>
                        <div className="cursor-pointer bg-[#fff] w-[40px] h-[40px] text-(--main-color) rounded-[50%] flex justify-center items-center hover:text-[#fff] hover:bg-transparent transition duration-300">
                            <i class="lab la-apple"></i>
                        </div>
                    </div>
                </div>
                <div className="md:ml-0 ml-[30px] md:w-[30%] w-[100%] flex flex-col">
                    <h3>Usefull Links</h3>
                    <hr className="mb-5 mt-5 w-[90%]" />
                    <a className="cursor-pointer transition duration-300 hover:text-[#ffffffa4] italic" href="">Home</a>
                    <a className="cursor-pointer transition duration-300 hover:text-[#ffffffa4] italic" href="">About</a>
                    <a className="cursor-pointer transition duration-300 hover:text-[#ffffffa4] italic" href="">Services</a>
                    <a className="cursor-pointer transition duration-300 hover:text-[#ffffffa4] italic" href="">Articles</a>
                    <a className="cursor-pointer transition duration-300 hover:text-[#ffffffa4] italic" href="">Contact</a>
                    <a className="cursor-pointer transition duration-300 hover:text-[#ffffffa4] italic" href="">Testimonies</a>
                    <a className="cursor-pointer transition duration-300 hover:text-[#ffffffa4] italic" href="">Blog</a>
                </div>
                <div className="md:ml-0 ml-[30px] md:w-[30%] w-[100%] mb-5">
                    <h3>Contact Us</h3>
                    <hr className="mb-5 mt-5 w-[90%]" />
                    <div className="flex items-center">
                        <i class="las la-phone"></i>
                        <p className="ml-2">693427529</p>
                    </div>
                    <div className="flex items-center">
                        <i class="las la-envelope"></i>
                        <p className="ml-2">fobadeffo@gmail.com</p>
                    </div>
                    <div className="flex items-center">
                        <i class="las la-map-marker"></i>
                        <p className="ml-2">Cameroun Douala-Deido</p>
                    </div>
                    <div className="flex items-center">
                        <i class="las la-clock"></i>
                        <p className="ml-2">8am - 17pm</p>
                    </div> 
                </div>
            </div>
            <hr />
            <p className="mt-2">© 2025 GEDEONS' store all rights reserved</p>
        </section>
    )
}