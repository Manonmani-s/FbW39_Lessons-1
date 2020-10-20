/*
Please loop through the option inputs, and if the option[i] is checked please print it't value to the divs[i].innnerHTML, and update divs[i].style.backgroundColor to a new color from your choice
*/
function printDays() {
  
  // your code is here
  let days = document.getElementsByTagName("input");
  let tickets = document.getElementsByClassName("box");
  let colors = [
    "whitesmoke",
    "green",
    "yellow",
    "lightblue",
    "darkgray",
    "orangered",
    "darkred",
  ];
  for (let i = 0; i < days.length; i++) {
    if (days[i].checked) {
      tickets[i].innerHTML = `<p>${days[i].value}</p>`;
      tickets[i].style.backgroundColor = colors[i];
    } else {
      tickets[i].innerHTML = null;
      tickets[i].style.backgroundColor = null;
    }
  }
}