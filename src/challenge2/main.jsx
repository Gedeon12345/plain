import { useState } from "react"

export default function () {

    const [count, setCount] = useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }
    function minus() {
        setCount(prevCount => prevCount - 1)
    }

    return (

        <section className="border-2 w-[100%] h-[100vh] bg-[#302c2c] flex flex-col items-center ">
            <h1 className="text-4xl text-[#fff] ">How many times will I say state in this section</h1>
            <div className="border-0 w-full h-[500px] flex justify-center items-center ">
                <div className="border-0 w-[150px] h-[150px] rounded-[50%] bg-[#f1f1f1] flex justify-center items-center relative ">
                    <span className="text-[40px] ">{count}</span>
                    <div onClick={minus} className="w-[50px] h-[50px] bg-[#776868] absolute left-0 bottom-0 rounded-[50%] flex justify-center items-center text-3xl text-[#fff] cursor-pointer transition duration-150 hover:bg-[#423c3c] "><i className="las la-minus"></i></div>
                    <div onClick={add} className="w-[50px] h-[50px] bg-[#776868] absolute right-0 bottom-0 rounded-[50%] flex justify-center items-center text-3xl text-[#fff] cursor-pointer transition duration-150 hover:bg-[#423c3c] "><i className="las la-plus"></i></div>
                </div>
            </div>
        </section>

    )

}