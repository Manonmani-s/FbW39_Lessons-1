const search = () => {
    // single elemnt by the id : id must be unique
    let search = document.getElementById('search');
    
    //get elements by class name : HTMLCollection (array-like) array-like structure
    // let elements = Array.from(document.getElementsByClassName(search.value));
   
    //get elements by tag name : HTMLCollection (array-like)
   // let elements = document.getElementsByTagName(search.value);
    /**
     
     * querySelector brings the first match
     * querySelectorAll brings all the matches
     * querySelector returns single Elemnent
     * querySelectorAll returns NodeList
     *  possible options for querySelector / querySelectorAll :
     * .className
     *  #id
     * tagName
     * or tagName[attributName=value]
     */
    // let element = document.querySelector(search.value);
    let elements =Array.from(document.querySelectorAll(search.value)) ;



    console.log(elements);
};

let test = document.querySelectorAll('div>div.first_div');
console.log(test);