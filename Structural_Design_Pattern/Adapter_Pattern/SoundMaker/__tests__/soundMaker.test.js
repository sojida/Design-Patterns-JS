const { lionSound, dogSound } = require('../App');

test('Soundmaker test', () => {
    expect(lionSound).toEqual('Rooooooaaaarrr');
    expect(dogSound).toEqual('Wooof');
});
