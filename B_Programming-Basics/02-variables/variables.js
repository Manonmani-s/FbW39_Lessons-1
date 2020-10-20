//var, let, const scopes

/**---------------------var-----------------------------**/

var greeter = "hey hi";
var times = 4;

//Block scope : var dosen't recognise it

if (times > 3 && times < 5) {
    var greeter = "say Hello instead";
    console.log(greeter);
}



if (times < 5) {
    //var greeter = "another hi";
    console.log(greeter);
}


console.log(greeter); // "say Hello instead"

/**------------------ var <> let : block scope ------------------------**/
let number = 10;

//Block scope : let can recognise it
{
    let number = 1000;
    console.log(number);
}
console.log(number);

var code = 9;

//Block scope : let can recognise it
{
    let code = 99;
    console.log(code);
} 
//Block scope : var dosen't recognise it
{
    console.log(code);
}
// General scope - main room ;) 
console.log(code);

/**------------------ var can recognise function scope ------------------**/

var name = 'abc';

// function scope 

function func() {
    var name = 'another name';
    console.log(name);
}
// calling the function to be excuted
func();

console.log(name);

/**---------------ES6-2015+ : let vs const-------------------**/

// let and const works the same in terms of scope only
// let is flexible we can declare without initialization 
// let is flexible we can assign a new value to it's variable
// const is constant : no reassignment and initialization is a must

let x;
let y = 10;
y = 15;
console.log(x);
if (x == undefined) {
    console.log(`x identifier reads a value of:${x}`);
}

console.log(y);
//const v; //Uncaught SyntaxError: Missing initializer in const declaration
const c = 'my constant variable';
console.log(c);
//c = 'I want to change the contant'; //Uncaught TypeError: Assignment to constant variable.

/**---------------naming JS variables-------------------**/

// let 11k = 'test'; can't startr with a number
let k11 = 'test';

let $number = 'other test'; // can start with $
let _file = 'file name'; // can start with _

//let ? me = 'question';  can't start with a special chars
//let me? = 'question'; can't include  a special chars too

//let first-name = 'karol';can't include - 

// best practice is : the camle case
let firstName = 'Leandro';

//common practice is : _ seprator
let last_name = 'Müller';