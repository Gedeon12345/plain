import { useState } from "react"
import { Link } from "react-router-dom"

export default function (props) {


    const [openDropDown, setOpenDropDown] = useState(null)


    const toggleDropDown = () => {
        setOpenDropDown(prev => !prev)
    }

    return (
        <>
            <div>
                <div onClick={toggleDropDown} className="flex justify-between items-center cursor-pointer ">
                    <h1 className="text-[14px] ">{props.question} </h1>
                    <div className={`transition duration-500 text-[20px] ${openDropDown ? "rotate-180" : ""} `}>
                        <i className={`las la-angle-down `}></i>
                    </div>
                </div>
                {
                    openDropDown &&(
                        <div className="mt-3 text-[14px] ">
                            <p>{props.details} </p>
                        </div>
                    )
                }
                <hr className="border-[#7772724b] mt-3 " />
            </div>
        </>

    )

}