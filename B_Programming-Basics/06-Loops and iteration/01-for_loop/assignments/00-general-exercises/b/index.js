//Write a simple for loop creating a unorederd list of three list items

for (let item = 1; item <= 3; item++) {
    document.write(`<li>item number: ${item}</li>`);
  }


  document.write(`<br>`);
//Write a simple for loop creating a unorederd list of three items and each item will take on of the elements from an array of three animals

let animals = ["cat", "dog", "bird"];

for (let index = 0; index < animals.length; index++) {
  document.write(`<li>${animals[index]}</li>`);
}
/*

for (let index = 0; index < 3; index++) {
    let animals = ['cat', 'dog', 'bird'];
    document.write(`<li>${animals[index]}</li>`);
}

one for loop equal to the whole code below :

index = 0;
let animals = ['cat', 'dog', 'bird'];
    document.write(`<li>${animals[0]}</li>`);

index = 1;
let animals = ['cat', 'dog', 'bird'];
    document.write(`<li>${animals[1]}</li>`);

index = 2;
let animals = ['cat', 'dog', 'bird'];
    document.write(`<li>${animals[2]}</li>`);
*/

let tutor, representative, copyWriter;
tutor = {
  name: "Daniel",
  class: "Bob Marley",
  age: 20,
};
representative = {
  name: "Gabor",
  class: "Bob Marley",
  age: 23,
};
copyWriter = {
  name: "Manon",
  class: "Bob Marley",
  age: 26,
};

let students = [tutor, representative, copyWriter];

document.write(`<br>`);
/*
Wriet a for loop creating unordered list, every list item will present one of the students[i].name , only students over 20 is listed  if (students[i].age > 20) create <li>
*/

for (let i = 0; i < students.length; i++) {
  if (students[i].age > 20) {
    // document.write(`<li>${students[i].name}</li>`);
  }
}


let guest1, guest2, guest3, guest4, guest5, guest6;
guest1 = {
  name: "Daniel",
  class: "Bob Marley",
  age: 20,
};
guest2 = {
  name: "Gabor",
  class: "Bob Marley",
  age: 23,
};
guest3 = {
  name: "Sepastian",
  class: "Bob Marley",
  age: 26,
};
guest4 = {
  name: "Lara",
  class: "Bob Marley",
  age: 17,
};
guest5 = {
  name: "Peter",
  class: "Bob Marley",
  age: 65,
};
guest6 = {
  name: "Sophia",
  class: "Bob Marley",
  age: 35,
};

let guests = [guest1, guest2, guest3, guest4, guest5, guest6];

/*
Wriet a for loop creating unordered list, to list the invited people to our party, the party has a restriction of age, it should be under 60 and over 18
*/

for (let i = 0; i < guests.length; i++) {
  if (guests[i].age > 18 && guests[i].age < 60) {
    document.write(`<li>${guests[i].name}</li>`);
  }
}


let examGrades = [7, 40, 47, 8, 52, 80, 68, 90, 106];
let passGrade = 60;
let maxGrade = 100;
let minGrade = 10;
//how many people they passed
let passedCounter = 0;
//How many people the  have error in their grade, so the grade is more than maxGrade or less than minGrade
let errCounter = 0;

console.log(examGrades);
for (let i = 0; i < examGrades.length; i++) {
  //how many people they passed without error
  if (examGrades[i] >= passGrade && examGrades[i] <= maxGrade) {
    passedCounter++;
  }
   //How many people the  have error in their grade
   if (examGrades[i] > maxGrade || examGrades[i] < minGrade) {
    errCounter++;
   }
 }
//Show results
document.write(
   `<h2>there are : ${passedCounter} people who passed the exam</h2>`
 );
document.write(`<h2>there are : ${errCounter}  grade include error</h2>`);


document.write(`<br>`);


let Safwan,
  Gabor,
  Jon,
  Manon,
  Ljiljana,
  Nargiza,
  Santiago,
  Rashad,
  Tareq,
  Matheus,
  Adam,
  Glauber,
  Daniel,
  Arif,
  Nils;

