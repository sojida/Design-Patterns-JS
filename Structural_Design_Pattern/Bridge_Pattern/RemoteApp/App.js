const { Remote, AdvancedRemote } = require('./Abstraction');
const { TV, Radio } = require('./Implementor')

const SonyTv = new TV()
const tvRemote = Remote(SonyTv)

const SharpRadio = new Radio()
const radioRemote = Remote(SharpRadio)

const smartRemote = AdvancedRemote(SonyTv)

module.exports = { tvRemote, radioRemote, smartRemote, SonyTv, SharpRadio }
