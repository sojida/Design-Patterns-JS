const TextCalculator = require('../App');

test('Text Calculator', () => {
    const text1 = 'Add 100 and 2';
    expect(TextCalculator(text1)).toEqual(102);

    const text2 = 'Please subtract 100 and 2';
    expect(TextCalculator(text2)).toEqual(98);

    const text3 = 'I want to multiply 100 and 2';
    expect(TextCalculator(text3)).toEqual(200)

    const text4 = 'Divide 100 and 2';
    expect(TextCalculator(text4)).toEqual(50);

    const text5 = '';
    expect(TextCalculator(text5)).toEqual('Could not interpret text');
});
