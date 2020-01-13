const Collection = function(items){
    this.items = items
}

const ArrayCollection = function(items){
    this.iterator = null;
    Collection.call(this, items);

    this.add = function(item){
        this.items.push(item)
    }

    this.delete = function(item){
        this.items = this.items.filter(function(currVal){
            return currVal !== item
        })
    }

    this.createIterator = function(iterator) {
        this.iterator = iterator(this.items)
    }

    this.getItems = function(){
        const items = []
        while(this.iterator.hasNext()){
            items.push(this.iterator.next());
        }
        return items
    }

}

module.exports = { ArrayCollection }
