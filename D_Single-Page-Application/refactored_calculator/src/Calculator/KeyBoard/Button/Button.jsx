

import './Button.css'


const Button = ({v1, v2,operation, getResult , seq}) =>  {

   

  const  Calculate = () => {
        
        
       
        switch (operation) {
            case 'Plus':
                getResult( v1 + v2)
                break;
            case 'Minus':
                getResult( v1 - v2) 
                break;
            case 'Divide':
                getResult( v1 / v2) 
                 break;
           default:
                getResult( v1 * v2) 
                break;
            
            
        }
    } 

     
        return (
            <button className={`btn${seq}`}
            onClick={Calculate}>
                {operation}
            </button>
        )
    
}

export default Button
