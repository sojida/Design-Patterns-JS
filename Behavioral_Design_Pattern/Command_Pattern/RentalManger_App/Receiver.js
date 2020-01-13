const Receiver = function(){
    let apartments = [];
    
    function AddAppartment(apartmentToAdd){
        console.log('Adding an apartment...')

        apartments =  [...apartments, apartmentToAdd]
        return apartments;
    }


    function deleteApartment(apartmentToDelete){
        console.log('Removing an apartment...')
        const newApartments = apartments.filter(function(itm){
            return itm.id !== apartmentToDelete.id
        });

        apartments = newApartments
        return apartments;
    }

    return {
        AddAppartment,
        deleteApartment,
    }
}

module.exports = Receiver()
