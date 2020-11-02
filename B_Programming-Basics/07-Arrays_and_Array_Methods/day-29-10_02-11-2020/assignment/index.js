// making a safe copy oif my original
// take original array and return a safe copy
/**
 * 
 * @param {Array} original 
 */
function makeSafeCopy(original) {
    //slice is making isolated copy
    return original.slice();

     

}


let students = [{
    name: 'Safwan',
    grade: '75'
}, {
    name: 'alal',
    grade: '52'
}, {
    name: 'tatat',
    grade: '39'
}, {
    name: 'hahah',
    grade: '60'
}, {
    name: 'zaza',
    grade: '87'
}];


let courses = [{
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


// using the function makeSafeCopy and passing actual values
let filteredCourses = makeSafeCopy(courses);

// onclick="revretBackToOriginal() 

function revretBackToOriginal() {
    filteredCourses = makeSafeCopy(courses);
    console.log(filteredCourses);
    
    
}



// courses = courses.filter(filterFunction);
// please write the functions and uase them in the handlers

/**
 * the tools functions , e.g. :
 * showData()
 * filter() -- 
 * ...
 * 
 * The handlers
 * The displaying :
 * 
 * showDataHandler()
 * 
 * The filters :
 * pleas make sure the filters will change the original array
 
 */
 
 //* dataFilterNames()
 


 //tool : filterNames()

function filterNames(array, name) {
  
    return array.filter(function (element) {
       //make case insensitive
        if (element.name.toLowerCase() != name.toLowerCase()) {
            return true;
        }
  });
    
  
}

  
// let test = [{ name: 'Bootstrap' }, { name: 'ReactJS' }, { name: 'NodeJS' }];
// console.log(test);

// let word = 'NodeJS';
// test = filterNames(test, word);
// console.log(test);

// newArr [{ name: 'Bootstrap' },{ name: 'ReactJS' }]


//handler : filterNames Handler
function dataFilterNames() {
    //bring the name to filter out
    let word = document.getElementById('filter').value;
    // use a filter tool -change the original

    filteredCourses = filterNames(courses, word);
    // console.log(filteredCourses);
    // console.log(courses);

    
}


 // dataFilterTypes()

 // define the filterTypes function 
function filterTypes(array, type) {
    return array.filter(function (element) {
       //make it case insensitive
        return element.type.toLowerCase() != type.toLowerCase();
    });
}

// dataFilterTypes() define the handler
function dataFilterTypes() {
    //bring the 'type' which is the value of the input element
    let word = document.getElementById('filter').value;
    // (use | call) the filterTypes tool :
    // change the original
    filteredCourses = filterTypes(courses, word);
    // console.log(courses);
}
     
//dataFilterRanks() -- tool and handler 

//define the filterRanks() function
function filterRanks(array, rank) {
    return array.filter(function (item) {
        return item.rank != rank;
    });
}
// add a reset function to get back original array
// this will be a home work

// define the handler

function dataFilterRanks() {
    //get the value of the filter input
    let rank = document.getElementById('filter').value;
    if (rank == '') alert(`please enter a number`);
    else{// call the filterRanks function
    //assign it's returned value to the original courses
    filteredCourses = filterRanks(courses, rank);

        // console.log(courses);
    }
    
}

/*
* showDataHandler() ; it shows the data even if not filtered or sorted
*/

//show data tool :
/**
 * 
 * @param {Array<{name:string, type:string, rank:number}>} array the array that includes the data to be presented.
 * @param {HTMLElement} hElement the html element :'<tbody>' to show the data inside.
 * 
 */
function showData(array, hElement) {
    //here is my algorithm :
    //loop is required 
    //in each iteration I need to read  the current array item 
    //and show this current array item in the html element
    
    //bring tbody by id display -- here we don't have actual values, we have only the param: 'hElement'
   // hElement.innerHTML = `${array}`; // the loop is important to show verey iteration a piece of data
    hElement.innerHTML = ``; // reseting the data in my table
    // we don't use actual values : array is not courses yet , it is only expected to be courses
    // just use the param : 'array'
    for (let i = 0; i < array.length; i++) {
       //here we need to add '+=' each piece of data to our html element
        hElement.innerHTML += `<tr>
        <td>${i+1}</td>
        <td>${array[i].name}</td>
        <td>${array[i].type}</td>
        <td>${array[i].rank}</td>

    </tr>`;
        
    }

}
//

//showDataHandler() -- responding to the click event 
function showDataHandler() {
    
    //bring on the valuse to be passed ot the tool
    let element = document.getElementById('display'); 

    // use show data tool
    
    showData(filteredCourses, element);
    
}


/*  * 
 * The sorting :
 * please make a safe copy using : slice() method
 * sortByNameHandler()
 * sortByTypeHandler()
 * sortByRankHandler()
 */
function sortByNames(array) {
    return array.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        } else {
            return 1;
        }
    });
}

function sortByNameHandler() {
    //bring display
    let dataHTMLContainer = document.getElementById('display');
    //make safe copy
    let sorted = makeSafeCopy(filteredCourses);
    //use sorting tool
    sortByNames(sorted);
    // show the sorted
   
    console.log(sorted);
    showData(sorted, dataHTMLContainer);
    

}


function sortByType(array) {
    return array.sort(function (a, b) {
        if (a.type.toLowerCase() < b.type.toLowerCase()) {
            return -1;
        } else {
            return 1;
        }
    });
}

function sortByTypeHandler() {
    //bring display
    let dataHTMLContainer = document.getElementById('display');
    //make safe copy
    let sorted = makeSafeCopy(filteredCourses);
    //use sorting tool
    sortByType(sorted);
    // show the sorted
   
    console.log(sorted);
    showData(sorted, dataHTMLContainer);
    

}


function sortByRank(array) {
    return array.sort(function (a, b) {
        return a.rank - b.rank;
    });
}

function sortByRankHandler() {
    //bring display
    let dataHTMLContainer = document.getElementById('display');
    //make safe copy
    let sorted = makeSafeCopy(filteredCourses);
    //use sorting tool
    sortByRank(sorted);
    // show the sorted
   
    console.log(sorted);
    showData(sorted, dataHTMLContainer);
    

}







// let number1 = 10;
// let number2 = 5;

// // let result = number1 + number2;

// // number1 to have the result of number1 + number2
// // number1 = number1 + number2;
// number1 = number1 + number2; // complete sytax
// console.log(number1);

// number2+= number1; // short sytax
// console.log(number2);




