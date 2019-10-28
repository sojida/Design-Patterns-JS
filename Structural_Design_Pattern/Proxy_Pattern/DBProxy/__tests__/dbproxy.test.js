const proxy = require('../App');
const dbinterface = require('../DatabaseInterface');

test('Proxy Test', () => {
   const allUser =  proxy.getAll('users')

   expect(allUser).toEqual([])

   proxy.createOne('users', 'dan')
   proxy.createOne('users', 'paul')
   proxy.createOne('users', 'nedy')

   const allUser2 =  proxy.getAll('users')
   expect(allUser2).toEqual([{name: 'dan'}, {name: 'paul'}, {name: 'nedy'}])

   const nedy = proxy.getOne('users', 'nedy')
   expect(nedy).toEqual({name: 'nedy'})

   // coverage
   expect(dbinterface.getOne()).toEqual(undefined)
   expect(dbinterface.createOne()).toEqual(undefined)
   expect(dbinterface.getAll()).toEqual(undefined)
})
