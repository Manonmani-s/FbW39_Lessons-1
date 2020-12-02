//1 The flags /g and /y :

/* 
* '/g' : activates  multi-match mode accepting gabs between matches.
* '/y' : similar to /g , but there can't be gabs between matches.
 
*/

// flag : '/g' :

// exec() and /g :
//without /g :
let regex = /#/;
let txt = '##-#';

// console.log(regex.exec(txt)); //first match
// console.log(regex.exec(txt));//first match
// console.log(regex.exec(txt));//first match

//with /g :
regex = /#/g;
txt = '##-#';

// console.log(regex.exec(txt));//first match
// console.log(regex.exec(txt));//second match
// console.log(regex.exec(txt));//third match

// flag : '/y' sticky:
// '/g' and '/y' togther with exec():

regex = /#/gy;
txt = '##-#';

// console.log(regex.exec(txt));//first match
// console.log(regex.exec(txt));//second match
// console.log(regex.exec(txt));//gab not skiped
// // regex.lastIndex = 3;
// console.log(regex.exec(txt));//lastIndex reseted to 0 after failure


// lastIndex : RegExp property indicates the index of the string the RegExp starts searching from.
// after failure always lastIndex will be reseted

//lastIndex with '/g' :

regex = /hello/g;

//console.log(regex.lastIndex); // 0 by default

str = 'hello It is Sunny ,hello summer hello!!!';

console.log(regex.lastIndex, regex.exec(str));
console.log(regex.lastIndex, regex.exec(str));
console.log(regex.lastIndex, regex.exec(str));
console.log(regex.lastIndex, regex.exec(str));
console.log(regex.lastIndex);

//lastIndex with '/y' : 
// lastIndex with '/y' means match exactly at lastIndex
// lastIndex with '/y' would reset lastIndex if there is no match.
regex = /hello/y;

str = 'hello It is Sunny ,hello summer !!!';

// console.log(regex.lastIndex, regex.exec(str));
// console.log(regex.lastIndex, regex.exec(str));
// console.log(regex.lastIndex, regex.exec(str));

//lastIndex will never change after search invocation if we don't use 'y' or 'g' flags.

