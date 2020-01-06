var Book = require('./book.js');

class Author {
  constructor(authorInfo) {
    this.first = authorInfo.first;
    this.last = authorInfo.last;
    this.books = [];
  }
  write(title, publicationYear) {
    var newBook = new Book(this.first, this.last,
       this.books.push(newBook));
       return newBook;
  }
}
module.exports = Author;
