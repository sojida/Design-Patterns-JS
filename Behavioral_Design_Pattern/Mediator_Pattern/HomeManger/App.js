const Mediator = require('./Mediator')
const Participant = require('./Participant')

const HomeManger = Mediator();

// Homes
const homeOne = new Participant('Home', 'Home One', HomeManger);
const homeTwo = new Participant('Home', 'Home Two', HomeManger);

// Clients
const ray_house_cleaning = new Participant('Home Cleaners', 'Ray', HomeManger);
const sam_house_cleaning = new Participant('Home Cleaners', 'Sam', HomeManger);
const bisi_baby_sitter = new Participant('Baby Sitters', 'Bisi', HomeManger);
const james_gardner = new Participant('Gardners', 'James', HomeManger);
const paul_car_washer = new Participant('Car Washers', 'Paul', HomeManger);

// Registration to HomeMager Platform
HomeManger.register(
    [
        homeOne, 
        homeTwo, 
        ray_house_cleaning, 
        sam_house_cleaning, 
        bisi_baby_sitter, 
        james_gardner, 
        paul_car_washer
    ]
)

module.exports =  { 
    homeOne, 
    homeTwo, 
    ray_house_cleaning, 
    sam_house_cleaning, 
    bisi_baby_sitter, 
    james_gardner, 
    paul_car_washer 
}
