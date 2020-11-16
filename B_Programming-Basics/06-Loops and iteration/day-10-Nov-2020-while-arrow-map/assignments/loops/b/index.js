const numbers = [-10, 5, 2, 7, 8, 14, 25];

//Write an Arrow function to return the Maximum number in the array
// one param : Array
// muti statements

// const maxOf = array => {
//     let maximum = array[0];
//     for (let index = 1; index < array.length; index++) {
//         if (array[index] > maximum) {
//             maximum = array[index];
//         }
    
//     }
//     return maximum;
// };


const maxOf = array => Math.max(...array);
console.log(maxOf(numbers));

/**
* create two inputs
 * first input will be for adding names , every value will be pushed to the names array.
 * second input will be for the professions  ,  every value will be added to the professions array.
 *
 * create a button , add to every name  using map loop , a profession randomly , and save the result in a new generated array .
 * show the list of namesProfessions  in an unordered list, using forEach loop
 */