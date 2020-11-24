console.log('Hello Prototypes');

/**
 * two types (two constructor functions):
 * book list (props : array of books)
 * book (props : title, author, isbn)
 */

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;

}

function BookList(books) {
    this.books =Array.from(books);
}



/**
 * to the prototype of bookList add the below :
 * method add(book) adds the book to this.books
 * method delete(isbn) delete the book which has isbn from this.books
 * 
 */

BookList.prototype.add = function (book) {

    //handle when adding an exisiting book
    let index = this.books.findIndex(element => element.isbn == book.isbn);
    if (index < 0) {
        this.books.push(book);
    } else {
        console.error(`Book : ${book.title} already exists !!`);
    }
    
};

BookList.prototype.delete = function (isbn) {
    //please handle when no 'isbn' coulb be found
    let index = this.books.findIndex(element => element.isbn == isbn);
    if (index >= 0) {
         this.books.splice(index,1);
    } else {
        console.error(`ISBN : ${isbn} could not be found`);
    }
   
};

let java = new Book('Java', 'Peter', 152489);
let php = new Book('Php', 'Hero', 226587);
 
let arr = [java, php];

let list = new BookList(arr);
// arr.pop();
console.log(list);
// console.log(arr);
list.add(java);

list.delete(226687);
console.log(list);













// let java = new Book('Java', 'Peter', 152489);
// let php = new Book('Php', 'Hero', 226587);
// let today = new Date();

// console.log(java);

// let js2020 = {
//     title: 'js2020',
//     author: 'Safwan',
//     isbn: 256887
// };


// const heyJon = (e) => {
//     let book = new Book(e.target.value, 'Peter', 5829);
//     console.log(book.title);
// };
 
