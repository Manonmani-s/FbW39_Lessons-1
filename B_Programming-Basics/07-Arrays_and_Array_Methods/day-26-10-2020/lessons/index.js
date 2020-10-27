/*---Static vs Instance Methods--- */
/**
 * Static methods can be called only using the ArrayConstructor while Instance methods can be called with the any instance of an array
 *
 * Static methods can be called only using the ArrayConstructor
 * Instance methods can be called with the any instance of an array
 */

let numbers = [1,2,3,4,5,6];

/* --Static methods--*/ 
// Array.isArray()
// console.log(Array.isArray('Bob Marley'));
// console.log(Array.isArray(numbers));

/*--Instance methods--*/
numbers.reverse();
// console.log(numbers);



/* -- slice -- */

const fruits = ['apple', 'berry', 'orange','banana','watermelon'];

//slice is an instance array method takes a copy of a specific part of the array

//the first argument is optional : refers to the start

// the other argument refers to the end : end is not included

let partOfFruits = fruits.slice(1,3);
// console.log(partOfFruits);

// using a negative number means take the last number of elements

partOfFruits = fruits.slice(-3);
// console.log(fruits);
// console.log(partOfFruits);

//copy the whole array
let copyOfFruits = fruits.slice();
// console.log(fruits);
// console.log(copyOfFruits);


fruits.pop();
// console.log(fruits);
// console.log(copyOfFruits);

/* -- instance.sort() -- */
//Sorts the elements of an array in place and returns the array.
function sortOrder(x){
    /* x is an array */
    return x.sort();
}



// using slice to copy
let sliceNumbers = numbers.slice(0,numbers.length);

// let returned = numbers.sort();
// sortOrder(numbers);
//  console.log(numbers);
//  console.log(sliceNumbers);

 numbers =  [5,2,70,3,8,6,100,1,90];
//  sortOrder(numbers);
//  console.log(numbers);

//  fruits.sort() ;

// console.log(fruits);

/*  Compare function is array.sort()  */
/* 
function compare(a , b) {
   * if a should come before b :
       return negative value
   * if b should come before a :
       return positive greater than 0 value
   * if a and b are the same level :
       return 0 value

}
*/

numbers.sort(function(a,b){

    // here if b is greator then return positive , b comes before a
    // if b is smaller return negative , a comes before b
      return b-a;
    /**
     * if(a < b){
     *  return positive
     * }else{
     *  return negative
     * }
     * 
     */
});

console.log(numbers);

let employees = ['developer','CEO','managing director', 'supervisor'];



// highest level comes first
employees.sort(function(a , b){
    if(a == 'managing director'){
        return -1;
    }
    if(a == 'CEO' && (b == 'supervisor' || b == 'developer')){
        return -1;
    }
    if(a == 'supervisor' && b == 'developer'){
        return -1;
    }
});

// assignment : 15 minuets 12:05 till 12:20
// re write the compare function so the lowest level comes first
console.log(employees);

// first solution with return negative
employees.sort(function(a , b){
    if(a == 'developer'){
        return -1;
    }
    if(a == 'supervisor' && (b == 'CEO' || b == 'managing director')){
        return -1;
    }
    if(a == 'CEO' && b == 'managing director'){
        return -1;
    }
});


// second solution with return positive
employees.sort(function(a , b){
    if(a == 'managing director'){
        return 1;
    }
    if(a == 'CEO' && (b == 'developer' || b == 'supervisor')){
        return 1;
    }
    if(a == 'supervisor' && b == 'developer'){
        return 1;
    }
});


console.log(employees);













