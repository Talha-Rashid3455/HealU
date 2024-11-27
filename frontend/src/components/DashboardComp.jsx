import React from "react";



const DashboardComp =(props) => {
    return (
        <div  className="px-6 py-4 border-2 bg-white shadow-lg  rounded-lg w-56 h-36 items-center">
            <h1 className="text-custom_blue ml-4  mt-2 text-xl">{props.title}</h1>
            <div className="flex flex-row" > 
            <img className='h-20 w-20' src={props.logo}/>
            <div className="flex flex-col">
                <h1 className="text-custom_blue   text-xl ml-2">Title</h1>
                <h1 className="text-custom_blue font-bold text-xl ml-2" >{props.no}</h1>
            </div>
            </div>
        </div>
    )
};


export default DashboardComp;