const Book = require('./flyweight');

const IntrinsicBook = function (title, author, genre, pageCount, publisherID, ISBN) {
    Book.call(this, title, author, genre, pageCount, publisherID, ISBN)
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;
};

module.exports = IntrinsicBook