Safwan = {
  name: "Safwan",
  age: 33,
  gender: 1,
  position: "Mentor",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: undefined,
  passed: [],
};

Gabor = {
  name: "Gabor",
  age: 24,
  gender: 1,
  position: "Class Rep.",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: 70,
  passed: ["HTML", "CSS", "SCSS", "Bootstrap"],
};
Jon = {
  name: "Jon",
  age: 25,
  gender: 1,
  position: "English Teacher",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: 110,
  passed: ["HTML", "CSS", "SCSS", "Bootstrap"],
};

Manon = {
  name: "Manon",
  age: 20,
  gender: 0,
  position: "Copy Writer",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: 85,
  passed: ["HTML", "CSS", "SCSS", "Bootstrap"],
};

Ljiljana = {
  name: "Ljiljana",
  age: 22,
  gender: 0,
  position: "Student",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: 83,
  passed: ["HTML", "CSS", "SCSS", "Bootstrap"],
};
Nargiza = {
  name: "Nargiza",
  age: 23,
  gender: 0,
  position: "Student",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: 86,
  passed: ["HTML", "CSS", "SCSS", "Bootstrap"],
};
Santiago = {
  name: "Santiago",

  age: 23,
  gender: 1,
  position: "Student",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: 46,
  passed: ["HTML", "CSS", "SCSS", "Bootstrap"],
};

Rashad = {
  name: "Rashad",

  age: 83,
  gender: 1,
  position: "Student",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: 2,
  passed: ["HTML", "CSS", "SCSS", "Bootstrap"],
};

Tareq = {
  name: "Tareq",

  age: 25,
  gender: 1,
  position: "Student",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: 90,
  passed: ["HTML", "CSS", "SCSS", "Bootstrap"],
};

Matheus = {
  name: "Matheus",

  age: 110,
  gender: 1,
  position: "Student",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: 58,
  passed: ["HTML", "CSS", "SCSS", "Bootstrap"],
};

Adam = {
  name: "Adam",

  age: 28,
  gender: 1,
  position: "Student",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: 75,
  passed: ["CSS", "HTML", "SCSS", "Bootstrap"],
};

Glauber = {
  name: "Glauber",

  age: 21,
  gender: 1,
  position: "Tutor",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: 80,
  passed: ["CSS", "SCSS", "Bootstrap", "HTML"],
};

Daniel = {
  name: "Daniel",

  age: 25,
  gender: 1,
  position: "Tutor",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: 80,
  passed: ["CSS", "SCSS", "Bootstrap", "HTML"],
};
Arif = {
  name: "Arif",

  age: 55,
  gender: 1,
  position: "Student",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: 26,
  passed: ["HTML", "CSS"],
};
Nils = {
  name: "Nils",

  age: 70,
  gender: 1,
  position: "Student",
  course: "Bob Marley",
  divesion: "Web Dev Eng",
  grade: 12,
  passed: ["CSS"],
};

let fbw39Participants = [
  Safwan,
  Gabor,
  Jon,
  Manon,
  Ljiljana,
  Nargiza,
  Santiago,
  Rashad,
  Tareq,
  Matheus,
  Adam,
  Glauber,
  Daniel,
  Arif,
  Nils,
];

// How many people passed 'HTML' -- 6 minuites
/*
Give your Plan :
*/
// 1- define the counter to count how many
 let htmlCounter = 0;
//2- loop over the Participants array
 for (let i = 0; i < fbw39Participants.length; i++) {
//3-check if there is 'HTML' in the passed prop. of every person
//4-make it as if condition
//considering 'HTML' is always the first index
 if (fbw39Participants[i].passed[0] == "HTML") {
    //count it if condition is true
    htmlCounter++;
  }
//considering 'HTML' is any position in the passed array
// loop throught the passed array , use let j = 1
   for (let j = 1; j < fbw39Participants[i].passed.length; j++) {
    if (fbw39Participants[i].passed[j] == "HTML") {
      //increase the counter only if 'HTML'
       htmlCounter++;
    }
   }
 }

