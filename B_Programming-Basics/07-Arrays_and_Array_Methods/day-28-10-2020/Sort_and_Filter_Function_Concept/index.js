
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

const courses = [{
    name: 'ReactJS',
    type: 'Web development FrontEnd',
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
    type: 'Web development FrontEnd',
    rank: 4
},
{
    name: 'git',
    type: 'vcs',
    rank: 1
},
 {
    name: 'NodeJS',
    type: 'Web development BackEnd',
    rank: 1
},{
    name: 'MongoDB',
    type: 'database',
    rank: 1
}, {
    name: 'MySQL',
    type: 'database',
    rank: 5
},{
    name: 'VueJS',
    type: 'Web development FrontEnd',
    rank: 0
    
}
];



//Show Data function :

//showData : defining the tool
/**
 * @author FbW39
 * @param {Array<[{name: string , type: string , rank: number }]>} data 
 * @param {HTMLElement} resultDisplay 

 * @returns {void}
 */
function showData(data , resultDisplay) {
   
    const temp = 0;
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
/**
 * 
 * @param {Array<Object>} data
 * @returns {Array<Object>} 
 * @author  FbW39 
 * 
 */
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
/**
 * 
 * @param {Array<Object>} data 
 * @returns {Array<Object>}
 */

//sortByName() -- please create this tool
function sortByName(data) {
    // data parameter:as per our definition is to accept a value of array of objects.
    // our definition says that  every object in the array should be like below :
    /**
     * {
     * name :'string',
     * type:'string',
     * rank:'number'
     * }
     */

    // take isolated copy keep the refernce safe
    let sortedByName = data.slice();
    
    //sort ascending alphabetically 
    return sortedByName.sort(function(a , b){
      //make case insensitive compare
       if(a.name.toLowerCase() < b.name.toLowerCase()){
           return -1;
       }else{
           return 1;
       }
       
    });
    
}


//sortByRank()-- please create this tool

/**
 * 
 * @param {Array<{name : string, type: string, rank : number}>} data  data this param is array of objects and every object consist of three props name , type and rank
 * @returns  {Array<{name : string, type: string, rank : number}>} this function return a sorted by rank array
 */

function sortByRank(data) {

    //make safe copy
    const sorted = data.slice();
    return sorted.sort(function (a, b) {

        /*
        * Shorter solution
        * return a.rank - b.rank
        */
        
        // sort by rank
        if (a.rank < b.rank) {
            //put a before b
            return -1;
        } else {
            //when a.rank greartor than b.rank
            //put a after b - (b before a)
            return 1;
        }
    });
 
}



function showDataHandler() {
     // using the tool
     showData(myData, display);
 }

 // change sortByNameHandler by using sortByName() and showData()

 function sortByNameHandler(){
   // first get a soretb by name array
     const sorted = sortByName(myData);
     // second show the sorted array
     showData(sorted, display);
     
 }

 // * sortByType()

 function sortByTypeHandler(){
     let sorted = sortByType(myData);
     showData(sorted, display);
}


 // change sortByRankHandler by using sortByRank() and showData()

 function sortByRankHandler(){
    // use sortByRank()
     const sorted = sortByRank(myData);
    // use showData()
    showData(sorted, display);
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
    
    // re-using the sort by name tool
    let sortedArray = sortByRank(filteredArray);

     // re-using the show data tool
    showData(sortedArray, filteredDisplay);

}


 