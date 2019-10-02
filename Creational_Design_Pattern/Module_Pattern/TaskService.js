module.exports = function(config){
    const db = config;
    const getData = function(id) {
        console.log(`Getting data with id of ${id} from ${db.name}....`);
        return {
            name: 'data from db'
        }
    };

    const postData = function(data){
        console.log(`Posting ${data.name} in ${db.name}`)
    };

    const patchData = function(data){
        console.log(`Patching ${data.name} in ${db.name}`)
    };

    const deleteData = function(id){
        console.log(`Deleteing data with id of ${id} in ${db.name}`)
    };

    return {
        getData,
        postData,
        patchData,
        deleteData,
    }
}
