let first = document.getElementById('start');
let second = document.getElementById('middle');
let third = document.getElementById('end');

function submit(event) {
    event.preventDefault();
    story.innerHTML = `${first.value} ${second.value} ${third.value}`;
}

/* ---------------style the dom in javascript----------------- */
// labelElement[0].classList.add()
let labels = document.getElementsByTagName('label');
console.log(labels);
labels[0].classList.add('label');
labels[1].classList.add('label');
labels[2].classList.add('label');

first.classList.add('inputElement');
second.classList.add('inputElement');
third.classList.add('inputElement');