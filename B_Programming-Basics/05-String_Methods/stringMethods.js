//Global Variables
let firstName = 'Safwan';
let lastName = 'Kherallah';
let age = 32;
const profile = `Hello there my name is: ${firstName} and my age is ${age}`;
const skills = 'JavaScript, HTML, CSS, REACT, NodeJS, MongoDB';

let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let springs = document.getElementById('age');
let cv = document.getElementById('profile');
let tages = document.getElementById('skills');

let test = document.getElementById('test');
let string;
let val;

// Concatenation
string = firstName + ' ' + lastName;
string = firstName.concat(' ', lastName);

//Append

// test.innerHTML = firstName;

// test.innerHTML = test.innerHTML + ' ' + lastName;
// test.innerHTML += ' ' + lastName;
// test.innerHTML = `<h1>Full Name: </h1>`;
// test.innerHTML += `<h1>${string} </h1>`;
// test.innerHTML += 'Hello I can work in DCI !!';
// console.log(test.innerHTML);

//Escaping 'back slash \'
string = 'That\'s awesome I can\'t wait';



//Length
val = string.length;

//access single character
val = string[0]; //first char
val = string[string.length - 1]; //last char

//Split a string into substrings using the specified separator and return them as an array.

string = 'That is nice';
val = string.split(' ');

let skillsArr = skills.split(', ');
// console.log(skillsArr);

// let example = 'HTML,CSS, REACT';
// let arr = example.split("," || " " || ", ");
// console.log(arr);


// substring(starting index'included' , end index 'not included)
// substring([start , end[)
// console.log(lastName.length);

val = lastName.substring(lastName.length - 3, lastName.length);

// search() : Finds the first substring match in a regular    expression search.

//unsucessful search returns -1
string = 'That is nice';

let index = string.search('nice');

// console.log(string[index]);

val = string.substring(string.search('nice'), string.search('nice') + 4);

// console.log(index);

//replace()
//returns a new string after replacing the first match of the searchstring with a given new substring - it doesn't change the original string. 

let originalString = 'That is great nice';
let searchString = 'nice';
let newSubString = 'awesome';
let returnedString = '';

returnedString = originalString.replace(searchString, newSubString);

// console.log(originalString);
// console.log(returnedString);



//replaceAll() it is same as rerplace but replacing every match to the searchString with the newSubString

originalString = 'Hello FbW39 nice nice team';
searchString = 'awesome';
newSubString = 'nice';
returnedString = '';

returnedString = originalString.replaceAll(searchString, newSubString);

// console.log(`the returned string is: ${returnedString}`);
// console.log(`the original string is:${originalString}`);

// string.includes(substring) : string method returns true or false , true if the passed substring is included in the string, false if not


function isNameHere(name, text) {
    //string method includes()
    //return boolean value true , false
    return text.includes(name);
}
let paragraph = 'Matheus , Gabor , Jon , Daniel , Nargiza';
let answer = isNameHere('Jon', paragraph);

console.log(answer);

//developer log
// console.log(string);
// console.log(val);
// console.log(string);
test.innerHTML = string;