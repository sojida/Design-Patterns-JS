const { Person, PersonStore } = require('../App');

test('Moment App', () => {
    PersonStore.addMomento(Person.createMemento());

    expect(Person.state.name).toEqual('Adesoji Daniel')
    expect(Person.state.age).toEqual(21)

    Person.state.name = 'Segun Ogundijo';
    Person.state.age = 19;

    expect(Person.state.name).toEqual('Segun Ogundijo')
    expect(Person.state.age).toEqual(19)

    Person.setState(PersonStore.getMomento(0));

    expect(Person.state.name).toEqual('Adesoji Daniel')
    expect(Person.state.age).toEqual(21)
});
