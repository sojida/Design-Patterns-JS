const orderingApp = require('../App');

test('Ordering App', () => {
    
const Fufu = orderingApp('Fufu')
expect(Fufu).toEqual('Fufu');

const TV = orderingApp('TV')
expect(TV).toEqual('TV')

const Games = orderingApp('Games')
expect(Games).toEqual('Games')

const House = orderingApp('House')
expect(House).toEqual('Item not found')

const Jeans = orderingApp('Jeans')
expect(Jeans).toEqual('Jeans')
})

