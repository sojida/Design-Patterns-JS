const { 
    homeOne, 
    homeTwo, 
    ray_house_cleaning, 
    sam_house_cleaning, 
    bisi_baby_sitter, 
    james_gardner, 
    paul_car_washer 
} = require('../App');


test('Home Manager ', () => {
    
    // Requests
    homeOne.send('I need some one to cut my flowers', 'Gardners');
    homeOne.send('I need some one to clean my home', 'Home Cleaners');
    homeTwo.send('I need a baby sitter', 'Baby Sitters');
    homeTwo.send('I need some one');

    expect(james_gardner.messages[0].message).toEqual('I need some one to cut my flowers')
    expect(james_gardner.messages[0].from).toEqual('Home One')


    expect(ray_house_cleaning.messages[0].message).toEqual('I need some one to clean my home')
    expect(ray_house_cleaning.messages[0].from).toEqual('Home One')

    expect(sam_house_cleaning.messages[0].message).toEqual('I need some one to clean my home')
    expect(sam_house_cleaning.messages[0].from).toEqual('Home One')

    expect(bisi_baby_sitter.messages[0].message).toEqual('I need a baby sitter')
    expect(bisi_baby_sitter.messages[0].from).toEqual('Home Two')

    expect(paul_car_washer.messages[0].message).toEqual('I need some one')
    expect(paul_car_washer.messages[0].from).toEqual('Home Two')
});
