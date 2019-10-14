# Builder Pattern

This pattern allows you create complex ojects in a step by step fashion that are independent from  one another. This pattern allows a client object to construct a complex object by specifying only its type and content. The process is isolated from the client and unique to each product making it possible to be reused in creation of other objects.

Builder pattern aims at simplfying the client code that creates complex objects.

## Main idea
- Separate the construction of a complex object from its representation so that the same construction process can create different representations.
- Makes the cleint refer to a common interface to create complex objects


## When to use the Builder Pattern
- When you want to construct complex object and you want the algorithm for constructing and assembling of the object parts to be independent
- When you want the process for the construction complex objects to allow for differnent repesentations

## Participants and their roles
- Builder
- ConcreteBuilder
- Director
- Product

Builder
- This defines the interface for the parts of the products to be created. This parts are created in stepwise manner therefore, they must be common to all type of builders.

ConcreteBuilder
- Implements the builder interface, assembles the parts of the product and constructs it. 
- This provides an interface for saving and retrieving products
- Defines and keep track of the products it creates
- This builds the products internal implementation but the product defines the process by which it is to be assemled

Director
- contructs the complex objects using the builder interface
- 

Product
- this is the complex object that is being built
- contains interfaces to assemble it self to a final result
-

