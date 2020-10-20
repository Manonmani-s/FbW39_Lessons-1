// -------------------------------------------
// Foreach Method: It will loop through all the elements from the array.
// -------------------------------------------
// const users = ['Safwan','Gabor','Jon', 'Manon','Ljiljana','Nargiza','Santiago'];

// document.write(` <h3>My user list consist of  ${users.length} users:</h3>`);

// for(let i = 0; i < users.length ; i++){
//   document.write(` <li>${i} : ${users[i]}</li>`);
// }

// The element will be each element of the array. And the index will be the
// index of this element in the array.
// users.forEach((element,index) => {

//   console.log(element.length)
//   document.write(` <li>${index} : ${element}</li>`);

// })

//--------------------------------------------
// First Exercise - comparison between For Loop and ForEach.
//--------------------------------------------

// const usersInfo = [
//   {
//     name: 'Safwan',
//     lastName: 'Kehralli',
//     address: 'Stade',
//     age: '35'
//   }, 
//   {
//     name: 'Matheus',
//     lastName: 'Gleizer',
//     address: 'Altona',
//     age: '29'
//   },
//   {
//     name: 'Daniel',
//     lastName: 'Cau',
//     address: 'Barmbek',
//     age: '28'
//   },
//   {
//     name: 'Gabor',
//     lastName: 'Szatmari',
//     address: 'Altona',
//     age: '30'
//   }

// ]

// document.write(` <h1> With Foor Loop </h1> `)

// for(let i = 0; i < usersInfo.length; i++){

//   document.write(`<li>  ${i} : Name: ${usersInfo[i].name}, Lastname: ${usersInfo[i].lastName} 
//     Address: ${usersInfo[i].address} Age: ${usersInfo[i].age} </li>`)

// } 

// document.write(`<h1> With ForEach Method </h1>`)

//// Using arrow functions
// usersInfo.forEach((element,index)=>{

//   document.write(`<li>  ${index} : Name: ${element.name}, Lastname: ${element.lastName} 
//     Address: ${element.address} Age: ${element.age} </li>`)

// })

//// Using normal function syntax
// usersInfo.forEach(function (element,index) {

//   document.write(`<li>  ${index} : Name: ${element.name}, Lastname: ${element.lastName} 
//     Address: ${element.address} Age: ${element.age} </li>`)

// })

//--------------------------------------------
// Second Exercise - ForEach.
//--------------------------------------------
// until 10:55 am 

// Search for an user with property name equal to sebastian and if you found it say with a
// console.log "found it!". If not then change the user with property name Matheus to Sebastian



//// SOLUTION


// let found = false;
// let indexOfMatheus = 0;

// usersInfo.forEach(function (element,index) {

//   //if statement to check for the name property
//   if ( element.name === 'Sebastian' ){

//     found = true;

//   }

//   //if statement to save the index of matheus
//   if( element.name === 'Matheus'){

//     indexOfMatheus = index;

//   }

// })

// if(found){

//   console.log("Found it!")

// }else{

//   console.log("User with name Sebastian doesn't exist, will change it")

//   usersInfo[indexOfMatheus].name = "Sebastian";

//   console.log(usersInfo)

// }

//--------------------------------------------
// indexOf: will return the index of the element in the array
//--------------------------------------------


// let carBrands = ['volkswagen','audi','bmw', 'porsche', 'jaguar', 'renault'];
// let deletedElements = [];

// let indexOfElement =  carBrands.indexOf('bmw');

// console.log('This is the index of the element bmw',indexOfElement)

//--------------------------------------------
// pop: it will delete the last element of the array and return the deleted element
//--------------------------------------------

// let deletedElement = carBrands.pop()

// // Adding the deleted element from carBrands to the array deletedElements
// deletedElements.unshift(deletedElement)

// console.log(carBrands)
// console.log(deletedElement)
// console.log(deletedElements)


//--------------------------------------------
// shift: it will delete the first element from the array and return the deleted element
//--------------------------------------------

// deletedElement = carBrands.shift()

// deletedElements.unshift(deletedElement)

// console.log(carBrands)
// console.log(deletedElement)
// console.log(deletedElements)



