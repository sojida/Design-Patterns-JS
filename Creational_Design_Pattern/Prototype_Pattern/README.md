# Prototype Pattern

This pattern specifies the kinds of objects to create using prototypical instance, and creates new objects by copying its prototype. Classical languages rarely use the Prototype pattern, but JavaScript being a prototypal language uses this pattern in the construction of new objects and their prototypes. Prototype pattern involves creating customized objects without knowing their class or any details of how to create them. 

This may sound like the factory pattern but what really makes it different is that the Prototype creator only contains and create one object(prototype)

The Prototype pattern lets you use a set of pre-built objects, configured in various ways, as prototypes. Instead of instantiating a subclass that matches some configuration, the client can simply look for an appropriate prototype and clone it.

## Main Idea
- specifies the kind of object to create using the prototypical interface
- creates new objects by copying its prototype
- reduce the use of the ```new``` operator

## When to use the Prototype Pattern
- to achieve independence on how products are created, composed and represented in system
- when you want to reduce the class hierarchy and subclassing of classes.

## Participants and their roles
- Client
- Prototype
- ConcretePrototype

Client
- creates a new object by asking the prototype to clone itself

Prototype
- declears an interface to clone itself

ConcretePrototype
- implements an operation for cloning itself


## Advantages and Disadvantages

### Advantages
- objects can be cloned without coupling to their concrete classes
- using prototypes can help reduce the initialisation of class/object
- complex objects with diffent values and structure can be produced more convinently
- reduce subclassing


### Disadvantages
- cloning complex objects that have circular reference might be tricky



