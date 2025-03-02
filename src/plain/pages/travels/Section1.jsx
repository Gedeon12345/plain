import { useState } from "react"
import { Link } from "react-router-dom"
import destinations from "./destinations/destination"

export default function () {


    const [openDropDown, setOpenDropDown] = useState(null)


    const toggleDropDown = (index) => {
        setOpenDropDown(openDropDown === index ? null : index)
    }

    return (
        <>
            <div>
                {destinations.map((destination, index) => (
                    <div key={index} className="border-0 border-amber-900 pb-1">
                        <div className="border-0 border-green-700 h-[auto] p-1 w-[100%] ">
                            <div className="border-0 flex items-center justify-between font-semibold ">
                                <Link className="hover:underline ">{destination.city }</Link>
                                <div onClick={() => toggleDropDown(index)} className={`border-0 transition duration-300 ${openDropDown === index ? "rotate-[180deg] " : ""} `}>
                                    <i className={`las la-angle-down `}></i>
                                </div>
                            </div>
                            {openDropDown === index && (
                                <div className="border-0 w-[100%] h-[0%] mt-2 text-[#777272] text-[12px] transition duration-[1s] ">
                                    <div className="transition duration-300 space-y-1 p-2 " >
                                        <div className=" w-[100%] flex justify-between items-start cursor-pointer ">
                                            <Link className="group ">{destination.details.map((detail, i) => (
                                                <p key={i} className="text-sm hover:underline mb-1 " >{detail}</p>
                                            ))} </Link>
                                            <span className="group ">{destination.prices.map((price, i) => (
                                                <p key={i} className="text-sm hover:underline mb-1 ">{price}</p>
                                            ))}</span>
                                        </div>
                                    </div>  
                                </div>
                            )}
                            <hr className="border-[#7772724b] mt-3 " />
                        </div>
                    </div>
                ))}
            </div>
        </>

    )

}