

const UpdatedButton = (props) => {
    return (
        <div className="flex flex-col">
            <div className="text-2xl text-center m-2 mx-4" > {props.image}  </div>
            <h1 className="text-2xl">{props.text}</h1>
        </div>
    )
}

export default  UpdatedButton;