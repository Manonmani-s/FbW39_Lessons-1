document.querySelector('#hi').addEventListener('click', () => {
    document.querySelector('#inpt').focus();
});

document.querySelector('#hii').addEventListener('click', () => {
    document.querySelector('#inpt').blur();
});

document.querySelector('#inpt').addEventListener('focus', (e) => {
    document.querySelector('p').innerHTML = `I am focused`;
});

document.querySelector('#inpt').addEventListener('blur', (e) => {
    document.querySelector('p').innerHTML = `I am blured`;
});