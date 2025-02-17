export default function (props) {

    return (
        <>
            <div className="p-2 pb-3 w-[320px] bg-[#fff] rounded-[30px] cursor-pointer transition duration-300 scale-[0.97] hover:scale-[1] shadow-[0px_4px_15px_rgba(0,0,0,0.2)] ">
                <div className="w-[100%] h-[200px] bg-[#fafbfb] overflow-hidden rounded-[30px] ">
                    <img className="object-center object-cover h-[200px] w-[100%]  " src={props.image} alt="" />
                </div>
                <div className="mt-3 mb-[20px] space-y-1 p-3 ">
                    <h1 className="text-3xl text-[#192024] font-bold ">{props.city}</h1>
                    <p>{props.duration}, sans escale</p>
                    <p>{props.start}  {props.end}</p>
                </div>
                <h2 className="text-2xl text-[#192024] font-bold p-2 ">à partie de {props.price}FCFA</h2>
            </div>
        </>
    )

}