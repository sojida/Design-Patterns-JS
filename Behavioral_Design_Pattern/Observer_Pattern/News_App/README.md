# News App

## How this pattern achieves the Observer Pattern
We have a News app and we have different categories/sections. When news in one section is being published, we don't want to spam all our users(Readers) with all these messages. We want only those interested in the that section to get notified. We would give our users(Readers) the ablility to subscribe to a particular category/section of news and be notified when something in that category happens.

## Participants and their roles
### Participants
- Observable: Publisher in [Publisher.js](./Publisher.js)
- ConcreteObservable: NewsSection in [App.js](./App.js)
- Observer: Subscriber in [Subscriber.js](./Subscriber.js)
- ConcreteObserver: User in [App.js](./App.js)

### Roles
Observable(Publisher)
- this provides an interface for subscribing, unsuscribing and notifying the subscribers. It knows about the obeserver

ConcreteObservable(NewsSection)
Here, our NewsSection class stores the information of all the users that are subscribed to it. It also notifies the users(subscriber) of when a new story/news is created.

Observer(Subscriber)
- this defines an interface for classes/objects that should be notifid when a change has occured.


ConcreteObserver(User)
- the user needs to have an interface that is consistent with the NewsSection, this will allow it to be informed correctly when that event occurs.

## UML Class and Sequence Diagrams
![alt news_app](../umls/NWA_CL_UML.png)
