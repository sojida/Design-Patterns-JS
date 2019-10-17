const { AbstractFactory } = require('./Factories')
const {  LightProducts, DarkProducts } = require('./Products')

const DarkFactory = AbstractFactory(DarkProducts)
const LightFactory = AbstractFactory(LightProducts)


const UserInterface = function(factory){
    return AbstractFactory(factory)
}

const darkRadio = UserInterface(DarkFactory).createProduct('Radio')
const lightRadio = UserInterface(LightFactory).createProduct('Radio')

const darkCheckBox = UserInterface(DarkFactory).createProduct('Checkbox')
const lightCheckbox = UserInterface(LightFactory).createProduct('Checkbox')


module.exports = { darkRadio, lightRadio, lightCheckbox, darkCheckBox };
