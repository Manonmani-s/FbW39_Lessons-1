function grades(num) {
    if (num < 1 || num > 100) return `Error !!!`;

    if (num < 50) return `Not Pass! Try again next time.`;

    if (num >= 50 && num <= 60) return `Pass! grade D.`;

    if (num >= 61 && num <= 80) return `Pass! grade C.`;

    if (num >= 81 && num <= 90) return `Pass! grade B.`;

    if (num >= 91 && num <= 98) return `Pass! grade A.`;

    if (num == 99) return `Pass! Almost perfect`;

    if (num == 100) return `Super! Take a day-off tomorrow`;
}

// html elements :
// let inptVal = document.getElementById('grade').value;
// line 20: is reading the input value only one time at the begining of the execution



function clickHandler() {
    display.innerHTML = grades(document.getElementById('grade').value);
 
 
}

let display = document.getElementById('result');


/** switch statement :
 * we use switch statement to select one of many cases : block of code to be executed  
 * 
 */
let x = 0;
 switch (x) {
     case 0:
         //do something
         break;
     case 1:
         //do some other thing 
          break;
     default:
         //do default thing
         break;
 }

function giveDay(num) {
    switch (num) {
        case 0:
            return `Saturday`;
        case 1:
            return `Sunday`;    
        case 2:
            return `Monday`;
        case 3:
            return `Tuesday`;    
        case 4:
            return `Wednesday`;
        case 5:
            return `Thursday`;    
        case 6:
            return `Friday`;
        default:
            return `A Week includes ONLY 7 DAYS`; 
       
    }
}

/**
 * 4 = (1*2)+2
 * 6 = (2*2)+2
 * 8 = (3*2)+2
 * 10 = (4*2)+2
 *  1 :Monday: works 4 hours 
    2 :Tuesday: works 6 hours 
    3: Wednesday: works 8 hours
    4: Thursday: works 10 hours  
    5: Fridays:  days-off. //break 
    6: Saturday: works 2 hours //out of rule  
    7: Sunday : days-off. //break
 *
 */

function moneyTillTheEndOfTheWeek(day) {
   
    if (day == 5 || day == 6) return 2 * 10;
    if (day == 7) return `didn't earn anything`;
    let total = 0;
    let add = 2;
    for (i = day; i < 7; i++){
        if (i == 5) { continue; }
        else if (i == 6) { add = 2; total = total + add; }
         
        else {
            add = (i*2) + 2;
            total = total + add;
        }
        
    }

    return total*10;
}



