console.log(`Hello FbW39`)
/**
 * Create a table in the html file
 * give the table an id
 
 * in the head element there should be <th> with word Age :
 * create a form with name attribute search
 * the task : use querySelector
 * bring the age <td> 
 * bring the form with attribute name=search
 * bring the whole table
 * bring the whole body
 * list of the whole elements inside body
 * 
 */


 //select the submit input in the form search

 let searchElement = document.querySelector('form[name="searchForm"]').querySelector('input[name="submit"]');
// let searchElement = document.getElementsByName('searchForm')[0];
console.log(searchElement);
searchElement.addEventListener('click', event => {
    event.preventDefault();
    //let input = document.querySelector('form [type="text"]');

    let search = document.querySelector('form').search;
    console.log(search.value);

    let result = document.querySelector(search.value);
   
    // if (search.value == 'body') {
    //     result = Array.from(result.children);
    // }
    console.log(result.children);
});


