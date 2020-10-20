// create a string variable includes greetings with word Hi
let greetings = "Hi FbW39 !!!";
//use String.replace method to replace 'Hi' with 'Hello' and save the newString in a new variable
let newGreetings = greetings.replace("Hi", "Hello");

//print the newString either in console or in the browser
console.log(newGreetings);

// make the string larger to containe a lot of 'Hi' words and replaceAll of them with 'Hello'
greetings =
  "Hi FbW39 !! , Hi to JavaScript and Hi to Strings , Hi for everyone, Hi Wrold";
newGreetings = greetings.replaceAll("Hi", "Hello");

//print the newString either in console or in the browser

document.write(`<h1 style='color:red'>${newGreetings}</h1>`);

//condition
 let number = 12;
if (number < 13) {
     document.write(`<h1 style='color:blue'>${(number < 13)}</h1>`);
}

if (number > 13) {
    document.write(`<h1 style='color:blue'>${(number > 13)}</h1>`);
 } else {
    document.write(`<h1 style='color:red'>${(number > 13)}</h1>`);
 }