 /**
  * localStorage vs sessionStorage :
  * they are the same but with one difference :
  * data in sessionStorage doesn't survive if the session ends (page is closed or reopened)
  * while in localStorage it lasts all the time
  */




/**
 * Please make to do list using session storage
 * input
 * add / remove button
 *  use <ul>
 */


// sessionStorage.setItem('name','Safwan');
// sessionStorage.getItem();
// sessionStorage.removeItem();
// sessionStorage.clear();

showTasks = () => {
    let todoList = document.getElementById('todo');

    todoList.innerHTML = ``;
    //handling when there is no todoList in SS
    let items = JSON.parse(sessionStorage.getItem('todoList'));
    console.log(items);
   
        
    
        
        items.forEach(item => {
            todoList.innerHTML += `
            <li >${item}<a id='${item}' href='#' class='close' onclick="removeTask(event)">&times;</a></li>
            `;

        });
    

};

addTask = () => {
    let task = document.getElementById('task').value;

    let items = JSON.parse(sessionStorage.getItem('todoList'));
//handling when there is no todoList in SS
    if (!items) {
        items = [task];
    } else {
        items.push(task);
    }
    sessionStorage.setItem('todoList', JSON.stringify(items));
//show tasks
    showTasks();
};


removeTask = (e) => {
    let remove = e.target.id;
    console.log(remove);
    let items = JSON.parse(sessionStorage.getItem('todoList'));
    let index = items.indexOf(remove);
    items.splice(index, 1);
    sessionStorage.setItem('todoList', JSON.stringify(items));
    showTasks();
};






