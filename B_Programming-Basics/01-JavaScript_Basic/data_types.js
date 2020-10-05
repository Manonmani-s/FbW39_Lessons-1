//Primitive type concept

let x = 10;
// console.log(typeof x, x);

let y = x;

// console.log(typeof y, y);

x = 15;
// console.log(x, y);

//Refernce type concept
let c = [1, 2, 3];
// console.log(typeof c, c);
let d = c;
// console.log(typeof d, d);
c[0] = 10;
// console.log(c, d);
d[1] = 20;
// console.log(c, d);

/**---------------PREMITIVE-------------------**/
//The typeof operator returns a string indicating the type of the unevaluated variable.
//String
let firstName = 'Safwan';
// console.log(typeof firstName, firstName);
let lastName = "Kherallah";

// console.log(lastName[0]);
// console.log(typeof lastName, lastName);
let g = 10,
    l = 5;
let fullName = `${firstName} ${lastName}`;
// console.log(typeof fullName, fullName);
// console.log(`${typeof fullName} ${fullName}`);
//Number
let age = 55;
// console.log(typeof age, age)
//Boolean
let hasWife = false;
let hasKids = hasWife;
hasWife = true;
//  console.log(typeof hasKids, hasKids);
// console.log(hasKids, hasWife);

//Undefined
let test;
// console.log(typeof teat, test);
let crazy = test;
test = 'HTML';
// console.log(typeof crazy, crazy);

//Null
let car = null;
// console.log(typeof car, car);
let bus = car;
car = 'BMW';
// console.log(typeof bus, bus);
// console.log(typeof car, car);

/**---------------Refernce (Object)-------------------**/
//Arrays
const students = ['Safwan', 39, {
    age: 55,
    profission: 'Web developer'
}, null];
// console.log(`${typeof students}`, students);
let array = [1, 2, 3];

//students = array; //data_types.js:67 Uncaught TypeError: Assignment to constant variable

students[1] = array[2];
students[2] = "Let's take a lunch break !!!";
students[3] = 'it\'s the time of having our \\ break';
// console.log(typeof students[0]);
// console.log(students[1]);
// console.log(typeof students[2]);
// console.log(typeof students[3]);
// console.log(`The lenght of students array is:${students.length}`);

//Object
let firstParticipant = {};
console.log(typeof firstParticipant, firstParticipant);

let secondParticipant = firstParticipant;
console.log(typeof secondParticipant, secondParticipant);

firstParticipant.name = 'Safwan';
secondParticipant.age = 55;
firstParticipant.gender = 'female';
console.log(typeof firstParticipant.name);

const thirdParticipant = {
    name: 'Jon',
    age: 75
};
console.log(typeof thirdParticipant, thirdParticipant);
// thirdParticipant = ''; nicht erlaubt
thirdParticipant.gender = 'male';
firstParticipant.name = 'Kristin';
firstParticipant['age'] = 23;
thirdParticipant['job'] = 'Web Developer';
console.table(thirdParticipant);