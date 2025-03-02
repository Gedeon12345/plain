
export default function (props) {

    return (

        <>
            <div className="p-2 w-[320px] h-[400px] bg-[#fff] flex flex-col justify-center items-start rounded-[30px] cursor-pointer transition duration-300 scale-[0.97] hover:scale-[1] shadow-[0px_4px_15px_rgba(0,0,0,0.2)] ">
                <div className="mt-3 mb-[20px] w-full h-[100px] space-y-1 p-3 ">
                    <h1 className="text-3xl mb-3 text-[#192024] font-bold ">{props.mapPro.title}</h1>
                    <p>{props.mapPro.description}</p>
                </div>
                <div className="w-[100%] h-[200px] bg-[#ffffff] overflow-hidden rounded-[30px] ">
                    <img className=" object-center object-cover h-[200px] w-[100%]  " src={props.mapPro.image} alt="" />
                </div>
            </div>
        </>

    )

}