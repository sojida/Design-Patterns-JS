const { sports, business, music, sam, page, roland } = require('../App');

test('News App', () => {
    sports.events.subscribe('createNewStory', sam)
    sports.events.subscribe('createNewStory', page)
    sports.events.subscribe('createNewStory', roland)

    business.events.subscribe('createNewStory', page)
    business.events.subscribe('createNewStory', roland)

    music.events.subscribe('createNewStory', sam)

    sports.createNewStory('Serena wins this round')
    business.createNewStory('Economic and Finicial growth influncers')
    music.createNewStory('Micheal Jackson lives on: in our hearts')
    
    sports.events.unSubscribe('createNewStory', sam)
    sports.createNewStory('Venus wins this round')

    sports.events.unSubscribe('createNewStories', sam)

    expect(sam.received[0].data).toEqual('Serena wins this round');
    expect(roland.received[1].data).toEqual('Economic and Finicial growth influncers');
    expect(page.received[1].data).toEqual('Economic and Finicial growth influncers');

})

