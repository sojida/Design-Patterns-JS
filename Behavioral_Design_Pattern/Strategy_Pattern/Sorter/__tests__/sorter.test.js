const sorter = require('../App');
const { MergeSort, BubbleSort } = require('../Strategy');


test('Sorter', () => {
    sorter.setStrategy(new MergeSort());
    const sortedValues = sorter.sort();
    expect(sortedValues[0]).toBeLessThan(sortedValues[sortedValues.length - 1]);


    sorter.setStrategy(new BubbleSort());
    const sortedValues2 = sorter.sort();
    expect(sortedValues2[0]).toBeLessThan(sortedValues2[sortedValues2.length - 1]);
});
