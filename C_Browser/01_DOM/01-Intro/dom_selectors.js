// document.getElementById();
const paragraghElement = document.getElementById('paragragh');
paragraghElement.innerHTML = ' <h2>Just changing the innerHTML</h2> <span>Hey we are writing a HTML code inside JS object</span>';
// console.log(paragraghElement.innerText);
// console.log(paragraghElement.id);
paragraghElement.classList.add('someClass');
// console.log(paragraghElement.classList);
// console.log(paragraghElement.className);
paragraghElement.style.padding = '20px';
paragraghElement.style.marginBottom = '60px';


// let obj1 = {
//     html: ' <h2>Just changing the innerHTML</h2> <span>Hey we are writing a HTML code inside JS object</span>',
//     style: {

//     }
// };
// obj1.style.padding = '20px';


// document.getElementsByTagName();
const elementsCollection = document.getElementsByTagName('div');

console.log(elementsCollection);
//style the unstyled box same as the dummy box
// use document.getElementsByTagName(); to select this 'div'
elementsCollection[1].classList.add('box');
elementsCollection[1].innerHTML = '<h1>Now is is styled!!!</h1>';