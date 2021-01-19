console.log(`Hello !!`);

//JS Object Notation :
let myObj = { "name": "John", "age": 30, "course": "FbW39" };

let array = [1, 'Safwan', { name: 'John', age: 35 }];


//When we need to send (or save) it, make it string.
let data = JSON.stringify(array);


//to understand recived stringified data, we need to parse it :

let parsedData = JSON.parse(data);
console.log(parsedData);


/******--Local Storage--********/

//Saving Data to localStorage:

// 1. you need to stringify the data

// localStorage.setItem("test", data);
// the key should be string, as well as the value

// Reading Data from localStorage:
// it returns stringified data
// important to parse it
let read = JSON.parse(localStorage.getItem("test"));

console.log(read);

// Reset localStorage

localStorage.clear();

// removing item from localStorage
localStorage.removeItem("test");

// example : add | remove  item, in the list

showList = () => {
    let ul = document.getElementById('list');
    ul.innerHTML = ``;
    //handle when there is no list in LS
    try {
        items = JSON.parse(localStorage.getItem("list"));
        if (!items) {
            throw new Error('No List to Show !!!')
        }
        
    } catch (error) {
       
     document.getElementById('error').innerHTML = `${error.message}`;
     document.getElementById('error').style.visibility = 'visible';
     setTimeout(() => {
         document.getElementById('error').style.visibility = 'hidden';
     }, 5000);
     return error;
    }
    
    items.forEach(element => {
        ul.innerHTML += `
       <li> ${element} </li>
       `;
    });
    
    console.log(items);
};

// handlers :
addItem = e => {
    e.preventDefault();
    //save input value in localStorage
    let item = document.getElementById('inpt').value;
  

    /**
     * 
     * get the list from storage
     * if no list yet create it now
     * parse it
     * push new item
     * stringify list
     * set the list back
     */

    let items = JSON.parse(localStorage.getItem("list"));
    //(! items) : means there is no items
    if (!items) {
        items = [item];
    } else {
        items.push(item);
    }

    localStorage.setItem("list", JSON.stringify(items));

    showList();
    // //Show the list in html
    // let ul = document.getElementById('list');
    // ul.innerHTML = ``;
    //  items = JSON.parse(localStorage.getItem("list"));
    // items.forEach(element => {
    //     ul.innerHTML += `
    //     <li> ${element} </li>
    //     `;
    // });
     
    // console.log(items);

};

deleteItem = e => {
    e.preventDefault();
    let item = document.getElementById(`inpt2`).value;
    //when deleting empty item
    try {
        if (item == '') throw new Error('Deleting empty item is not possible !!!');
    } catch (error) {
        console.log(error);
        document.getElementById('error').innerHTML = `${error.message}`;
        document.getElementById('error').style.visibility = 'visible';
        setTimeout(() => {
            document.getElementById('error').style.visibility = 'hidden';
        }, 5000);
        return error;
    }
    //handle when there is no list in LS 
    //Error.message : there are no items yet !!
   try {
       items = JSON.parse(localStorage.getItem("list"));
       if (! items) {
           throw new Error('there are no items yet !!');
       }
   } catch (error) {
    console.log(error);
    document.getElementById('error').innerHTML = `${error.message}`;
    document.getElementById('error').style.visibility = 'visible';
    setTimeout(() => {
        document.getElementById('error').style.visibility = 'hidden';
    }, 5000);
    return error;
   }

    //handle when the item is not in the list 
    //Error.message : the item doesn't exist in the list !!
    try {
        if (items.indexOf(item) < 0) throw new Error(`the item doesn't exist in the list !!`);
        
    } catch (error) {
     console.log(error);
     document.getElementById('error').innerHTML = `${error.message}`;
     document.getElementById('error').style.visibility = 'visible';
     setTimeout(() => {
         document.getElementById('error').style.visibility = 'hidden';
     }, 5000);
     return error;
    }

    items = items.filter(element => element != item);
    localStorage.setItem("list", JSON.stringify(items));
    showList();
    // let ul = document.getElementById('list');
    // ul.innerHTML = ``;
    // items = JSON.parse(localStorage.getItem("list"));
    // items.forEach(element => {
    //     ul.innerHTML += `
    //    <li> ${element} </li>
    //    `;
    // });
    
    // console.log(items);
    

};

show = () => {

    showList();
    // let ul = document.getElementById('list');
    // ul.innerHTML = ``;
    // items = JSON.parse(localStorage.getItem("list"));
    // items.forEach(element => {
    //     ul.innerHTML += `
    //    <li> ${element} </li>
    //    `;
    // });
    
    // console.log(items);
};


/**
 * create new two inputes in the html
 * one specifies the old item
 * one specifies thge new item
 * buttom replace
 */


replaceBy = e => {
    e.preventDefault();
    let oldItem = document.getElementById('oldItem').value;
    let newItem = document.getElementById('newItem').value;
    //we neeed to handle when there is no list in LS
    let items = JSON.parse(localStorage.getItem('list'));
   //we need to handle when oldItem not in the list
    let indexOfOldItem = items.findIndex(element => element == oldItem);
    items.splice(indexOfOldItem, 1, newItem);
    localStorage.setItem('list', JSON.stringify(items));
    showList();
};

console.log(sessionStorage.getItem('name'));




