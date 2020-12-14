const form = document.querySelector('form');
const taskInpt = document.querySelector('#task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// console.log(select);

// form.addEventListener('submit', runEvent);

//Clear input value
taskInpt.value = ``;
//Keydown
// the event is fired up before writing (input value changes)
// taskInpt.addEventListener('keydown', runEvent);

//Keyup
// the event is fired up after writing (input value changes)
// taskInpt.addEventListener('keyup', runEvent);


//keypress : old version of keydown , only characters not other keys (ctrl , alt, escap)
// taskInpt.addEventListener('keypress', runEvent);

//input : old version of keyup , only characters not other keys (ctrl , alt, escap)

// taskInpt.addEventListener('input', runEvent);

//Cut : the event fire before value changes
// taskInpt.addEventListener('cut', runEvent);

//Paste : the event fire before value changes
//  taskInpt.addEventListener('paste', runEvent);


//change : input event doesn't fire untile the control loses focus.

// taskInpt.addEventListener('change', runEvent);

//Blur :When you lose the focus it is called blur : click outside

// taskInpt.addEventListener('blur', runEvent);

//Focus : click inside the element
// taskInpt.addEventListener('focus', runEvent);



//Event Handler

function runEvent(e) {
    // e.preventDefault();
    //Clear the input AND heading 
  
    // heading.innerHTML = ``;

    //Keyboard Event props :
    // console.log(e.key);
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
    // console.log(e);

    heading.innerHTML += `Event Type : ${e.type}`;

    
    console.log(e.target.value);
}