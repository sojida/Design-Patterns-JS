const Singleton = function(){
    const state = []

    const retrieve = function(id){
        return state.find(function(item){
            return item.id === id
        });
    };

    const add = function(data){
        console.log('adding data...')
        state.push(data)
    };

    return {
        add,
        retrieve,
    }
};

// At the point of calling the 'Singleton' function, we have created a singleton
module.exports = Singleton();
