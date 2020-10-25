
// let sum = 0;
// let max = 15;
// let min = 0;
// for(i = min; i < max; i++){
    
//         sum += i;
    
// }

// document.write(`<li>The sum is of numbers between ${min} and  ${max} :${sum}</li> `);

// sum = 0;
// max = 100;
// min = 50;

// for(i = min; i < max; i++){
    
//     sum += i;

// }



// document.write(`<li>The sum is of numbers between ${min} and  ${max} : ${sum}</li> `);



// sum = 0;
// max = 101;
// min = 98;

// for(i = min; i < max; i++){
    
//     sum += i;

// }



// document.write(`<li>The sum is of numbers between ${min} and  ${max} : ${sum}</li> `);


// sum = 0;
// max = 102;
// min = 100;

// for(i = min; i < max; i++){
    
//     sum += i;

// }



// document.write(`<li>The sum is of numbers between ${min} and  ${max} : ${sum}</li> `);



function sumOfNumbers(min,max){
    let sum = 0;
    if(min > max){
        console.error(`Error: min shouldn't be greator than max`);
        return `Error: min shouldn't be greator than max`;
    }
    
    for(i = min; i < max; i++){
           sum += i;
     }

    return sum;
}

document.write(`<li>The sum of numbers between ${0} and  ${15-1} : ${sumOfNumbers(0,15)}</li> `);

 document.write(`<li>The sumof numbers between ${10} and  ${15-1} : ${sumOfNumbers(10,15)}</li> `);

 document.write(`<li>The sum of numbers between ${20} and  ${25-1} : ${sumOfNumbers(200,25)}</li> `);

 document.write(`<li>The sum of numbers between ${100} and  ${115-1} : ${sumOfNumbers(100,115)}</li> `);