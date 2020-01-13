const Handler = function(shopName){
    this.shopName = shopName;
    this.items = [];
    this.handle = function(request){
        const requestItem = this.items.find(function(item){
            return item === request
        })

        if (requestItem){
            console.log(`Item found in ${this.shopName}`)
            return requestItem
        }

        if (this.next){
            return this.next.handle(request)
        } else {
            return 'Item not found'
        }
    }
    this.next = null;
    this.setNext = function(handler){
        this.next = handler
    }
}


const ElectronicsShop = function(){
    Handler.call(this, 'Electronic Shop')
    this.items = ['TV', 'Radio', 'Games']
}

const FoodShop = function(){
    Handler.call(this, 'FoodShop')
    this.items = ['Amala', 'Rice', 'Fufu']
}

const ClothingShop = function(){
    Handler.call(this, 'ClothingShop')
    this.items = ['Jeans', 'Polo', 'T-shirts']
}

module.exports = { ElectronicsShop, FoodShop, ClothingShop }
