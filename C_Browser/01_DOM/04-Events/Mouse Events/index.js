const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const taskTitle = document.querySelector('#task-title');

// Click
// click event : mousedown →  mouseup →  click
//  clearBtn.addEventListener('click',eventHandler);

//Double Click
//triggers after two clicks on the same lement within a short timeframe , rarely used nowadays
// taskTitle.addEventListener('dblclick', eventHandler);

//Mousedown 
//triggers when the mouse button is clicked , and before it's released.
// clearBtn.addEventListener('mousedown',eventHandler);

//Mouseup
// clearBtn.addEventListener('mouseup',eventHandler);

//Click on the card :
card.addEventListener('mousemove', eventHandler);

//Event Handler

function eventHandler(e) {
    e.preventDefault();
    console.log(`Event Type:${e.type}`);

    // taskTitle.innerHTML = `Event Type:${e.type}`;
   
    taskTitle.innerHTML = `MouseX: ${e.offsetX} , MouseY: ${e.offsetY}`;
    let x = e.offsetX;
    x += 15;
    let y = e.offsetY;
    y += 10;
    document.body.style.backgroundColor = `rgb(${x},${y}, ${x+y} )`;

}