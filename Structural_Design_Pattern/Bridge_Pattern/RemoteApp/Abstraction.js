const Remote = function(device){
    const currentDevice = device;

    const togglePower = function(){
        currentDevice.power ? currentDevice.off() : currentDevice.on()
        return currentDevice.power
    }

    const volumeUp = function(){
        if (currentDevice.volume >= 100){
            return false
        }
        return currentDevice.volume += 5
    }

    const volumeDown = function(){
        if (currentDevice.volume <= 0){
            return false
        }
        return currentDevice.volume -= 5
    }

    return {
        togglePower,
        volumeUp,
        volumeDown,
    }
}


const AdvancedRemote = function(device){
    const remote = Remote.call(this, device)
    const vibrate = function(){
        return 'Vibes'
    }
    return {
        ...remote,
        vibrate,
    }
}

module.exports = { Remote, AdvancedRemote };
