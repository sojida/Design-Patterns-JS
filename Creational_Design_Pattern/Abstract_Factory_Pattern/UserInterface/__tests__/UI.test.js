const {  darkRadio, lightRadio, lightCheckbox, darkCheckBox  } = require('../App');


test('UserInterface test', () => {
    expect(darkRadio.color).toEqual('Dark')
    expect(lightRadio.color).toEqual('Light')
    expect(darkCheckBox.color).toEqual('Dark')
    expect(lightCheckbox.color).toEqual('Light')
    expect(darkRadio.click()).toEqual('Dark radio has been clicked')
    expect(lightCheckbox.click()).toEqual('Light checkbox has been clicked')
})
