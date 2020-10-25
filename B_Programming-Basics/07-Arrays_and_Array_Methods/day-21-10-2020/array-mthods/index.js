/*---------------------Array.splice()------------------------ */

let months = ["Jan", "Feb", "March", "April", "June"]
months.splice(3, 1,'May','May', 'May');
// the firs argument is to tell where to strart changing
// the second argument is to tell how many items should change :
		// 0 : changing no item ; but only adding
		// 1:changing one item, and then adding
// the rest arguments specifies what to add or replaceBy
// if the third argument is not specified then splice would remove items
// startring from the index in first argument , 
// and it removes the number of items mentioned in the second argument
console.log(months);
// expected output :  > Array ["Jan", "Feb", "March", "May", "May", "May", "June"]

months.splice(6,1);
console.log(months);
// expected output : Array ["Jan", "Feb", "March", "May", "May", "May"]
months.splice(3,3);
console.log(months);
// expected output :["Jan", "Feb", "March"]
months = ["Jan", "Feb", "March", "April", "June"]
//if a make a mistake putting in first argument not a number, 
// it will be considered zero, and start removing from zero
// mistake : months.splice('',3); 
months.splice(0,3); 
console.log(months);
// expected output : Array ["April", "June"]

/*---------------------Array.reverse()------------------------ */
const array1 = [1, 2, 3,4,5,5,5,8];
console.log('array1:', array1);
// expected output: "array1:" Array [1, 2, 3,4,5,5,5,8]

array1.reverse();



// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array [8, 5, 5, 5, 4, 3, 2, 1]

/*---------------------Array.join()------------------------ */

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

let str = elements.join('-')
console.log(str);
// expected output: "Fire-Air-Water"


/* a string method that returns the array after spliting */
let arr = str.split('-');
console.log(arr);
// expected output:  Array ["Fire", "Air", "Water"]

//a trick to reverse a string
/**
 * first: split characters into array :str.split('');
 * second: reverse the array using : array.reverse();
 * third: join the reversed array 
 * Extra to have a separtore between the words inside the reversed string 
 * adding separtore to the correct postion in the reversed array using :arr.splice(5,0,'-');
 * join the reversed array elements (charachters) using join('separtore'):str = arr.join('-');
 * 
 */

// * Extra to have a separtore between the words inside the reversed string 

let string = "FireAirWater";
let array = string.split('');
console.log(array);
array.splice(4,0,' ');
console.log(array);
array.splice(8,0,' ');
console.log(array);

array.reverse();
console.log(array);
string = array.join(' ');
console.log(string);





