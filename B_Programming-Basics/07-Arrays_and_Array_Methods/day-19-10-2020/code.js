document.write(` <h1>Here are the results</h1>`);
let exampleArray = ['a','b','c'];
let element = exampleArray[2];
// console.log(element);

/**
 * Time Limit : till 10:43 am -- 5 minutes
 * Please create an Array of users (every user is a string, only the name)
 * loop through the array (for loop) , and print a list of users , along with their order in the array (show also the index)
 */

 //* Please create an Array of users (every user is a string, only the name)

 const users = ['Safwan','Gabor','Jon', 'Manon','Ljiljana','Nargiza','Santiago'];

 //* loop through the array (for loop) , and print a list of users , along with their order in the array (show also the index)
 document.write(` <h3>My user list consist of  ${users.length} users:</h3>`);
 for(let i = 0; i < users.length ; i++){
    document.write(` <li>${i} : ${users[i]}</li>`);
 }

 /**
  * * Time Limit : till 11:25 am -- 20 minutes
  * search for the user called 'Sebstain'
  * if: there is no user called 'Sebstain' , please change if:'Santiago' to be  'Sebstain'
  */
/* 
  //search for the user called 'Sebstain'
console.log(users);
// a flag used for element search status : found or NOT found
// Start with Not-found !found  = true
let found = false; //, foundIdx;

for(let i = 0 ; i < users.length ; i++){
    if(users[i] == 'Sebstain'){
        //update the flag if found , !found = false
        found = true;
        // break;
    }

    // if(users[i] == 'Santiago'){
    //     foundIdx = i;
    // }
}

console.log(!found);

// * if: there is no user called 'Sebstain' : Not-found !found  = true,
 if(!found){
     // search for 'Santiago' 
    for(let i = 0 ; i < users.length ; i++){
        if(users[i] == 'Santiago'){
             //change 'Santiago' to 'Sebstain'
             users[i] = 'Sebstain';
        }
    } 

    // users[foundIdx] = 'Sebstain';
 }
 console.log(users);

*/


 //search for the user called 'Sebstain'

// keep the index where 'Sebstain' is founded
//  let index;
 
//  for(let i = 0 ; i < users.length ; i++){
//      if(users[i] == 'Sebstain'){
//          //update the index where  'Sebstain' is found
//          index = i;
        
//      }
// }
// console.log(users);
// console.log(index);
//  // * if: there is no user called 'Sebstain' : index  == undefined,
//  if(index  == undefined){
//     // search for 'Santiago' 
//     for(let i = 0 ; i < users.length ; i++){
//        if(users[i] == 'Santiago'){
//            //change 'Santiago' to 'Sebstain'
//             users[i] = 'Sebstain';
//        }
//     } 

   
//  }
// console.log(users);

// Glauber : advanced solution one for loop is used 
// let found = false; // a flag to see if there is 'Sebstain'
// let replaceIndex ; // keeping the index of 'Santiago'
// for(let i = 0 ; i < users.length; i++){
// //search for 'Sebstain' and update found flag
//     if(users[i] == 'Sebstain'){
//         found = true;
//         break; // The break statement terminates the current loop
//     }
// //search for 'Santiago' and update replaceIndex

//     if(users[i] ==  'Santiago'){
//         replaceIndex = i;
//     }

// }
// // if there is no user callled Sebastian
// if(!found){
//     // please replase 'Santiago' with 'Sebstain'
//     users[replaceIndex] = 'Sebstain';
// }

let Falafel, meatballs, dhal, seitan, biriyani;

Falafel = {
    name:'Falafel',
    type : 'veggie',
    ingredients : ['chickpeas','beans','flour','cumin','oil','salt','garlic'],
};

meatballs = {
    name:'meatballs',
    type : 'meat',
    ingredients : ['egg','minced meat','parsley','buns','oil','salt','garlic','black pepper'],
};

dhal = {
    name:'dhal',
    type : 'veggie',
    ingredients : ['chanadhal','onion','tomato','butter','ghee','salt','garlic','chilli powder','ginger','cumin','mustard seeds','curry leaves'],
};

seitan = {
    name:'seitan',
    type : 'vegan',
    ingredients : ['wheat gluten','chickpea flour','tomato sauce','paprika','nutritional yeast','salt','garlic','chilli powder'],
};

biriyani = {
    name:'biriyani',
    type: 'chicken',
    ingredients: ['rice', 'chicken', 'onions', 'Garlic', 'ginger', 'masala', 'oil', 'Chilli']
    } ;


let menu = [Falafel, meatballs, dhal, seitan, biriyani];


// please loop through the menu, and print the name of the dish wich have the largest number of ingredients - compare every (ingredients.length) to take the longest one and print the dish's name

let largestNumberOfIngredients = 0;
let dishName;

for(let i = 0 ; i < menu.length; i++){
    if(menu[i].ingredients.length > largestNumberOfIngredients){
        largestNumberOfIngredients = menu[i].ingredients.length;
        dishName = menu[i].name;
    }
}

document.write(`<h1>The dish ${dishName} has the largest number of ingredients ${largestNumberOfIngredients}`);


// Array.push() - to the end
let animals = ['cow','cat','brid','sheep'];
console.log(animals);
// push method adds a elemnt to the end of the array and returns the length of the new array

let newLength = animals.push('goat');
console.log(animals);
console.log(newLength);

// Array.unshift() - to the top
// unshift method adds a elemnt to the top of the array and returns the length of the new array

 newLength = animals.unshift('dog');
console.log(animals);
console.log(newLength);


//loop through the array and return only the numbers less than 10
let lessThanTen = [];
let arrayOfNumbers = [1,5,19,52,6,11,3,8,10];
for(let i = 0; i < arrayOfNumbers.length;i++ ){
    if(arrayOfNumbers[i] < 10){
        lessThanTen.push(arrayOfNumbers[i]);
    }

}

console.log(lessThanTen);

//please loop through the menu and divide it into veggieMenu , veganMenu , meatMenu and chickenMenum

/**
 * Result:
 * veggieMenu : [Falafel , dhal ]
 * veganMenu : [seitan]
 * meatMenu : [meatballs]
 * chickenMenu : [biryani]
 */

let veggieMenu = [];
let meatMenu = [];
let veganMenu = [];
let chickenMenu = [];

for(let i = 0; i < menu.length; i++){
    if(menu[i].type == 'veggie'){
        veggieMenu.push(menu[i].name);
    }
    if(menu[i].type == 'meat'){
        meatMenu.push(menu[i].name);
    }
    if(menu[i].type == 'vegan'){
        veganMenu.push(menu[i].name);
    }
    if(menu[i].type == 'chicken'){
        chickenMenu.push(menu[i].name);
    }
}

console.log(veggieMenu);
console.log(veganMenu);
console.log(meatMenu);
console.log(chickenMenu);

