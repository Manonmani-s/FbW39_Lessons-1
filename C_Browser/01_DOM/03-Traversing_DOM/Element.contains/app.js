const btnTry = document.querySelector('#tryIt');

btnTry.addEventListener('click', myFunction);


function myFunction() {
    let span = document.getElementById('mySpan');
    let element = document.getElementById('myDiv');
    let exp = document.querySelector('.exp');
    let result = element.contains(exp);
    document.querySelector('#demo').innerHTML = `The ${element.nodeName.toLowerCase()} is including the  exp p. <span class="result">${result}</span>`;
}