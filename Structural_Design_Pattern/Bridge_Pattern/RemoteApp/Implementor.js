const PowerLogic = function(){
    this.power = false
    this.on = function(){
        this.power = true;
        return 'Power on'
    }
    
    this.off = function(){
        this.power = false
        return 'Power off'
    }
}

const VolumeLogic = function(){
    this.volume = 0
}


const Device = function(){
    PowerLogic.call(this);
    VolumeLogic.call(this)
}

const TV = function(){
    Device.call(this)
}

const Radio = function(){
    Device.call(this)
}



module.exports = { TV, Radio };
