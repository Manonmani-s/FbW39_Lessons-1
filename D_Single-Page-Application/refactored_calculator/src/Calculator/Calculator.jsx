import { useState } from 'react';

import Display from './Display/Display'
import KeyBoard from './KeyBoard/KeyBoard'



const Calculator =()=> {

   

    const [result, setResult] = useState(0)
    

  
     
        return (
            <>
                <Display result={result}/>
                <KeyBoard giveResult={value => setResult(value) } />
            </>
        )
    
}

export default Calculator
