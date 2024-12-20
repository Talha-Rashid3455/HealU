import CalendarIconWithDate from "./CalendarIconWithDate"
import StarRating from "./StarRating"


const AppointmentsDisplay = (props) => {

    console.log(props.date)
    return (
        <div className='flex  flex-col ml-10'>
            <CalendarIconWithDate  className='flex items-center ml-10'  date={props.date} />
            <h1 className=" text-sm ">{props.name}</h1>
            <h1 className="text-sm">{props.city}</h1>
            <StarRating className=''  rating={props.rating} />
        </div>

    )
}


export default AppointmentsDisplay;