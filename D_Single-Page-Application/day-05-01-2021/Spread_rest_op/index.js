
//Array Destructuring

let a, b, c;

[a, b] = [100, 200];

// console.log(a, b);


const names = ['Jon', 'Gabor', 'Manon'];

let [person1, person2, person3] = names;




// console.log(person2);


//Object destructuring 
const person = {
    name: 'Nargiza',
    age: 23,
    city: 'Miami',
    sayHi: function () {
        console.log('Hi');
    },

    address: {
        str: 'N50',
        haus: 35,
        country : 'Dubai'
    }
};



const { sayHi, age, name:newName, address: { str, haus, country } } = person;
// const { str, haus, country } = person.address;

// sayHi();

// console.log(newName);


//Rest pattern (...)

let [g, h, ...k] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(k);

let Obj = {
    u: 100, o: 200, p: 400, l: 600, e: 700
};

const { p, l, ...q} = Obj;

// making an isolated copy of the object
const { ...y } = Obj;

// console.log(y);

Obj.e = 1000;

// console.log(y);
// console.log(Obj);

// Spread (...)

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(...array);

// let max = Math.max(...array);

// console.log(max);

// const sum = (x, y, z) => x + y + z;

// let array = [45, 87, 96];

// let res = sum(...array);

// console.log(res);