//--------------------------------------------
// Third Exercise: indexOf practice
//--------------------------------------------
let arrayOfusers = [
  ['Safwan','Gabor','Jon', 'Manon','Ljiljana','Nargiza','Santiago'],
  ['Gabor','Glauber', 'Manon','Ljiljana','Daniel','Santiago'],
  ['Gabor','Jon', 'Safwan','Manon','Arif','Nargiza','Matheus'],
  ['Matheus','Jon', 'Manon','Ljiljana','Nargiza','Santiago','Safwan'],
  ['Gabor','Safwan','Jon', 'Manon','Ljiljana','Nargiza','Santiago'],
  ['Safwan','Gabor','Jon', 'Manon','Ljiljana','Nargiza','Santiago'],
]

// until 12:09.

// Find the index of 'Safwan' in each of the arrays inside the arrayOfUSers. 
// Use Foreach for the arrayOfUsers and use indexOf to find Safwan.

// SOLUTION

// let arrayOfIndex = [];

// arrayOfusers.forEach(function (element) {

//   arrayOfIndex.push(element.indexOf('Safwan'))

// })

// console.log(arrayOfIndex)

//--------------------------------------------
//Splice: deletes one or more elements starting from a certain position.
//--------------------------------------------

// let users = ['Safwan','Gabor','Jon', 'Manon','Ljiljana','Nargiza','Santiago'];

// let deleted = users.splice(3,2);

// console.log(users)
// console.log(deleted)



//--------------------------------------------
// Forth Exercise: Use of splice to delete
//--------------------------------------------

let menu = [
  { name:'Falafel', type : 'veggie'},
  { name:'meatballs', type : 'meat' },
  { name:'dhal', type : 'veggie'},
  { name:'seitan', type : 'vegan'},
  { name:'biriyani', type: 'meat'},
  { name:'Burger', type : 'meat'},
  { name:'Humus', type : 'vegan'},
  { name:'Pasta with Pesto', type : 'veggie'},
  { name:'lasagna', type : 'meat' },
  { name:'Coconut rice', type: 'vegan'},
  { name:'Spanish Omelette', type: 'meat'},
];


// 15 minutes task, 13:45.
// Take the array Menu and delete all elements with type meat. DONT create a new array for menu. 
// Obtain the index of the meat foods and then delete with splice.

// SOLUTION

// let indexOfMeat = [];

// menu.forEach(function (element, index) {
//     if (element.type === 'meat') {
//         indexOfMeat.push(index);
//     }
// });

// indexOfMeat.forEach( function (element,index) {

//   // console.log('Loop',index+1)
//   // console.log(menu.slice())
//   // console.log('original index',element)
//   // console.log('indexOfMeat index',index)
//   // console.log('fixed',element-index)
//   menu.splice(element-index,1)

// })

// console.log(menu)

// console.log(indexOfMeat)


//--------------------------------------------
// Uses of Splice
//1. Splice(initialPosition,#ofElementsToDelete): Splice will delete starting from initialPosition 
//                                            and delete as many elements as #ofElementsToDelete says 
//2. Splice(initialPosition,#ofElementsToDelete,newElement,...): Splice will delete starting from initialPosition 
//                                            and delete as many elements as #ofElementsToDelete says and then 
//                                            add the newElements from the initialPosition 
//3. Splice(initialPosition,0,newElement,...): Splice will add starting from initialPosition and add the newElements
//--------------------------------------------

// let users = ['Safwan','Gabor','Jon', 'Manon','Ljiljana','Nargiza','Santiago'];

// // Second case of Splice use.
// let changedElements = users.splice(2,4,'Daniel','Matheus','Arif')

// console.log(users)
// console.log(changedElements)

// //Third case of Splice use.

// let deletedElements = users.splice(1,0,'Nils','Glauber','Rashad')

// console.log(users)
// console.log(deletedElements)



//--------------------------------------------
// Forth Exercise: Use of splice to exchange
//--------------------------------------------


// let veggieOptions = [
//   {name:'apple-pie',type:'veggie'},
//   {name:'margarita pizza',type:'veggie'},
//   {name:'musli',type:'veggie'},
//   {name:'quinoa burger',type:'veggie'},
//   {name:'potato salad',type:'veggie'},
// ]

// // Change the elements with type meat from the menu array, use the veggieOptions array to obtain the replacing elements.


// SOLUTION

// let indexOfMeat = [];

// menu.forEach(function (element, index) {
//     if (element.type === 'meat') {
//         indexOfMeat.push(index);
//     }
// });

// indexOfMeat.forEach( function (element,index) {

//   console.log('Loop',index+1)
//   console.log(menu.slice())
//   console.log('original index',element)
//   console.log('indexOfMeat index',index)
//   // console.log('fixed',element-index)
//   menu.splice(element,1,veggieOptions[index])
//   console.log(menu)

// })
// console.log(menu)