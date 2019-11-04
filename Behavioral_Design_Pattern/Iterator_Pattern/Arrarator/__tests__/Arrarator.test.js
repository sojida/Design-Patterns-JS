const {ArrayIteraror, Arrayrator, ReverseArrayIteraror} = require('../App');
const { iterator } = require('../iterator')

test('Arrarator', () => {
    Arrayrator.add('Peter');
    Arrayrator.delete(3);

    Arrayrator.createIterator(ArrayIteraror);
    const currentItems = Arrayrator.getItems();

    expect(currentItems).toEqual([1, 2, 'sam', 'fred', 'james', 'Peter'])

    Arrayrator.createIterator(ReverseArrayIteraror);
    const items = Arrayrator.getItems();

    expect(items).toEqual(['Peter', 'james', 'fred', 'sam', 2, 1])

    expect(iterator.hasNext()).toEqual(false);
    expect(iterator.next()).toEqual(undefined);

})
