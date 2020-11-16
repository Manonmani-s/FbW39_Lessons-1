
/*----------- 10 Nov Good morning exercise --------------- */

let checkInTime = 0;

function CheckIn() {
    checkInTime = new Date().getMinutes();
    // document.write(`<h1>${checkInTime}</h1>`);
    document.getElementById('in').innerHTML = checkInTime;
}


function CheckOut() {
    let checkOutTime = new Date().getMinutes();
    document.getElementById('out').innerHTML = checkOutTime;
    document.getElementById('period').innerHTML = checkOutTime - checkInTime;

    // document.write(`<h1>${checkOutTime}</h1>`);
    // document.write(`<h1>${checkOutTime - checkInTime}</h1>`);



}