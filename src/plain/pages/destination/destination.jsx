

export default function () {

    return(

        <>
            <section className="border-0 lg:hidden p-1 w-[100%] ">
                <div className="border-0 pt-3 rounded-[10px] shadow-[0px_4px_15px_rgba(0,0,0,0.2)] ">
                    <div className="p-5 border-b-1 border-[#d1c5c5] w-[100%] pt-1 flex justify-start items-center md:text-[18px] text-[14px] ">
                        <h1 className="border-b-1 md:ml-5 h-[30px] cursor-pointer">Aller et retour</h1>
                        <h1 className="text-[#757171] ml-[6px] hover:border-b-1 h-[30px] hover:text-[#000] transition duration-200 cursor-pointer">Aller simple</h1>
                        <h1 className="text-[#757171] ml-[6px] hover:border-b-1 h-[30px] hover:text-[#000] transition duration-200 cursor-pointer">Multidestination</h1>
                    </div>
                    <div className="md:border-b-1 border-0 border-[#d1c5c5] text-[#000] w-[100%] relative flex md:flex-row flex-col items-center justify-between ">
                        <div className="md:border-b-0 border-b-1 border-[#d1c5c5] md:w-[50%] w-[100%] ">
                            <div className="border-0 p-4 w-[100%] flex justify-start items-center rounded-[10px] space-x-2 transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                <div className="border-1 w-[50%] bg-[#f1f1f1] flex justify-center items-center rounded-[5px] p-[0px_0px_0px_5px] space-x-2 ">
                                    <span>Douala(DLA)</span>
                                    <span className="border-0 p-[2px] flex justify-center items-center rounded-[5px] transition duration-150 hover:bg-[#00000041] ">
                                        <i className="las la-times la-1x"></i>
                                    </span>
                                </div>
                                <input className="md:w-[50%] w-[100%] outline-none " type="text" placeholder="De..." />
                            </div>
                        </div>
                        <div className="md:border-b-0 border-b-1 border-[#d1c5c5] md:w-[50%] w-[100%] ">
                            <div className="border-0 p-4 w-[100%] flex justify-start items-center rounded-[10px] transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                <input className="w-[100%] outline-none " type="text" placeholder="À..." />
                            </div>
                        </div>
                        <div className="md:border-0 border-1 border-[#0000006b] p-1 w-[40px] h-[40px] absolute md:left-[50%] md:translate-x-[-50%] md:rotate-0 rotate-[90deg] translate-y-[-50%] top-[50%]  right-[15px] flex justify-center items-center rounded-[5px] md:bg-transparent bg-[#fff] transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                            <i className="las la-exchange-alt"></i>
                        </div>
                    </div>
                    <div className="border-b-1 border-[#d1c5c5] w-[100%] flex md:flex-row flex-col justify-between items-center ">
                        <div className="border-b-1 border-[#d1c5c5] md:w-[50%] w-[100%] ">
                            <div className="border-0 p-4 w-[100%] flex justify-start items-center rounded-[10px] transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                <span>Aller</span>
                            </div>
                        </div>
                        <div className="border-b-1 border-[#d1c5c5] md:w-[50%] w-[100%] ">
                            <div className="border-0 p-4 w-[100%] flex justify-start items-center rounded-[10px] transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                                <span>Retour</span>
                            </div>
                        </div>
                    </div>
                    <div className="border-0 p-4 w-[100%] flex justify-start items-center rounded-[10px] transition duration-200 hover:bg-[#d9e2e8] cursor-pointer ">
                        <span>1 adulte, Economique, aucun bagage</span>
                    </div>
                    <div className="border-0 p-3 flex justify-center items-center rounded-[10px] space-x-3 cursor-pointer ">
                        <div className="p-4 text-[#fff] w-[100%] h-[45px] bg-[#ff6b0fea] flex justify-center items-center cursor-pointer rounded-[10px] hover:bg-[#ff6b0f] ">
                            <i className="las la-search la-1x"></i>
                            <span>Recherche</span>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}