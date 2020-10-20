function howMany() {
    options = document.getElementById('options').children;
    let numberSelected = 0;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            numberSelected++;
        }
    }
    return numberSelected;
}


 function tell() {
    howManyDiv.innerHTML =  `<h1>Number of options selected: ${howMany(document.selectForm.musicTypes)} </h1>`;
}