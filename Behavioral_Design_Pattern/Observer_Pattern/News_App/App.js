const Publisher = require('./Publisher')
const Subscriber = require('./Subscriber')

const NewsSection = function(name){
    this.name = name
    this.news = []
    this.events = new Publisher(name)
}

NewsSection.prototype.createNewStory = function(news){
    this.news.push(news)
    this.events.notify('createNewStory', news)
}

// User inherits the Subscriber interface
const User = function(name){
    Subscriber.call(this, name);
}

const sports = new NewsSection('sports');
const business = new NewsSection('business');
const music = new NewsSection('music');

const sam = new User('sam')
const page = new User('page')
const roland = new User('roland')

module.exports = { sports, business, music, sam, page, roland }
