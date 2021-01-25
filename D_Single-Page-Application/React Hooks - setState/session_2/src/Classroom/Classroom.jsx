import React, { useState } from 'react';


import Display from './Display/Display'
import Keyboard from './Keyboard/Keyboard'

const Classroom = () => {
    //declare the state of functional component
   

    const [count, setCount] = useState(10);
    const [value, setValue] = useState('');
    const [name, setName] = useState('FbW 39');



    return (
        <>
            <Keyboard inputHandler={data => setValue(data) } courseNameHandler={() => setName(value) } participantsNumberHandler={ number => setCount(number) } number = {count}/>
            
            <Display number={count} nameOfClass={name }/>
        </>

    );
}

export default Classroom
