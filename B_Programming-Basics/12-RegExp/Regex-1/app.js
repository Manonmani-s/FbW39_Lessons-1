//regualr expression litrals

let re = /hello/i; // i flag : means case insensitive

//regualr expression constructor

let reg = new RegExp('hello');
console.log(reg);

//regualr expression methods :
//exec() : returns array if the pattern is found, otherwise null
let stri = 'vdzdvahdv"Hello"nklsfnask !!';
let result = re.exec(stri) ;


//test() : returns true or false
result = re.test(stri);
console.log(result);

/**
 * write a function that tells you if my name is inside the text or not
 */

const isMyNamethere = (name, text) => {
    let re = new RegExp(name);
    return re.test(text);
};


let myName = 'FBW41';
let par = 'Glauber is the teacher of FbW41, but safwan is for FbW39';

console.log(isMyNamethere(myName, par));

//String methods : 

//match() : returns array if the pattern is found, otherwise null

const str = 'The yellow Sun is above the brown mountain; Hello it is a shiny Day !!!';

const rexp = /Safwan/i;

result = str.match(rexp);
console.log(result);

//search() returns then index of the first match, and -1 if no match

result = par.search(rexp);
console.log(result);

//replace()

result = str.replace(re, 'Hi');
console.log(result);
console.log(str);

//Anchors : ^ caret , $ money sign
re = /^hey/i; //MUST start with
let txt = "Hey it's easy !!";

// result = re.test(txt);
// console.log(result);


// re = /^N$/i;

// txt = "N W N";

re = /^Nils$/i;
txt = "Nils";
result = re.test(txt);
console.log(result);

//which string matches the below pattern ? :
re = /^$/;

result = re.test(''); //true
console.log(result);


const search = () => {
    let word = document.getElementById('keyword').value;
    let txt = document.getElementById('txt').innerHTML;
    let regex = new RegExp(word, 'i');
    let result = document.getElementById('res');
    if (regex.test(txt)) {
        result.style.background = 'blue';
        result.style.color = 'white';
    } else {
        result.style.background = 'red';
        result.style.color = 'white';
    }
    result.innerHTML = `${regex.test(txt)}`;
};



let students = ['Safwan', 'Adam', 'Manon', 'Nils'];

let text = students.join(' ');

console.log(text);

re = /Safwan/i;
console.log(re.test(text));
