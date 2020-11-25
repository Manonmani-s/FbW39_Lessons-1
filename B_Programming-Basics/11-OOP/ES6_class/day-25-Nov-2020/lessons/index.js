// console.log(`Good Morning FbW39`);

const greetings = () => console.log(`Good Morning FbW39`);


// function Greet() {
//     this.phraseWord; // Primitiv 
// }

/**
 * Add a method to the prototype of Greet
 * setGreetPhrase(phrase)
 */

// Greet.prototype.setGreetPhrase = function (phrase) {
//     this.phraseWord = phrase;
// };

// Greet.prototype.greet = function () {
//     document.write(`<h1>${this.phraseWord} FbW39</h1>`);
// };

// let morning = new Greet();
// morning.setGreetPhrase(`Good Morning`);
// morning.greet();

// let evening = new Greet();
// evening.setGreetPhrase('Good Evening');
// evening.greet();


class Greet{
    // 1. Creating constructor function
    constructor(phrase) {
        this.phraseWord = phrase;
    }
    
   //2. Add methods to the prototype
   
    setGreetPhrase(phrase) {
        this.phraseWord = phrase;
    }

    greet() {
        document.write(`<h1>${this.phraseWord} FbW39</h1>`);
    }
}

let morning = new Greet('Good Morning');
morning.setGreetPhrase('Good Morning Guys in ');
morning.greet();



// console.log(morning);

/**
 * Create a type (ES6 Class) called User
 * props : name, age and auths
 * to the prototype add :
 * method sayMyName()
 * method add authority(param): true
 * method remove authority(param) : true
 */

class User{
    constructor(name, age, auths) {
        this.name = name;
        this.age = age;
        this.auths = auths; //meant to be array
    }
    
    sayMyName() {
        return `<h1>${this.name}</h1>`;
    }

    add(authority) {
        if (this.auths.indexOf(authority) >= 0) return false;
        this.auths.push(authority);
        return true;
       
    }

    delete(authority) {
        if (this.auths.findIndex(element => element == authority) < 0) return false;
        this.auths.splice(this.auths.findIndex(element => element == authority), 1);
        return true;
    }
    /**
 * to the prototype of User add :
 * method setPassowrd(psw)
 * condition ; password length min:8
 */
    setPassword(psw) {
        if (psw.length < 8) return {msg:`Error !! the password should be minimum 8 character`, flag:false};
        this.password = psw;
        return {msg:`You have added the password successfully `, flag: true};
    }
}
 

let gabor = new User('Gabor', 45, ['read', 'write', 'delete']);
let name = gabor.sayMyName();
// console.log(name);
// document.write(gabor.sayMyName());
// console.log(gabor.sayMyName());

// console.log(gabor.add('read'));
// console.log(gabor.auths);

if (gabor.add('record')) {
    document.write(`<h1>Hey I am Happy !!!</h1>`);
    // console.log(gabor.auths);
}
// console.log(gabor.delete('record'));
// console.log(gabor.auths);

// console.log(gabor.setPassword('12345678').msg);


/********* ES6 class : inheritance *********/

// Super 'Parent' 'class' Type 

class Shape{
    constructor(x, y) {
        this.h = x;
        this.v = y;
    }

    move(extX, extY) {
        this.h += extX;
        this.v += extY;
    }
}

let shp = new Shape(5, 2);
console.log(shp);

// Sub 'child' 'class' Type
class Circle extends Shape {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }
    //overwrite method :
    move(x, y) {
        this.h *= x;
        this.v *= y;
    }

    //new methods
    area() {
        return this.r * this.r * Math.PI;
    }
}


let cir = new Circle(7, 3, 2);
console.log(cir);
cir.move(2, 3);
console.log(cir.area());





