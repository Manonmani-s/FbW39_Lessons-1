

const Keyboard = ({ inputHandler, courseNameHandler, participantsNumberHandler }) => {
    
    // const { inputHandler, courseNameHandler, participantsNumberHandler } = props;
    return (
        <div className='group'>
                <input type="text" onChange={inputHandler} />
                <button onClick={courseNameHandler }>Add Class Name</button>
                <button className='btn' onClick={participantsNumberHandler}>Add Participant</button>
            </div>
    )
}

export default Keyboard
