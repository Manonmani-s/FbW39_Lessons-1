let val;

const list = document.querySelector('ul.collection');

const firstListItem = document.querySelector('li.collection-item:first-child');

// optional psudo selector

val = list;
val = firstListItem;


//Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;
//Refer to : https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

/** .nodeType returns integer as below :
 * (1)  Element
 * (2)  Attr
 * (3)  Text node
 * (8)  comment
 * (9)  Document it self
 * (10) Doctype
 */


//Get children : brings the element nodes
val = list.children;
val = list.children[1];
val = list.children[1].textContent;
list.children[1].textContent = `Hello`;
//Children of children
val = list.children[2].children[0].children[0].children;

list.children[0].children[0].id = 'test-link';
val = list.children[0].children[0];
val = document.getElementById('test-link');

//First Child :
val = list.firstChild.nodeType; // first Node child (could be text Node)
val = list.firstElementChild.firstElementChild.firstElementChild; //(only HTML Element Node)

//Last Child :
val = list.lastChild.nodeType; // last Node child (could be text Node)
val = list.lastElementChild.nodeType; //(only HTML Element Node)

//Count children (child elements):

val = list.children.length;
val = list.childElementCount; // faster
// there is no childNodesCount untill 2020 ;)


// Get parent :

val = firstListItem.parentNode.nodeType;
val = document.body.parentNode.parentNode.nodeType; // document

val = firstListItem.parentElement;

val = document.body.parentElement.parentElement; // null

//Get next Sibling

val = firstListItem.nextSibling; // next Sibling Node (any type);

val = firstListItem.nextElementSibling; // next HTML Elemnt Sibling

// next of next (more steps ...)
val = firstListItem.nextElementSibling.nextElementSibling.nextElementSibling;

//Get prev Sibling
val = firstListItem.previousSibling; // previous Sibling Node (any type);
val = firstListItem.previousElementSibling;
 val = list.lastChild.previousSibling.previousElementSibling; // previous HTML Elemnt Sibling





console.log(val);