const num1 = 100;
const num2 = 50;
let result;

// Simple math with numbers

result = num1 + num2;
result = num1 * num2;
result = num1 - num2;
result = num1 / num2;
result = num1 % num2;


// Math Object

// there is no new Math() toi build a Math instance
// i.e. no instances 
// console.log(Math);

// Props
result = Math.PI;
result = Math.E;

//methods () :
result = Math.round(2.4);
// expected output : 2

result = Math.ceil(2.0001);
// expected output : 3

result = Math.floor(2.99999);
// expected output : 2


result = Math.sqrt(64);
// expected output : 8

result = Math.pow(8, 3);
// expected output : 512

result = Math.abs(-10);
// expected output : 10

result = Math.sign(-10);
// expected output : -1

result = Math.max(-10,4,1,800);
// expected output : 800

result = Math.min(-12,-10,4,1,800);
// expected output : -12

result = Math.random();
// expected output : random number between 0 and 1

result = Math.abs(Math.ceil(Math.random()*100 +1));
// change the range of the random numbers

console.log(result);