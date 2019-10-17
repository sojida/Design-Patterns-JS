const { AbstractFactory, Lion, Tiger, Ball } = require('../App');


test('Aminal maker test', () => {
    const AnimalMaker = AbstractFactory(['eat'])

    AnimalMaker.registerProducts([Lion, Tiger, Ball])

    const lion = AnimalMaker.createProduct('Lion', {color: 'black', name: 'Scar'})
    const tiger = AnimalMaker.createProduct('Tiger', {type: 'indian', name: 'Kash'})
    const ball = AnimalMaker.createProduct('ball', {color: 'white'})


    expect(lion).toEqual({ name: 'Lion', props: { color: 'black', name: 'Scar' } })
    expect(tiger).toEqual({ name: 'Tiger', props: { type: 'indian', name: 'Kash' } })
    expect(lion.eat()).toEqual('Lion is eating')
    expect(ball).toEqual(null)

    // Increase coverage
    const ball2 = new Ball({color: 'white'})
    expect(ball2.props.color).toEqual('white')

})
