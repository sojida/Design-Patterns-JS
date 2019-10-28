const DatabseInterface = require('./DatabaseInterface');

const Proxy = function(service) {
    const realService = service
    const proxyInterface = Object.assign({}, DatabseInterface)

    const callRealService = function(fn, args) {
        return realService[fn].apply(null, args)
    }

    proxyInterface.getAll = function (){
        return callRealService('getAll', arguments)
    }

    proxyInterface.createOne = function(){
        return callRealService('createOne', arguments)
    }

    proxyInterface.getOne = function(){
        return callRealService('getOne', arguments)
    }   
    
    return proxyInterface
}

module.exports = Proxy