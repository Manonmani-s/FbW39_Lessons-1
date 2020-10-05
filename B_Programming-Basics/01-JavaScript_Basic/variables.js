//var, let, const scopes



var greeter = "hey hi";
var times = 4;

if (times > 3 && times < 5) {
    var greeter = "say Hello instead";
    // console.log(greeter);
}



if (times < 5) {
    //var greeter = "another hi";
    // console.log(greeter);
}


//console.log(greeter); // "say Hello instead"

/**-----------------------------------------------------**/
let number = 10; {
    let number = 1000;
    // console.log(number);
}
// console.log(number);

var code = 9;

{
    let code = 99;
    // console.log(code);
} {
    // console.log(code);
}
// console.log(code);

/**-----------------------------------------------------**/

var name = 'abc';

function func() {
    var name = 'another name';
    // console.log(name);
}

func();

//console.log(name);

/**---------------ES6-2015+ : let vs const-------------------**/

let x;
let y = 10;
y = 15;
// console.log(x)
if (x == undefined) {
    // console.log(`x identifier reads a value of:${x}`);
}

// console.log(y);
//const v; //Uncaught SyntaxError: Missing initializer in const declaration
const c = 'my constant variable';
// console.log(c);
//c = 'I want to change the contant';//Uncaught TypeError: Assignment to constant variable.

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