
//instance vs static methods
// instance I can use them with any instance
// static only with the Original object

// const x = new Array(1, 2, 3); // same like [1,2,3]
//Date() constructor:

let date1 = new Date(); // brings the current date in local time

let date2 = new Date('August 19 2020');
date2 = new Date('1997 12 16');
date2 = new Date(1971,0,1); // the month is 0 indexed
console.log(date2);

//static method : used with the constructer 'Date'
//Date.now() : retruns milliseconds since Jan 1, 1970
let startTime = Date.now();
console.log(startTime);

//instance mthods : used with any instance
// .getDate() : return a day of month in local time
// retrun a number between 1 and 31
const birthdate = new Date('SUN Nov 1 2015 18:25');
const dayOfBirthMonth = birthdate.getDate();
// console.log(dayOfBirthMonth);
// .getDay() : get day of week , 0:Sunday - 6:Saturday  
const dayOfBirthWeek = birthdate.getDay();
console.log(dayOfBirthWeek);

// date.getTime() : returns the milliseconds since 1970 Jan 01 till the date provided.
let time = date2.getTime();

console.log(time);

let dateOfTime = new Date(time);

console.log(dateOfTime);


//.getFullYear() & .getUTCFullYear()
// : year local time & year universal time

let year = dateOfTime.getUTCFullYear();
console.log(year);

//.getMonth() & .getUTCMonth();
// : month local time & month universal time

let month = dateOfTime.getUTCMonth();
console.log(month);


console.log(month);



//Example :
/**
 * the date I started uni : 'Jan 01 1971'
 * I stay in the uni till : 'Sep 15 1975'
 * Calculate how many years I've spen there .. 
 */


 //cal the diff between these two dates :
//getTime() : returns milliseconds since 1970 Jan 01;
// let satrtDate = Math.round(new Date('Jan 01 1971').getTime() / 1000 / 60 / 60 / 730.001);
// console.log(satrtDate);
// let endDate = Math.round(new Date('Sep 15 1975').getTime() / 1000 / 60 / 60 / 730.001);
// console.log(endDate);


// let diff = endDate - satrtDate; // this is a milliseconds

/**
 * 
 * @param {Date} date1 start date
 * @param {Date} dtate2 end date
 */
// function clalcYears(date1, date2) {
//     // let months1 = date1.getTime() / 1000 / 60 / 60 / 730.001;
//     // let months2 = date2.getTime() / 1000 / 60 / 60 / 730.001;
//     // return Math.abs(months2 - months1);

  

    
// }

// console.log(clalcYears(new Date('Jan 01 1971'), new Date('Sep 15 1975')));


// Enhanced function
/**
 * 
 * @param {Date} date1 start date
 * @param {Date} dtate2 end date
 */
function clalcYears(date1, date2) {
    
    return Math.abs(date1.getFullYear() - date2.getFullYear());

  

    
}

console.log(clalcYears(new Date('Jan 01 2004'), new Date('Sep 15 2009')));

//setTimeout(function(){} , milliseconds)
// let someId;
// function showBox() {
    
// // setTimeout(function () {
// //     document.write(`
// //     <div style=' margin: 0 auto;
// //     padding: 50px;
// //     width: 150px;
// //     background-color: blue;'>Hello I am limited by time :( !! </div>`);
// // }, 3000);
    
//     someId = window.setTimeout(function () {
//         alert('Hello after 2 sec')
//     },2000);
// }
 

function  showBox() {
    div.style.display = 'block';
    div.innerHTML += `This box will disappear afetr 10 sec !!`;
    setTimeout(function () {
        div.style.display = 'none';
    }, 10000);
}






