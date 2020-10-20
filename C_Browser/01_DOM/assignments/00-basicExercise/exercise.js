//EX1

/**
 * create an empty 'div' in the html file.
 * //done!
 * give it an id
 * //done!
 * in the js file select it by id
 * style it as abox by adding a box class to it from js
 * add inner html elemnts
 * two 'h1''s next to each other
 * under the 'h1''s one 'p'
 * the  box bc is red
 * //Done !
 * the box color is white
 *  //Done !
 * the 'h1''s bc is green
 *  //Done !
 * the 'h1''s color is white
 *  //Done !
 * the 'p' bc is lightblue
 * //Done !
 * the 'p' color is red
 * //Done !
 *  */

//in the js file select 'div' by id
// const element = document.getElementById('test');

//style it as abox by adding a box class to it from js
// element.classList.add('box');

// add inner html elemnts
//  * two 'h1''s next to each other
//  * under the 'h1''s one 'p'

// element.innerHTML = ' <h1>Title1</h1><h1>Title2</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestias officia voluptas, quidem est reiciendis quasi ab officiis perspiciatis quae minus quisquam. Quos deserunt perferendis illo tempore quisquam cum explicabo.</p>';

//EX2
/**
 * create in the html file three different 'div' elements.
 * //done!
 * create in the css file three classes named box1 box2 box3
 * //done!
 * in js file do the below :
 * get the div elements by tag name
 * assign box1 to the first div 
 * assign box2 to the second div 
 * assign box3 to the third div 
 */

//get the div elements by tag name
const divisions = document.getElementsByTagName('div');
console.log(divisions);

//* assign box1 to the first div 
divisions[0].classList.add('box1');

//* assign box2 to the second div 
divisions[1].classList.add('box2');

//* assign box2 to the second div 
divisions[2].classList.add('box3');

//bouns extra
divisions[2].innerHTML = '<h1>Some text</h1>';

divisions[1].style.backgroundColor = 'lightblue';

divisions[2].style.fontSize = '3px';

divisions[0].innerHTML = `<ul> 
<li > Home</li> 
<li > About</li> 
<li > Contact</li>
 </ul>`;