function sum(param1, param2) {
    //here is my code
    return param1+param2;
}

//define a function takes as parametre array of numbers and retrurn the greatest number :)

function greatestNum(array) {
    // return Math.max(...array);
    // return Math.max.apply(0, array);
    let max = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > max) {
            max = array[i];
        }

    }
    return max;
}

/**
 * Example :
 * greatestNum([10,5,9,6,100]) --> 100
 */

 //define a function takes as a parametr any value and rerturns true if it is a number and false otherwise

 /**
  * example:
  * isItaNumber('Safwan') ---> false
  * isItaNumber('10') ---> false
  * isItaNumber(10) ---> true
  *
  *
  * tip: typeof can be used
  */

function isItaNumber(param) {
    return typeof param == 'number';
}


/**
 * please define a function take a list of people and greet them with :'
 * first person : hello first person
 * secon person : hi secon person
 * third one : how are you third one
 *
 * example : greetings(['Safwan','Adam','Glauber','Gabor']) ➞
 * hello Safwan
 * hi Adam
 *  how are you Glauber
 * hello Gabor
 *
 * return array of greetings :)
 */


function greetings(array) {
     //loop through array
    //concat array[0] with 'hello'
    //concat array[1] with 'hi'
    //concat array[2] with 'how'
    //concat array[3] with 'hello'
    //solution :
    //* nested loop
    const greetingWords = ['hello', 'hi', 'how are you'];
    let result = [];
    let c= 0;
    for (let i = 0; i < array.length; i++) {
        result.push(greetingWords[c] + ' ' + array[i]);
        c++;
        if (c == 3) c=0;

    }

    return result;

}


/**
 * define a function take a name and generate a random ticket of three digits (100 to 999) for it.
 * retuns a srtring 'the name' + the ticket
 * Example :
 * giveTicket('Safwan')  ---> 'Safwan T:107'
 */

function giveTicket(param) {
     /**
      * generate Random Ticket
      * give it to param -- conact the ticket with the name
      */

   
    // let ticket = Math.floor(Math.random() * 900 + 100);
    let ticket = Math.floor(Math.random() * ((999-100)+1) + 100);
    return `${param} T:${ticket}`;

    }