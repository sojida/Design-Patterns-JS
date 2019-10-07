// Taking an example from Learning JavaScript Design Patterns

const Book = function( id, title, author, genre, pageCount,publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability){
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;
    this.checkoutDate = checkoutDate;
    this.checkoutMember = checkoutMember;
    this.dueReturnDate = dueReturnDate;
    this.availability = availability;
};

Book.prototype = {
    getTitle:function(){
        return this.title;
    },
    getAuthor: function(){
        return this.author;
    },
    getISBN: function(){
        return this.ISBN;
    },
    // other getters not shown for brevity
    updateCheckoutStatus: function(bookID, newStatus, checkoutDate,checkoutMember, newReturnDate){
    this.id = bookID;
    this.availability = newStatus;
    this.checkoutDate = checkoutDate;
    this.checkoutMember = checkoutMember;
    this.dueReturnDate = newReturnDate;
    },
    extendCheckoutPeriod: function(bookID, newReturnDate){
    this.id = bookID;
    this.dueReturnDate = newReturnDate;
    },
    isPastDue: function(bookID){
    const currentDate = new Date();
    return currentDate.getTime() > Date.parse(this.dueReturnDate);
    }
};


// ================================================================== //
// STEP 1: FIGURE OUT THE INTRINSIC AND THE EXTRINSIC STATE
// ================================================================== //


// This is the intrinsic state
const Book = function (title, author, genre, pageCount, publisherID, ISBN) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;
};

// Every other property can be considered as extrinsic


// ================================================================== //
// STEP 2: CREATE A SINGLETON FACTORY FOR STORING INTRINSIC STATE
// ================================================================== //

const BookFactory = (function () {
    const existingBooks = {};
    return {
        createBook: function (title, author, genre, pageCount, publisherID, ISBN) {
            const existingBook = existingBooks[ISBN];
                if (existingBook) {
                    return existingBook;
                } else {
                    const book = new Book(title, author, genre, pageCount, publisherID, ISBN);
                    existingBooks[ISBN] = book;
                    return book;
                }
            }
        }
});


// ================================================================== //
// STEP 3: CREATE A MANGER THAT MANAGES STATE FROM THE FACTORY
// ================================================================== //

var BookRecordManager = (function () {
    var bookRecordDatabase = {};
        return {
        // add a new book into the library system
        addBookRecord: function (id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate,availability){    var book = bookFactory.createBook(title, author, genre, pageCount, publisherID, ISBN);
                bookRecordDatabase[id] = {
                checkoutMember: checkoutMember,
                checkoutDate: checkoutDate,
                dueReturnDate: dueReturnDate,
                availability: availability,
                book: book
            };
        },
        updateCheckoutStatus: function (bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
            var record = bookRecordDatabase[bookID];
            record.availability = newStatus;
            record.checkoutDate = checkoutDate;
            record.checkoutMember = checkoutMember;
            record.dueReturnDate = newReturnDate;
        },
        extendCheckoutPeriod: function (bookID, newReturnDate) {
            bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
        },
        isPastDue: function (bookID) {
            var currentDate = new Date();
            return currentDate.getTime() > Date.parse(bookRecordDatabase[bookID].dueReturnDate);
        }
    };
});