const xmasvisitor = require('../Visitor');
const Books = require('../Books');


test('Bookseller', () => {
    expect(Books[0].price).toEqual(1000)
    expect(Books[1].price).toEqual(1200)

    for (let i = 0; i < Books.length; i++){
        const currentBook = Books[i];
        currentBook.accept(xmasvisitor);
    };

    expect(Books[0].price).toEqual(900);
    expect(Books[1].price).toEqual(1080);
});
