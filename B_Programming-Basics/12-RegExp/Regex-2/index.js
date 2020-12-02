//Define a RegExp

//Constructor
let re = new RegExp('pattern', 'i');

//litrals
re = /pattern/i;

console.log(re.source); //pattern
console.log(re.flags);//gim

//Flages :

// 'i' case-insensitive :

let str = 'Pattern : the pattern in a RegExp is providing the source, and Pattern is also none in other Programing Languages';

// 'g' global : search for All matches
re = /pattern/gi;



// 'm' multiline : used to apply the regexp for every line

//multiline : is a property indicates whether or not 'm' flage is used

re = /^football/m;

str = 'my favorit sport is:\nfootball';

let result = re.test(str); 

//console.log(result); // expected true
//.log(re.multiline); // expected true

// s 'dotAll': it makes 'dot' applies for all :
// new line or new row \n , \r

// dotAll is a property indicates whther or not 's' flag is used
re = /lock.down/si;
str = 'Currently we are under lock\ndown covid19 situation';

result = re.test(str);
result = str.replace(re, '');
// console.log(result);
// console.log(re.dotAll);

// y : sticky 

// sticky prop indicates whether flag y is ued or not
//first example :
str = 'football';
re = /foo/y;

re.lastIndex = 1;
//console.log(re.sticky); // true
result = re.test(str); 

//console.log(result); // false lastIndex is takes into account with sticky flag





//second Example
// str = " my name is Safwan";
//find all words in the string
// re = /\w+/yg;

// console.log(re.sticky);
// console.log(re.lastIndex);
// let word = re.exec(str);
// console.log(word);


// re.lastIndex = 1;
// word = re.exec(str);
// console.log(word[0]);
// console.log(re.lastIndex);
// let word1 = re.exec(str);
// console.log(word1[0]);
// console.log(re.lastIndex);
// let word2 = re.exec(str);
// console.log(word2[0]);
// console.log(re.lastIndex);
// let word3 = re.exec(str);
// console.log(word3[0]);
// console.log(re.lastIndex);
// let word4 = re.exec(str);
// console.log(word4[0]);
// console.log(re.lastIndex);
// re.lastIndex = 0;
// let word5 = re.exec(str);
// console.log(word5[0]);



// third example :

// re = /^my/m;
// // no need to have sticky mode
// str = '..\nmy name is Safwan';
// //  re.lastIndex = 2;
// result = re.test(str);
// console.log(result); // true


//exec()  : RegExp method

 result = re.exec(str);

// console.log(result.index);


//match() : string method

result = str.match(re);

// console.log(result);

//replace() : string method

re = /-/gi;

str = 'Hello , the yellow ball is outdoors ';
str = '2-10-2020';
result = str.replace(re, '/');

// console.log(result);
