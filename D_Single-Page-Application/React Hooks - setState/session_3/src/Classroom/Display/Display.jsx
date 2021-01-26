

const Display = ({ number, nameOfClass }) => {
    // const { number, nameOfClass } = props;
    return (
        <div className='container'>
        <h3>We have here <span>{number}</span> participants in Class <span>{nameOfClass}</span> </h3>
   
    </div>
    )
}

export default Display
