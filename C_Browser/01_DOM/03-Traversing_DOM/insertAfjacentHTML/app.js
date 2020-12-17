const btnTry = document.getElementById('tryIt');

// const myFunction = () => {
//     console.log('Hoooray');
// }

btnTry.addEventListener('click', myFunction);

function myFunction() {
    let h2 = document.getElementById('myH2');
    let position = document.getElementById('adjacentPosition').value;
    h2.insertAdjacentHTML(position, "I am the new text");
    

    console.log(h2);
    
}
 
const addLi = document.getElementById('addLi');

addLi.addEventListener('click', () => {
    let oldItem = document.querySelector('.myItem');
    (oldItem) ? oldItem.remove() : console.log('fisrt time');
    let position = document.getElementById('adjacentPosition').value;
    let list = document.querySelector('.list');
    let li = document.createElement('li');

    li.classList.add('myItem');
    li.innerHTML = `I have the position: ${position}`;


    list.insertAdjacentElement(position, li);
});

/* Adjacent Positions :

    * beforebegin : out side and before the element

    * afterbegin : in side and the first child of the element

    * beforeend : in side and the last child of the element

    * afterend : out side and after the element
*/

