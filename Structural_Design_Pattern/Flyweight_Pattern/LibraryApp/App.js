const bookFactory = require('./flyweightFactory');

const LibraryManger = (function () {
    const bookRecordDatabase = {};

    const addBookRecord =  function (id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate,availability){
        const book = bookFactory.getBook(title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate,availability);
        bookRecordDatabase[id] = {id, ...book};
    };

    const getAllBookRecord = function (){
        return bookRecordDatabase;
    }

    const count = function(){
        return Object.keys(bookRecordDatabase).length
    }

    return {
        addBookRecord,
        getAllBookRecord,
        count,
    };
})();


LibraryManger.addBookRecord('1', 'ABC', 'James', 'Educational', 100, 'A publishing firm', 'xxxx', Date.now() - 84600 * 5, 'Dara', Date.now() + 84600 * 4, false)
LibraryManger.addBookRecord('2', 'ABC', 'James', 'Educational', 100, 'A publishing firm', 'xxxx', Date.now() - 84600 * 4, 'Dara', Date.now() + 84600 * 4, false)
LibraryManger.addBookRecord('3', 'XYZ', 'Peter', 'Commercial', 453, 'B publishing firm', 'yyy', Date.now() - 84600 * 7, 'Dara', Date.now() + 84600 * 6, false)
LibraryManger.addBookRecord('4', 'XYZ', 'Peter', 'Commercial', 453, 'B publishing firm', 'yyy', Date.now() - 84600 * 7, 'Dara', Date.now() + 84600 * 6, false)
LibraryManger.addBookRecord('5', 'XYZ', 'Peter', 'Commercial', 453, 'B publishing firm', 'yyy', Date.now() - 84600 * 7, 'Dara', Date.now() + 84600 * 6, false)
LibraryManger.addBookRecord('6', 'XYZ', 'Peter', 'Commercial', 453, 'B publishing firm', 'yyy', Date.now() - 84600 * 7, 'Dara', Date.now() + 84600 * 6, false)



console.log(bookFactory.count())
console.log(LibraryManger.count())