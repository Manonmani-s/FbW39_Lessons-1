//Selectors for Single element

//1- getByID

// document.getElementById('kaki').style.background = 'lightblue';

//2- querySelector - getByID

// document.body.querySelector('.fruites').style.background = 'orange';


// document.querySelector('li:nth-child(even)').style.background = 'blue';

// document.querySelector('li:nth-child(even)').style.color = '#ccc';


//Selectors for multible elements

//by tag name

// Array.from(document.getElementsByTagName('div')).forEach(element => element.innerHTML += ` We will eat you ;)`);

//by class name

// document.getElementsByClassName('fruites')[2].innerHTML += ` Do you like the taste`;


//by name

// console.log(document.getElementsByName('text'));

//please use for each array method to give the two inputs some margin 

// document.getElementsByName('text').forEach(element => element.style.margin = '20px');

//querySelectorAll

// console.log(document.querySelectorAll('li:nth-child(odd)'));

// document.querySelectorAll('li:nth-child(odd)').forEach(li => li.style.background = 'yellow');

//please create an input and a button , as well as a list of 8 li, when you click the button the item with the specified number will have background = 'yellow' ; optional : if you have invalid value an error will appear :)

// console.log(document.getElementsByTagName('button')[0]);
// document.querySelector('.error').style.display = 'none';
// document.querySelector('button').addEventListener('click', () => {

   

//     let number = document.querySelector('[type="number"]').value;
//     if (number < 1 || number > 9) {
//         document.querySelector('.error').style.display = 'block';
//         setTimeout(() => { document.querySelector('.error').style.display = 'none'; }, 3000);
//     } else {
//         document.querySelectorAll('li').forEach(li => li.style.background = '');
//         document.querySelector(`li:nth-child(${number})`).style.background = `rgb(${Math.floor(Math.random(number)*256)}, ${Math.floor(Math.random(number)*256)}, ${Math.floor(Math.random(number)*256)})`;
        
//     }
//     document.querySelector('[type="number"]').value = ``;
//     console.log(document.querySelector(`li:nth-child(${number})`));
    
// });

/*--------Creating Element---------- */
document.querySelector('#div').addEventListener('click', () => {
    let tag = document.querySelector('[type="text"]').value;
    let element = document.createElement(tag);
    if (tag == 'a') {
        element.classList.add('btn');
        element.classList.add('btn-primary');
        element.style.margin = '0 auto';
        element.setAttribute('href', 'https://digitalcareerinstitute.org/');
        let textNode = document.createTextNode('DCI');
        element.appendChild(textNode);
        element.innerHTML += `<i class="fa fa-remove"></i>`;
        console.log(textNode);
    } else {
        element.classList = 'row';
        element.style.background = 'lightblue';
        element.style.margin = '0 auto';
        element.innerText = `Hello , My Name is: ${tag}`;
    }


    document.querySelector('.fruites').appendChild(element);
    console.log(element);
});

document.querySelector('#list').addEventListener('click', () => {
    let tag = document.querySelector('[name="option"]').value;
    if (tag != 'li') {
        let error = document.createElement('div');
        error.classList.add('error');
        error.innerHTML = `Here you can only have list item &lt;li&gt;`;
        document.querySelector('body').appendChild(error);
        setTimeout(() => {
            error.remove();
        },3000)
    } else {
        let order = Array.from(document.querySelector('.other').children).length;
        let li = document.createElement(`${tag}`);
        li.innerHTML = `Hello my list :)  I am item number ${order+1}`;
        document.querySelector('.other').appendChild(li);
    }
    //here is your code
});


/**
 * create input to enter a name
 * when you click add button do below :
    * push the name into an array
    * set the array to the localStorage with a key fbw39
    * present the names in an ul 
* send me a screen shot once yoiu have either problem or correct result
 *  */