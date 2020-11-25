/**Use ES6 class for the below assignment */

/**Step : 1 in javascript file  */
/**define two classes Book , BookList */
/**Book has the below props :
 * title , authore , isbn
 * methods : change
 * 
 * example :
    let book1 = new Book('java', 'safwan', 256987)
   
    book1.change('title', 'javascript')

    console.log(boo1) ---> 'javascript' , 'safwan' , 256987 
 * 
 */

 /**BookList has the below props :
 * books (instances would have array of elements of Book type)
 * methods : add, delete , replace
 * 
 */

class Book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    
    change(key, value) {
        this[key] = value; 
    }
}
 
let book1 = new Book('java', 'safwan', 256987);

console.log(book1);

book1.change('isbn', 358987);

console.log(book1);


class BookList {
    /**
     * 
     * @param {Book[]} books 
     */
    constructor(books) {
        this.books = Array.from(books); // meant to be array of items from Type Book
    }

    add(book) {
        this.books.push(book);
    }

    /**
     * 
     * @param {Book} book 
     */
    delete(book) {
        if (this.books.findIndex(item => item.isbn == book.isbn) >= 0) {
            this.books.splice(this.books.findIndex(item => item.isbn == book.isbn), 1);
            return true;
        } else {
            return false;
        }
    }

    replace(oldBook, newBook) {
        // use splice
        this.books.splice(this.books.indexOf(oldBook), 1, newBook);
    }
}

let book2 = new Book('react', 'Glauber', 420420);
let book3 = new Book('html', 'Adam', 242424);
let book4 = new Book('css', 'Arif', 39098);
let book5 = new Book('Bob the King', 'Matheus', 420);

const list = new BookList([book2, book3, book4]);

console.log(list);

list.add(book1);
console.log(list);

list.delete(book1);
console.log(list);

list.replace(book3, book5);
console.log(list);

