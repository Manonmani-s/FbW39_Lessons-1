//Object is 'Refernce' type

let string = 'hello guys !!'; // Premitive , one single prop.


let person = {
    name: 'Arif', // every proip is premitive
    age: 24
}; // Refernce : multi props

let human = person; // two pointers to the same reference

console.log(human);

person.name = 'Gabor'; // changing the refernce 

console.log(human);

// access a property of an Object :
// dot notation obj.propKey
console.log(human.name);
// brakets notation obj['propKey']

console.log(human['age']);
// deleting a property using "delete" operator
delete person.age;
console.log(person);

person['like trump'] = true;
console.log(person);

// Computed propertis :
let keys = ['first name', 'second name', 'age'];
let values = ['Gleizer', 20, 'Matheus'];

let participant = {
    // [keys[0]]: values[2],
    // [keys[1]]: values[0],
    // [keys[2]]: values[1],


};

participant[keys[0]] = values[2];
participant[keys[1]] = values[0];
participant[keys[2]] = values[1];

console.log(participant);

// Property value shorthand

let name = 'Ljiljana';

let course = 'FbW39';

let student = {

    name, // same as variable name
    //course // same as variable course
    class : course 
};


console.log(student);

// example:

let Data = [
    { 'name': 'Gabor', 'age': 25, 'course': 'FbW39' },
    { 'name': 'Peter', 'age': 35, 'course': 'FbW09' }
];

function fetchData(dataBase) {
    for (i = 0; i < dataBase.length; i++){
        if (dataBase[i].name == 'Gabor') {
            let name = dataBase[i].name;
            let age = dataBase[i].age;
            let course = dataBase[i].course;



            return {
               name,
                age,
               course,
            };
        }
    }
}

console.log(fetchData(Data));


// "in" operator : !('key' in Object) 

let user = {name:'Manon', age:25};

//console.log(user.age == undefined); // boolean : true

//console.log('age' in user); // boolean : false

const isPropOf = (key, obj) => key in obj;

console.log(isPropOf('age', user));


// the oreder of the properties in the object

let array = ['apple', 'banana', 'orange', 'mango'];
console.log(array);
let fruits = {
    0: 'apple',
    1: 'orange',
    2: 'mango',
    3: 'banana',
    4: 'berry'
};
console.log(fruits);


// looping in the object
// arrow function to find a key  and delete property

const deletePropOf = (key, obj) => {
    for (const k in obj) {
        if (k == key) {
            return delete obj[k];
        }
    }
    return -1;
}; 


let object = {
    'name': 'Gerhard',
    'age': '55',
    'profession': 'Web Developer',
    'favorites': ['Swimming', 'Development', 'Walking']
};

let prop = 'age';

console.log(deletePropOf(prop, object), object) ;