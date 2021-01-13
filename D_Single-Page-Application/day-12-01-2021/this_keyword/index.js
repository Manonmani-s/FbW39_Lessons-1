// function sayMyName(name) {
//     console.log(`My Namne is: ${name}`);
// }

// const sayMyName = (name) => {
//     console.log(`My Namne is: ${name}`);
// }


// console.log(this);

// let person = {
//     name: 'Harry',
//     age: 25,
//     me: {
//         newname: 'Peter',
//         me: {
//             thirdName: 'Kristin',
//             whoIsMe:  () => {
//                 console.log(this)
//             }
//         }
//     }
// }

// If We use function keyword 'this' will skip the function and keep binded to the fisrt block contains the function


// If We use arrrow function keyword 'this' doesn't respect anyscope and alway refer to the general scope


// let person = {
//     name: 'Harry',
//     age: 25,
//     whoIsMe: function () {
//         console.log(this);
//     }
// }

// person.whoIsMe();



class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    whoIsThis =  () => {
    console.log(this)
}
    
}



let p1 = new Person('Sara', 23);
let p2 = new Person('Lana', 26);


p1.whoIsThis()
p2.whoIsThis()


let title = document.getElementById('root');


title.className = ''