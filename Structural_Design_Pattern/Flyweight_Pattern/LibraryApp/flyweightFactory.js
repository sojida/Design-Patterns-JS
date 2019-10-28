const Book = require('./concreteFlyweight');
const ExtrinsicState = require('./unshared');

const BookFactory = function () {
    const existingBooks = {};
    return {
        getBook: function (title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate,availability) {
            const extrinsicState = new ExtrinsicState(checkoutDate, checkoutMember, dueReturnDate, availability)
            const existingBook = existingBooks[ISBN];
                if (existingBook) {
                    return {...existingBook, ...extrinsicState};
                } else {
                    const book = new Book(title, author, genre, pageCount, publisherID, ISBN);
                    existingBooks[ISBN] = book;

                    return {...book, ...extrinsicState};
                }
            },
        count: function(){
            return Object.keys(existingBooks).length
        }
        }
};

module.exports = BookFactory();
