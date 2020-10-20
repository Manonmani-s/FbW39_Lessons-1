
/*
1- use a loop through the colors array .
2- every iteration use document.write to create a div element
3-  use the iterator valuse to have several width values
`<div style="width: ${i*100+50}px; background-color: ${colors[i]};margin:0 auto;height:40px;color:white; text-align:center;">${colors[i]}</div>`
4- backgroundColor for every div would be colors[i]
5- the text inside the div would be the color[i]
*/


let colors = ["red", "blue", "green", "yellow", "black"];
let div = ``;


for (let i = 0; i < colors.length; i++) {
    div = `<div 
    style="
    width: ${i*100+50}px; 
    background-color: ${colors[i]};
    margin:0 auto;
    height:40px;
    color:white; 
    text-align:center;">${colors[i]}</div>`;
  
    document.write(div);
  }