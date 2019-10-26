const Proxy = require('./Proxy');
const DB = require('./Database');

const proxy = Proxy(DB)

module.exports = proxy;
