
const IconWithData = (props) => {

    return (
            <div className="flex border-2 border-gray-200 shadow-lg flex-row  w-56 h-12 mt-2 rounded-lg">
                <img src={props.icon} />
                <div className="flex flex-col items-center ml-2">
                    <h1 className="text-sm font-semibold">{props.text1}</h1>
                    <h1 className="text-sm font-light">{props.text2}</h1>
                </div>
            </div>
    )
}

export default IconWithData;
