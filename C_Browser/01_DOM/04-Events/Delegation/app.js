// event delegation

let table = document.querySelector('#course-table');

table.onclick = function (event) {
    console.log(event.target);
    event.target.classList.add('highlight')
    // while (Target != this) {
    //     if (Target.tagName == 'TD') {
    //         Target.classList.add('highlight');
    //         return true;
    //     }

    // }
};