/**
 * create input to enter a name
 * when you click add button do below :
    * push the name into an array
    * set the array to the localStorage with a key fbw39
    * present the names in an ul 
* send me a screen shot once yoiu have either problem or correct result
 *  */



document.querySelector('.btn-primary').addEventListener('click', () => {
    let name = document.querySelector('[name="name"]').value;
    let students = JSON.parse(localStorage.getItem('students'));
    // if (students) {
    //     students.push(name);
    // } else {
    //     students = [name];

    // }
    // (ternary) operator : (condition) ? means if , : means else
    (students) ?  students.push(name) :  students = [name];

    localStorage.setItem('students', JSON.stringify(students));
    let list = document.querySelector('.list-group');
    list.innerHTML = ``;
   students.forEach(student => {
       let li = document.createElement('li');
       li.classList.add('list-group-item');
       li.classList.add(`${student}`);

       li.innerHTML += `${student}`;
       li.innerHTML += `<i class="fa fa-remove" id="${student}" onclick="removeItem(event)"></i>`;
       list.appendChild(li);
   });
    document.querySelector('[name="name"]').value = ``;
});

document.querySelector('.btn-secondary').addEventListener('click', () => {
    let students = JSON.parse(localStorage.getItem('students'));
   
    if(!students) students = [];

     let list = document.querySelector('.list-group');
     list.innerHTML = ``;
    students.forEach(student => {
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.classList.add(`${student}`);

        li.innerHTML += `${student}`;
        li.innerHTML += `<i class="fa fa-remove" id="${student}" onclick="removeItem(event)"></i>`;
        list.appendChild(li);
    });

    console.log(students);
});

const removeItem = e => {
    console.log(e.target.id);
    // here is your code
    let students = JSON.parse(localStorage.getItem('students'));
   
    if (!students) students = [];
    let index = students.indexOf(e.target.id);
    students.splice(index, 1);

    document.querySelector(`.${e.target.id}`).remove();
    localStorage.setItem('students', JSON.stringify(students));
    console.log(document.querySelector(`.${e.target.id}`));
};
// (!'jon' || !'Adam') ? console.log('yes') : (!'safwan') ? console.log('safwan') : console.log('Gabor');