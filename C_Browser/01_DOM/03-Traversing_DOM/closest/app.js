//Ancestors of an element are: parent, the parent of parent, its parent and so on. The ancestors together form the chain of parents from the element to the top.

//The method elem.closest(css) looks for the nearest ancestor that matches the CSS-selector. The elem itself is also included in the search.

//In other words, the method closest goes up from the element and checks each of parents. If it matches the selector, then the search stops, and the ancestor is returned.

let val;

let chapter = document.querySelector('li.chapter:last-child');

val = chapter;


// getting the closest ancestor with css selector .chapter

val = chapter.closest('.chapter');

// getting the closest ancestor with css selector .book

val = chapter.closest('.book');

// getting the closest ancestor with css selector h3

val = chapter.closest('h3'); // null (because h3 is not an ancestor)

val = document.querySelector('a').closest('h3');

//getting the closest ancestor with css selector html

val = chapter.closest('html'); 

console.log(val);