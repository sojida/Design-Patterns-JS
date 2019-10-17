const AbstractProduct = require('./AbstractProduct');

const Radio = function(color){
    this.type = 'Radio'
    this.color = color;
    this.click = function(){
        return `${this.color} radio has been clicked`
    }
}

const Checkbox = function(color){
    this.type = 'Checkbox'
    this.color = color;
    this.click = function(){
        return `${this.color} checkbox has been clicked`
    }
}

const DarkRadio = function(){
    Radio.call(this, 'Dark');
};

const LightRadio = function(){
    Radio.call(this, 'Light');
};

const DarkCheckbox = function(){
    Checkbox.call(this, 'Dark');
};

const LightCheckbox = function(){
    Checkbox.call(this, 'Light');
};

const BrownCheckbox = function(){
    Checkbox.call(this, 'Brown')
}

const SomethingElseLight = function(){
    this.color = 'Light'
    // this function does not represent the interface we want
    this.else = function(){}
}

const DarkProducts = AbstractProduct('Dark', ['click'])
const LightProducts = AbstractProduct('Light',['click'])

DarkProducts.registerProducts([DarkRadio, DarkCheckbox])
LightProducts.registerProducts([LightRadio, LightCheckbox, BrownCheckbox, SomethingElseLight])

module.exports = { DarkProducts, LightProducts }
