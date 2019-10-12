# Observer Pattern

This pattern allows a collection of object to watch an object and be notified of changes. It defines a one-to-many dependency between objects so that when the one object changes all its dependecies are notified and updated automatically. The observer pattern is also known as 'Dependants' or 'Publish-Subscribe'. Subscribers are ale to subcribe(register) to a publisher to recieve notifications when somthing happens. The pubslisher is also able to publish (broadcasts) notifications to the observer. Subscribers can unsubsrie(unregister) from the publishers' collections.

This pattern is the connerstone for event driven programming including JavaScript.

The main aim of the observer pattern is to promote loose coupling, break down apllication into smaller modules and achieve manageability. This pattern provides an efficient medium for the relationships between differnt part of your application.

## What type of relationship pattern does this exhibit
- This is a one-to-many relationship

## What Problem does this Pattern solve
Assuming we have a News app and we have different categories/sections. When news in one section is being published, we don't want to spam all our users(Readers) with all these messages. We want only those interested in the that section to get notified. We would give our users(Readers) the ablility to subscribe to a particular category/section of news and be notified when something in that category happens.

## When to use this pattern
- When an abstraction has two aspects, one dependent on the other.Encapsulating these aspects in separate objects lets you vary and reuse them independently.

- When a change to one object requires changing others, and you don't know how many objects need to be changed.

- When an object should be able to notify other objects without making assumptions about who these objects are. In other words, you don't want these objects tightly coupled.


## Implementation
- [Publisher](./Publisher.js)
- [Subscriber](./Subscriber.js)
- [News Section App](./NewsApp.js)


## Participants and their roles
- Publisher
- Subscriber
- NewsSection
- User

### Publisher
This provides an interface for subscribing, unsuscribing and notifying the subscribers. It knows about the obeserver

### Subscriber
This defines an interface for classes/objects that should be notifid when a change has occured.

### NewsSection
Here, our NewsSection class stores the information of all the users that are subscribed to it. It also notifies the users(subscriber) of when a new story/news is created.

### User
The user needs to have an interface that is consistent with the NewsSection, this will allow it to be informed correctly when that event occurs.

## Consequences
- Abstraction can be acheived for both the Publisher and the Subscriber
- Classes involved in the Observer patter tends to be loosely coupled. This can cause some unexpected updates when the Publisher's state changes or in the NewsSection app, that function is called without the intention of notifying the users. 

