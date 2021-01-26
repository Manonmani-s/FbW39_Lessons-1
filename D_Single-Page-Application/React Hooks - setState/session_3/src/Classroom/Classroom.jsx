import { useState } from 'react';


import Display from './Display/Display'
import Keyboard from './Keyboard/Keyboard'

const Classroom = () => {
    //declare the state of functional component
   

    const [count, setCount] = useState(10);
    const [value, setValue] = useState('');
    const [name, setName] = useState('FbW 39');



    return (
        <>
            <Keyboard inputHandler={e => setValue(e.target.value) } courseNameHandler={() => setName(value) } participantsNumberHandler={ () => setCount(count+1) }/>
            
            <Display number={count} nameOfClass={name }/>
        </>

    );
}

export default Classroom
