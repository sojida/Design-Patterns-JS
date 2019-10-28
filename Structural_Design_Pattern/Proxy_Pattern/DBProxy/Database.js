const DatabseInterface = require('./DatabaseInterface');

const Database = function(){
    const dbInterface = Object.assign({}, DatabseInterface)

    const db = {
        users: [],
    }

    dbInterface.getAll = function(table){
        return db[table]
    }

    dbInterface.createOne = function(table, value){
        db[table].push({name: value});
    }

    dbInterface.getOne = function(table, name){
        const value = db[table].find(function(item){
            return item.name === name;
        })

        return value;
    }

    return dbInterface;
}

const db = Database()

module.exports = db