// Event listeners :
document.querySelector('#section').addEventListener('click', (e) => {
    // e.target.innerHTML = `Heey who is uncovering ME`;
    // let val = e;

    // // the traget element
    // val = e.target;
    // val = e.target.id;
    // val = e.target.className;
    // val = e.target.classList;

    // //Event Type
    // val = e.type;

    // //Timestamp
    // let day = Date.now();
    // // console.log(day);
    // let stamp = e.timeStamp;
    // // console.log(stamp);
    // val = new Date(stamp + day);
    
    // //Coords event relative to the window
    // let y = e.clientY;
    // let x = e.clientX;
    // //Coords event relative to the element
    // y = e.offsetY;
    // x = e.offsetX;

    // console.log(x , y);
    e.target.classList.toggle('she');
    let styleObj = window.getComputedStyle(e.target);
    let top = parseInt(styleObj.getPropertyValue('top').replace("px", ""));
    
    e.target.style.top = (top - (e.clientY / 10 )) + "px";
    console.log(top , e.clientY);
});

// console.log(document.querySelector('#section'));