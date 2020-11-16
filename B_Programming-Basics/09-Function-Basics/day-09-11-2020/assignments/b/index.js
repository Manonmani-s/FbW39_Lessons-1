// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date

var dt = new Date();
setDomTextNode('current-dt', dt.toLocaleString());
// console.log(dt.toUTCString())

dt.setDate(dt.getDate() + 2); // add two days
setDomTextNode('add-days-dt', dt.toLocaleString());

dt.setDate(dt.getDate() - 4); // subtract 4 days
setDomTextNode('subtract-days-dt', dt.toLocaleString());

dt.setFullYear(dt.getFullYear() + 1); // add 1 year
setDomTextNode('add-years-dt', dt.toLocaleString());

// var newDt = new Date();
// newDt.setDate(newDt.getDate() + 2)
// console.log(newDt.toLocaleString());
// console.log(dateDiffInDays(dt, newDt));

var yesterday = new Date();
yesterday.setDate(yesterday.getDate()-1);
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate()+1);

console.log(yesterday.toLocaleString());
console.log(today.toLocaleString());
console.log(tomorrow.toLocaleString());
console.log(today < tomorrow);
console.log(today > yesterday);
console.log(today.setHours(0, 0, 0, 0) < tomorrow.setHours(0, 0, 0, 0));
console.log(today.setHours(0, 0, 0, 0) > yesterday.setHours(0, 0, 0, 0));

console.log(new Date('2018-06-25').toLocaleString());
console.log(new Date(1529884800000).toLocaleString());



// ========== HELPERS ===========

function setDomTextNode(id, text) {
   document.getElementById(id)
   .appendChild(document.createTextNode(text));
}

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
   var _MS_PER_DAY = 1000 * 60 * 60 * 24;
   
   // Discard the time and time-zone information, show in ms
   var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
   var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

   return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}


function showBox() {
    document.write(`
    <div id='box';
    style=' margin: 0 auto;
    padding: 50px;
    width: 150px;
     background-color: blue;'>Hello I am limited by time :( !! </div>`);


setTimeout(function () {
    box.style.display = 'none' ;
     }, 2000);
        
        
    }
