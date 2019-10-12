# Mediator Pattern

The mediator pattern acts as a communication controller between unrelated classes/objects. It aims at reducing the chaotic dependencies between objects by forcing these objects to communicate only via the mediator object. The mediator is able to achieve this because it exposes unified interface through which the different parts of the system can commuincate. *The Mediator promotes loose coupling by ensuring that instead of modules referring to each other explicitly, their interaction is handled through this central point.

A typical real world analogy is the airport traffic system. The tower(mediator) handles what planes(classes/objects) can take off or land. These planes commuicate with the tower rather than plane-to-plane. This centralised control system is what makes this pattern successful.

The mediator pattern in systems are the central points of contacts that maintain order.

## What type of relationship pattern does this exhibit
- This is a many-to-many relationship

## What problem does this pattern solve
Considering we have a app for a house management services. The application allows homes to be able to connect to clients that will render this house services such as home cleaning, babysitting, car washing, house repairs, gardening, and many more services. There can be problems for both parties such as: 
- the homes may request the service of a client that is under contract with another home causing conflict
- clients and homes will get tightly coupled making it difficult to extend the services


The mediator pattern suggests that a class/object should exist between homes and clients. This way, the mediator can manage requests of clients effectively without conflicts and the can provide services to all clients in a category provided they share the same interface.

## When to use this pattern

- When you want to reuse an object and notice this is difficult because it refers to/ depends on many other objects.
- When there is a behaviour that is shared amongs many objects you aim to modify it without having to do alot of subclassing.
- When you want to change some of the classes but you they are tightly coupled with other objects

## Implementaion
- [Mediator](./Mediator.js)
- [Participant](./Participant.js)
- [Home Manger App](./HomeManager.js)

## Participants and their roles
- Mediator
- Participant
- HomeManager

### Mediator
Defines the interface for which the participants will communicate

### Participant
This class/object knows its mediator therfore communicates directly with it instead of its other participants

### HomeManger
This is the concrete class of the Mediator, it implements and ensures coorporation between paricipants by providing a shared interface.


## Consequenses
- A Mediator if not implemented properly can introduce another level of complexity
- The mediator can become a 'god' like class/object
- making it hard to maintain overtime
