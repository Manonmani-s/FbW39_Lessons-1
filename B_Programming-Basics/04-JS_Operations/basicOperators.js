//Global Variables
let display = document.getElementById('display');
let cool = document.getElementById('cool');
let bad = document.getElementById('bad');
cool.style.display = 'none';
bad.style.display = 'none';

let result;
let x, y, z;

//Numbers ops.
x = 5;
y = 8;
z = 20;

// - , + , / , * 
result = x + y;
result = x - y;
result = x / y;
result = x * y;

//Booleans true/false ops.
x = true;
y = false;
z = true;

// and  '&&'
result = x && y; // true and false = flase
result = y && x; // false and true = flase
result = x && z; // true and true = true
result = y && y; // false and false = false
// or '||' 
result = x || y; // true or false = true
result = y || x; // false or true = true
result = x || z; // true or true = true
result = y || y; // false or false = false
//!
result = !x; // 'result' would be 'Oposit' value of 'x' 

//example usage of logical values
if (!z) {
    result = `Hey I have been accepted !!`;
    cool.style.display = 'inline-block';

} else {
    result = `No I have been rejected :( `;
    bad.style.display = 'inline-block';

}
// developer log
display.innerHTML = result;
// console.log(display.innerHTML);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
// console.log(typeof result);
// console.log(!z);

//String Ops. and Methods 
//General String variables
let firstNameLable = document.getElementById('firstName');
let lastNameLabel = document.getElementById('lastName');
let fulName = document.getElementById('fullName');
let greeting = document.getElementById('greeting');
let firstNameInpt = document.getElementById('first');
let lastNameInpt = document.getElementById('last');
// let gender = document.getElementById('gender');

//Local Variables
let firstName = 'Safwan',
    secondName = 'Kherallah';


let salutation;

//define a string accepts ${JAVASCRIPT} inside
// salutation = `Hello ${male} ${firstName} ${secondName}`;
//concat 'plus for strings'
// salutation = 'Hello ' + male + ' ' + firstName + ' ' + secondName;

//greeting a name



function printName(event) {
    event.preventDefault();
    let gender = 'Mrs.';
    if (male.checked) {
        gender = 'Mr.';
    }
    greeting.innerHTML = `Hello ${gender} ${firstNameInpt.value}  ${lastNameInpt.value}`;
}





// developer log
// console.log(salutation);
firstNameLable.innerHTML = `First Name:`;
lastNameLabel.innerHTML = `Last Name:`;