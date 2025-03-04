import "./css/style.css";

const Loader = () => {
    return (

        <section className="loader-avatar border-0 border-[#000000] mt-[90px] min-h-[600px] lg:w-[100%] md:w-[100%] sm:w-full bg-[#f0f3f5] flex items-center overflow-hidden rounded-[30px] ">
                <div className="border-0 p-5 xl:w-[75%] w-[100%] h-[100%] flex flex-col lg:justify-start justify-center lg:items-start items-center ">
                    <h1 className="border-0 md:ml-5 ml-0 text-[45px] text-[#192024] font-bold md:block hidden "></h1>
                    <div className="border-0 md:ml-5 ml-0 md:w-[500px] w-[100%] md:mt-5 mb-5 flex md:justify-center justify-between items-center md:text-[12px] text-[13px] ">
                        <span className="border-0 md:w-[120px] bg-[#f0f3f5] w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 w-[50px] h-[50px] bg-[#ffffff] p-2 text-[#fff] flex justify-center items-center rounded-[10px]  shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition duration-150 "></div>
                        </span>
                        <span className="border-0 md:w-[120px] bg-[#f0f3f5] w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 w-[50px] h-[50px] bg-[#ffffff] p-2 text-[#252323] flex justify-center items-center rounded-[10px]  shadow-[0px_4px_15px_rgba(0,0,0,0.2)] transition duration-150 "></div>
                        </span>
                        <span  className="border-0 md:w-[120px bg-[#f0f3f5]] w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 w-[50px] h-[50px] bg-[#ffffff] p-2 text-[#252323] flex justify-center items-center rounded-[10px]  shadow-[0px_4px_15px_rgba(0,0,0,0.2)] transition duration-150 "></div>
                        </span>
                        <span className="border-0 md:w-[120px] bg-[#f0f3f5] w-[120px] flex flex-col justify-center items-center space-y-2 ">
                            <div className="border-0 w-[50px] h-[50px] bg-[#ffffff] p-2 text-[#252323] flex justify-center items-center rounded-[10px]  shadow-[0px_4px_15px_rgba(0,0,0,0.2)] transition duration-150 "></div>
                        </span>
                    </div>
                    <div className="border-0 lg:p-2 lg:ml-5 ml-0 w-[100%] flex flex-col md:justify-start items-center justify-center ">
                        <div className="border-0 lg:flex hidden justify-start items-center space-x-4 w-[100%] mb-3 ">
                            <div className="space-x-2 "></div>
                            <div className="space-x-2 "></div>
                        </div>
                        <div>
                            <div className="border-0 border-[#0e0] w-[900px] h-[60px] bg-[#fff] lg:flex hidden justify-between items-center shadow-[0px_4px_15px_rgba(0,0,0,0.2)] rounded-[10px] ">
                                <div className="border-0 border-red-500 text-[#000] w-[60%] relative flex items-center justify-between ">
                                    <div className="border-0 p-4 mr-3 w-[50%] flex justify-start items-center rounded-[10px] space-x-2 transition duration-200  ">
                                        <div className="border-0 w-[50%] bg-[#f1f1f1] flex justify-center items-center rounded-[5px] p-[0px_0px_0px_5px] space-x-2 ">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="border-0 p-4 w-[50%] flex justify-start items-center rounded-[10px] transition duration-200  "></div>
                                    <div className="border-0 p-1 w-[30px] absolute left-[50%] translate-x-[-50%] flex justify-center items-center rounded-[5px] transition duration-200  "></div>
                                </div>
                                <div className="border-0 w-[40%] flex justify-between items-center ">
                                    <div className="border-0 p-4 flex justify-center items-center rounded-[10px] transition duration-200  ">
                                        <span></span>
                                    </div>
                                    <div className="border-0 p-4 flex justify-center items-center rounded-[10px] transition duration-200  ">
                                        <span></span>
                                    </div>
                                    <div className="border-0 p-1 pl-3 flex justify-center items-center rounded-[10px] space-x-3 transition duration-200  ">
                                        <span></span>
                                        <div className="p-4 text-[#fff] bg-[#f0f3f5] flex justify-center items-center  rounded-[10px] :bg-[#ff6b0f] "></div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>  
                </div>
            </section>

    )
}

export default Loader;