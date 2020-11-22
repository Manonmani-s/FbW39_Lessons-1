let human = {
    gender: 'female',
   age: 28,
    // hint = "string"
    toString (){
        return `{gender:"${this.gender}"}`;
    },
    //hint = "number"
    valueOf() {
        // console.log(this);
        
        return `{age:"${this.age}"}`;
        
    },
    //say My age
     sayHello : () => `Hello`
    
    
};



let person = {
    name: 'Some Name',
    job: 'Web development',

    
};
let demo = human.toString();
demo = human.valueOf();
// console.log( human.sayHello() );




// let arr = ['Some Name', 28];

// console.log(arr.length);


// for (n = 0; n < obj.length; n++){
//     //some code
// }

// arr.map(element => {
//     //some code
    
// });


// for (const x in obj) {
//     //some code
//     console.log(x, obj[x]);
// }


/**
 * Create two objects
 * first object is Peter = {}
 * second object is Katja = {}
 * age , gender,status ,method marryFrom(name),method whoIsSpouse()
 * 
 * example:
 * Peter.marryFrom('Katja') // output : true
 * Peter.whoIsSpouse() // output : Katja
 */


// let Peter = {

//     age: 25,
//     gender: 'male',
//     status: 'single',
//     marryFrom(name) {
//         this.status = 'married';
//         this.spouse = name;
//         return true;
//     },
//     whoIsSpouse() {
//         return this.spouse;
//     }
// };

// let Katja = {
//     age: 22,
//     gender: 'female',
//     status: 'single',
//     marryFrom(name) {
//         this.status = 'married';
//         this.spouse = name;
//         return true;
//     },
//     whoIsSpouse() {
//         return this.spouse;
//     }
// };


// console.log(Peter.marryFrom('Katja'));
// console.log(Peter.whoIsSpouse());


let animal = {
    speak: true,
    sound:'bo',
    soundOf() {
        return this.sound;
    }
}

let bird = {
    fly: true,
};


bird.__proto__ = animal;

console.log(bird.speak);


// let user = {
//     user_name: 'user',
//     password: '1234',
//     credentials: ['main page'],
//     setUserName(name) {
//         this.user_name = name;
//     },
//     setPass(passWord) {
//         this.password = passWord;
//     },
//     setCredentials(newCred) {
//         newCred.forEach(element => {
//             this.credentials.push(element);
//         });
//     }
// };

// let admin = {};
// admin.__proto__ = user;
// console.log(admin);

function User(userName, passWord) {
    this.user_name = userName;
    this.password = passWord;
    this.credentials = [];
    this.setCredentials = (array) => {
        array.forEach(element => {
            this.credentials.push(element);
        });
    };

}

let guest = new User('guest', 'anypassWord2021!');
guest.setCredentials(['viewing','navigating']);
console.log(guest.credentials);

let admin = new User('admin', '1234');
admin.setCredentials(['editing', 'updating']);
console.log(admin.credentials);

/**
 * write a constructor function to build a wagen type
 * function Wagen()
 * this.num_of_wheels = 0;
 * this.category = 'wagen';
 * two properties : number of wheels , category 
 * method setNumOfWheels(number)
 * method setCategory('string')
 */

function Wagen() {}

Wagen.prototype = {
    constructor: Wagen,
    setNumOfWheels(number) {
        this.num_of_wheels = number;
    },

    setCategory(string) {
        this.category = string;
    },
    getNumberOfWheels() {
        return this.num_of_wheels;
    },
    getCategory() {
        return this.category;
    }
};
 

let car = new Wagen();
 car.setNumOfWheels(4);
 car.setCategory('car');

console.log(car);
 

/**
 * write a constructor function to build a Participant type 
 * function Participant(){}
 * add to the prototype of Participant the below settters :
    * setParticipantName('string')
    * setParticipantDateOfBirth(datOfBirth){
         this.birthDate = datOfBirth }
    * claculateAge() returns the age

 * write a constructor function to build a Course type
 * function Course(){}
 * add to the prototype of Course the below settters :
    * setCourseName('string')
    * setCourseTeacher('string')
    * setCoursePrticipants(array of prticipants : use the type Participant)
    * getCourseName()
    * getCourseTeacher()
    * getPrticipants()

 */

function Participant() { }
Participant.prototype = {
    setParticipantName(string) {
        this.name = string;
    },
    setParticipantDateOfBirth(dateOfBirth) {
        this.birthDate = dateOfBirth;
    },
    claculateAge() {
        //this year - birth year 
        let currentDate = new Date();
        let age = currentDate.getFullYear() - this.birthDate.getFullYear();
        this.age = age;
    }
};

function Course() {
    
 }
Course.prototype = {
    setCourseName(string) {
        this.name = string;
    },
    setCourseTeacher(string) {
        this.teacher = string;
    },
    setCoursePrticipants(arr) {
       // this.participants = arr; just pointing to the same refernce : not profissional
      this.participants = [];
        arr.forEach(item => {
            this.participants.push(item);
        });
    },
    getCourseName() {
        return this.name;
    },
    getCourseTeacher() {
        return this.teacher;

    },
    getPrticipants() {
        return this.participants;
    }
}

let datOfBirth = new Date('Nov 12 1995');


let matheus = new Participant();
matheus.setParticipantName ('Matheus');
matheus.setParticipantDateOfBirth(datOfBirth);
matheus.claculateAge();
let participants = new Array(matheus, matheus, matheus);


let FbW39 = new Course();

FbW39.setCourseName('FbW39');
FbW39.setCourseTeacher('Safwan');
FbW39.setCoursePrticipants(participants);

console.log(FbW39.getPrticipants());













