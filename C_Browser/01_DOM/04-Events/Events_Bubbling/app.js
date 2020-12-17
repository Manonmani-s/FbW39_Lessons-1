// document.querySelector('form').onclick = function (e) {
//     e.preventDefault();
//     e.target.style.backgroundColor = 'yellow';

//     setTimeout(() => { 
//         e.target.style.backgroundColor = '';
//     }, 5000);

//     document.querySelector('p.demo').innerHTML = `e.target = ${e.target.tagName}
//     this= ${this.tagName}`;
// };


// document.querySelector('button').onclick = function (e) {
//     e.preventDefault();
//     e.stopPropagation();

//     this.style.backgroundColor = 'red';
// };


document.querySelector('form').onclick = function (e) {
    e.preventDefault();
      
    alert(`this = ${this.tagName}  Traget = ${e.target.tagName}`);
};

// document.querySelector('form>div').onclick = function (e) {
//     e.preventDefault();
//     alert(`this = ${this.tagName}  Traget = ${e.target.tagName}`);
// };

// document.querySelector('form>div> p').onclick = function (e) {
//     e.preventDefault();
//     alert(`this = ${this.tagName}  Traget = ${e.target.tagName}`);
// };

