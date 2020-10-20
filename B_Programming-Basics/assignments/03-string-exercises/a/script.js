/**
 * please get the 'h3' by it's id.
 * save the inner Html in a string variable.
 * find inside it the phrase 'code' using the substring method.
 * save the substring in another varaible named secret
 */

// let paragraph = document.getElementById('sytax');
// let syntax = paragraph.innerHTML;

// let secret = syntax.substring(syntax.length - 10, syntax.length - 6);
// console.log(secret);

/**
 * search for the substring 'try' using search method
 * save it using substruibg method in a variable :
 *          save the index in a variable
 *          substring (start:index, end:index+3)
 * 
 */

// let i = syntax.search('try');
// console.log(i);
// secret = syntax.substring(i, i + 3);
// console.log(secret);

/**
 * please replace 'correct' with 'secret'
 * assign the returnd string after replacement to newSyntax variable
 * assign the newSyntax to the paragraph.innerHTML;
 * paragraph.innerHTML = newSyntax;
 */

//Some explaination :


// let h3Element = {
//     innerHTML: 'some text',
//     length: 2,
//     style: 'padding:5px'
// };

// let syntax = h3Element; // Object refernce Type
// console.log(typeof syntax);
// let code = h3Element.innerHTML; // String Primitive Type
// console.log(typeof code);


// h3Element.innerHTML = h3Element.innerHTML.replace('some', 'test');
// console.log(h3Element);

//solution

// let h3 = document.getElementById('sytax');
// let syntax = h3.innerHTML;

// console.log(typeof h3, h3);

// let newSyntax = h3.innerHTML.replace('correct', 'secret');
// console.log(newSyntax);

// h3.innerHTML = newSyntax;

// console.log(newSyntax);
// syntax = h3.innerHTML.replace('correct', 'secret');

// let syntax = document.getElementById('sytax').innerHTML;


// let element = document.getElementById('sytax');

// element.innerHTML = element.innerHTML.replace('correct', 'secret');

// console.log(document.getElementById('sytax').innerHTML);

// console.log(element.innerHTML);


/**
 * define a string which includes the complete prticipants names
 * 
 *let FbW39Complete =  "'Glauber', 'Adam', 'Arif', 'Tareq', 'Santiago', 'Gabor', 'Nils', 'Nargiza', 'Matheus', 'Daniel', 'Ljiljana', 'Manonmani', 'Ion', 'Rashad'"

 *let attandedNames = ""

 *let absent = ""

 *let tutors = ""

 *let representative = "Gabor"

 *write a function isFbW39Student(sName, classNames){
     //returns boolean indicatinig if yes or no
 }
 *write a function isAttending(sName, attendanceList){
     //returns boolean indicatinig if yes or no
 }
  *write a function isAbsent(sName, absentList){
     //returns boolean indicatinig if yes or no
 }
 *write a function isTutor(sName, tutorsList){
     //returns boolean indicatinig if yes or no
 }
 *write a function isRepresentative (sName, rName){
      //returns boolean indicatinig if yes or no
 }
 */


function isFbW39Student(sName, classNames) {
    //returns boolean indicatinig if yes or no
    return classNames.includes(sName);
}

let FbW39Complete = "Glauber, Adam, Arif, Tareq, Santiago, Gabor, Nils, Nargiza, Matheus, Daniel, Ljiljana, Manonmani, Ion, Rashad";
// console.log(FbW39Complete.includes('Rashad'));
console.log(isFbW39Student('Rashad', FbW39Complete));


/*
write a function isAttending(sName, attendanceList){
     //returns boolean indicatinig if yes or no
 }*/

function isAttending(sName, attendanceList) {
    //returns boolean indicatinig if yes or no
    return attendanceList.includes(sName);
}

//let attandedNames = ""
let attandedNames = "Glauber, Adam, Arif, Tareq, Santiago, Gabor, Nargiza, Matheus, Daniel, Ljiljana, Manonmani, Ion, Rashad";

//console.log(isAttending('Rashad', attandedNames));
let result = isAttending('Daniel', attandedNames);
console.log(result);

let otherResult = isAttending('Jon', 'Jon , Harris, Safwan');
console.log(otherResult);