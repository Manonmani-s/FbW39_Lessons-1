import { useState } from 'react';



import Number from './Number/Number';
import Button from './Button/Button';

import './KeyBoard.css';

const KeyBoard = ({giveResult}) =>  {

 
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

  

    const updateState = (value, seq) => {
      
        if (seq === 'first') {
            setFirst(parseFloat(value));
        } else if (seq === 'second') {
            setSecond(parseFloat(value));
        }
    }




   
        return (
            <main className="card">
                <Number getValue={updateState} seq={'first'} />
                <Number getValue={updateState} seq={'second'}/> 

                <Button v1={first } v2={second }  operation={'Plus'} getResult={giveResult} seq={'1'}/>
                <Button v1={first } v2={second }  operation={'Minus'} getResult={giveResult} seq={'2'}/>
                <Button v1={first } v2={second }  operation={'Divide'} getResult={giveResult} seq={'3'}/>
                <Button v1={first } v2={second }  operation={'Multiply'} getResult={giveResult} seq={'4'}/>
                

            </main>
        )
   
}



export default KeyBoard
