
/*------------- Assignemnt----------------- */

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



//Show Data function :

//showData : defining the tool
function showData(data , resultDisplay) {
       
       resultDisplay.innerHTML = ``;
       for (let index = 0; index < data.length; index++) {
          
           resultDisplay.innerHTML +=`<tr>
           <td>${index+1}</td>
           <td>${data[index].name}</td>
           <td>${data[index].type}</td>
           <td>${data[index].rank}</td>
          </tr>
          `;
       }
}

//sortByType()
function sortByType(data) {
    

    // take isolated copy keep the refernce safe
    let sortedByType = data.slice();
    return sortedByType.sort(function(a , b){
      //make case insensitive compare
       if(a.type.toLowerCase() < b.type.toLowerCase()){
           return -1;
       }else{
           return 1;
       }
       
    });
    
}

//sortByName() -- please create this tool
//sortByRank()-- please create this tool


function showDataHandler() {
     // using the tool
     showData(myData, display);
 }

 // change sortByNameHandler by using sortByName() and showData()

 function sortByNameHandler(){
    // table.classList.remove('data');
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

 function sortByTypeHandler(){
     let sorted = sortByType(myData);
     showData(sorted, display);
}


 // change sortByRankHandler by using sortByRank() and showData()

 function sortByRankHandler(){
    // table.classList.remove('data');

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

 // create a filter input with a button , have a list of types, to filter according to the input value , and the result is sorted by type and then presented to the filtered table

 //* creating a button called filter - done in index.html

 // * prepare a list of keywords
// const wordsList = [];
for (let index = 0; index < myData.length; index++) {
    // wordsList.push(myData[index].type);
    keyWords.innerHTML += `<li>${myData[index].type}</li>`;
    
}



// handel the filter action

// a filter function - tool 
function filterArray(someArr, word) {
    return someArr.filter(function (item) {
        
        if (item.type != word) {
           
            return item;
        }
    });
}
// Handel the click event of filter button
function dataFilter() {
    
    //make a safe copy
    let filteredArray = myData.slice();
    
    // getting the word typed in the input elementt
    let filterWord = document.getElementById('filter').value;
   
    // use a filter tool
    filteredArray = filterArray(filteredArray, filterWord);
    
    // re-using the sort by type tool
    let sortedArray = sortByType(filteredArray);

     // re-using the show data tool
    showData(sortedArray, filteredDisplay);

}


 