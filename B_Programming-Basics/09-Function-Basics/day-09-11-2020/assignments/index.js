/**
 * Write a function takes as a Prameter a date , and return the name of the day only :) 
 * 
 * Example : nameOfDay('August 19 2020') --> 'Wednesday'
 * use .getDay() method
 * tip : switch is ideal !
 */


 /**
  * 
  * @param {String} date takes a string represent Date format Example 'Sep 10 1967'
  */
function nameOfDay(date) {
    let currentDay = new Date(date).getDay();
    switch (currentDay) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wedensday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
    }
}

// document.write(`The day is : ${nameOfDay('Sep 10 1967')}`);


// write a function takes as a parameter birthdate and returns the age Now :)
// Example : giveAge('March 14 1988') --> 32

function giveAge(birthdate) {
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
console.log(giveAge('March 14 1988'));

/**
 * in html make a <p> and write som text
 * make a search input and button 
 * write a search function to find a word
 * if you coudn't find the word
 * a red box will alert for 3 sec
 * Not found
 * if you couzld find it
 * a blue box aill alert foun in index #index_number
 * 
 * tips:
 * use function
 * use string method
 * use setTimeout
 * 
 * 
 */
