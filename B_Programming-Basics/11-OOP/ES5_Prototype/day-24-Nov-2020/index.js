// function sum(x , y) {
//     return x + y;
// }

const sum = (x, y) => x + y;

//console.log(sum(5, 10)); // 15


let fruits = new Array('apple', 'orange', 'banana');

const User = function (name, age) {
    this.name = name;
    this.age = age;
};


User.prototype = {
    auths: [],
    length:4,
    setAutherties(array)  {
       
        array.forEach(item => {
            this.auths.push(item);
        });
    },
};

let admin = new User('Safwan', 32);
admin.setAutherties(['view', 'add', 'delete', 'edit']);
// console.log(admin);


/**
 * Please create a constructor function to have a Type Fruite
 * give it three properties : name , category , price
 * add  one methode to Fruite.prototype to setPrice
 */

function Fruite(name, category) {
    this.name = name;
    this.category = category;

}
 
Fruite.prototype = {
    setPrice(price) {
        this.price = price;
    }
};

let banana = new Fruite('banana', 'tropical');
banana.setPrice('6 euros / kg');
//console.log(banana);

/********* inheritance *********/
//Super Type : Father Type
function Shape(x, y) {
    this.x = x;
    this.y = y;
}

Shape.prototype = {
    move(extX, extY) {
        this.x += extX;
        this.y += extY;
    }
};

//Sub Type : the child Type

function Circle(x, y, r) {
    //Call the constructor of the Super:Father Type
    Shape.call(this, x, y);

    // Initialize Sub Type : child's own props 
    this.r = r;


}

//using Father prototype
Circle.prototype = Object.create( Shape.prototype);

//new method
Circle.prototype.area = function() {
        this.area = Math.round(this.r *this.r * Math.PI);
    }


let shape = new Shape(1, 2);
console.log(shape);


let cir = new Circle(5, 6, 2);
cir.area();
console.log(cir);

cir.move(3, 7);
console.log(cir);