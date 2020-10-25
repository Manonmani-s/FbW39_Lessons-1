/*---------------------Assignment:1------------------------ */

/*15 min -- from 14:30 till 14:45
3. Reverse. Create a function to reverse a number.

e.g. reverse(34532) ➞ 23543

tip : Number(str);

console.log(typeof '123') // string
console.log(typeof Number('123')) // number
console.log(Number('Safwan')) // NaN : Not a Number

tip: number.toString()
// 34532.toString()  ➞ '34532'

*/

function reverse(number){
    let string = number.toString();
    let array = string.split('');
    let reversedArray = array.reverse();
    string = reversedArray.join('');
    return Number(string);
}

document.write(`${reverse(34532)}`);
console.log(reverse(34532));

/*---------------------Assignment:2------------------------ */

/* 15 minutes -- till 15:30
1. The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.

e.g.

findGreatest([3, 4, 5], 4) ➞ 5

findGreatest([10, 20, 30], 12) ➞ 20, 30

findGreatest([0, 10, 3], 4) ➞ 10


tip: use a temporar array and push only greater numbers

tip: after the loop, return the  temporar array 
*/

function findGreatest ( array , number){
    let results = [];
    
    //loop to push items greator than number to results
    for(i=0; i < array.length; i++){
        if(array[i] > number){
            results.push(array[i]);
        }
    }

    return results;
}

console.log(findGreatest([0, 10, 3], 4));