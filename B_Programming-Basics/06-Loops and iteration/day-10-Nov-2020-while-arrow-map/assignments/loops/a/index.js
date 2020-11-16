const checkNumber = e => {
    // the valid number is odd

    while (e.target.value % 2 != 0) {
        console.log(e.target.value);
        odd.style.display = "block";
        odd.innerHTML = `${e.target.value}`;
        setTimeout(function () {
            odd.style.display = "none";
        }, 3000);
        break;
    }
    while (e.target.value % 2 == 0) {
        //opposite  result
        even.style.display = "block";
        even.innerHTML = `${e.target.value}`;
        setTimeout( () => even.style.display = "none", 3000);
        break;

    }
};