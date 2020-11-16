// The syntax
// let done = false;
let n = 0;
let m = 5;
let students = ['Gabor', 'Peter', 'Safwan', 'Jon', 'Donald', 'Manon'];

let students2 = ['Gabor', 'Peter',  'Jon', 'Donald', 'Manon', 'Safwan'];



while (students2[n] == 'Safwan') {
  // keep doing
    console.log(n);
    console.log(students2[n]);

     n++;
  
}

// console.log(students2[n]);

 do {
    // console.log(n);
    // console.log(students2[n]);

     n++;
  
} while (students2[n] == 'Safwan');




// for (i = 1; i <= 5; i++){
//      console.log(i);
//  }

/* ------array.map()---------- */

//First Arrow function:

// function name(params) {
//   //here is the code
// }

const sum = function (x,y) {
  // here is the code
  return x + y;
};

const arrowSum = (x,y) => {
  // here is your code
  return x + y;

};

// console.log(sum(5, 9));
// console.log(arrowSum(15, 19));

// if I have one param and one statement
const sqr = a => a * a;
// console.log(sqr(5));

// if I have one param and multi statements
const addOne = x => {
  let r = 1;
  return x + r;
};
// console.log(addOne(5));

//multi param and one statement

const sumOfnum = (n1, n2) => n1 + n2;

// console.log(sumOfnum(40, 50));

// no param and one statement

const greetYou = () => {
  let greetings = 'Hello ' + 'FbW39';
  return greetings;
};

// console.log(greetYou());


// multi param and multi statements

const multiNum = (x, y, z) => {
  let result = y + z * 10;
  return x * result;
};

// console.log(multiNum(1, 2, 3));

//Second Array.prototype.map() :

let numbers = [10, 25, 39];
// numbers.forEach((item, i, arr) => {
//   // console.log(item);
//   // arr[i] = item * 2;
//   newArray.push(item * 2);
// });

let newArray = numbers.map((item, index, arr) => item * 2);

console.log(numbers);
console.log(newArray);





