/**
 * 10 minutes : 13:55 till 14:05
 * please create an array of 12 months
 * every month is a string
 * please sort them from Jan to Dec
 */


 let months = [{name:'march', order:3}, {name:'feb', order:2},{name:'dec', order:12},{name:'jan', order:1},{name:'oct', order:10}];

//  months.sort(function (a, b) {
//      if(a == 'jan'){
//          return -1;
//      } else if(a == 'feb' && b !==  'jan'){
//         return -1;
//     }else if(a == 'march' && b !== 'feb' &&  b !=='jan'){
//         return -1;
//     } else if(a == 'oct' && b == 'dec'){
//         return -1;
//     }
     
//  });

months.sort(function (a, b) {
    return a.order - b.order;
});
// console.log(months);

// Matheus solution  :
const sortedMonths = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];


const unsortedMonths = ["july", "june", "february", "may", "march", "august", "november", "december", "january", "april", "september", "october"];


unsortedMonths.sort(function (a, b){
   // if the indexof a in my sorted array is less than indexof b in my sorted array
   // then bring a before b :  return negative
   return sortedMonths.indexOf(a) - sortedMonths.indexOf(b);
});


/**
 * please sort the months alphabetically 
 */
const adamMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

adamMonths.sort();
// console.log(adamMonths);

/*-------------Last Assignemnt----------------- */

const myData = [{
    name: 'ReactJS',
    type: 'javascript',
    rank: 2
}, {
    name: 'Bootstrap',
    type: 'css',
    rank: 3
},
{
    name: 'JSON',
    type: 'datatype',
    rank: 2
}, {
    name: 'AngularJS',
    type: 'javascript',
    rank: 4
},
{
    name: 'VSCode',
    type: 'editing',
    rank: 1
},
 {
    name: 'Google.com',
    type: 'search',
    rank: 1
},{
    name: 'iPad',
    type: 'device',
    rank: 1
}, {
    name: 'Hamburger SV',
    type: 'football team',
    rank: 5
},{
    name: 'Family',
    type: 'relation',
    rank: 0
    
}
];

/**
 * homework
 * please create a table to showData using a function when click on show button
 * please create three other buttons to sort the rows :
 * sortByName()
 * sortByType()
 * sortByRank()
 * 
 * When the table is sorted it changes the view as well
 */


 // * please create a table to showData using a function when click on show button

//Show Data function :
 function showData(){
     table.classList.add('data');
    display.innerHTML = ``;
    for (let index = 0; index < myData.length; index++) {
        // '+=' : means adding extra elements , while '=': means replace
        display.innerHTML +=`<tr>
        <td>${index+1}</td>
        <td>${myData[index].name}</td>
        <td>${myData[index].type}</td>
        <td>${myData[index].rank}</td>
       </tr>
       `;
    }
 }

 // * sortByName()

 function sortByName(){
    table.classList.remove('data');
     // take isolated copy keep the refernce safe
     let sortedByName = myData.slice();
     sortedByName.sort(function(a , b){
       //make case insensitive compare
        if(a.name.toUpperCase() < b.name.toUpperCase()){
            return -1;
        }else{
            return 1;
        }
        
     });
     display.innerHTML = ``;


     for (let index = 0; index < sortedByName.length; index++) {
        // '+=' : means adding extra elements , while '=': means replace
        display.innerHTML +=`<tr>
        <td>${index+1}</td>
        <td>${sortedByName[index].name}</td>
        <td>${sortedByName[index].type}</td>
        <td>${sortedByName[index].rank}</td>
       </tr>
       `;
    }
     console.table(sortedByName);
 }

 // * sortByType()

 function sortByType(){
    table.classList.remove('data');

    // take isolated copy keep the refernce safe
    let sortedByType = myData.slice();
    sortedByType.sort(function(a , b){
      //make case insensitive compare
       if(a.type.toLowerCase() < b.type.toLowerCase()){
           return -1;
       }else{
           return 1;
       }
       
    });
    display.innerHTML = ``;


    for (let index = 0; index < sortedByType.length; index++) {
       // '+=' : means adding extra elements , while '=': means replace
       display.innerHTML +=`<tr>
       <td>${index+1}</td>
       <td>${sortedByType[index].name}</td>
       <td>${sortedByType[index].type}</td>
       <td>${sortedByType[index].rank}</td>
      </tr>
      `;
   }
    console.table(sortedByType);
}


 // * sortByRank()

 function sortByRank(){
    table.classList.remove('data');

    // take isolated copy keep the refernce safe
    let sortedByRank = myData.slice();
    sortedByRank.sort(function(a , b){
      return a.rank - b.rank;
     
       
    });
    display.innerHTML = ``;


    for (let index = 0; index < sortedByRank.length; index++) {
       // '+=' : means adding extra elements , while '=': means replace
       display.innerHTML +=`<tr>
       <td>${index+1}</td>
       <td>${sortedByRank[index].name}</td>
       <td>${sortedByRank[index].type}</td>
       <td>${sortedByRank[index].rank}</td>
      </tr>
      `;
   }
    console.table(sortedByRank);
}