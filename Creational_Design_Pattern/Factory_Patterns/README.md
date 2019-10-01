# Factory Pattern

This pattern simplies the object creation process. It creates objects based on need. The factory class/object is responsible for the creation of objects(Products). In the process of creating the products, extra logic can performed such as caching, applying configuration the products and so on.

Factory pattern is useful for the following:
- The object being setup requires high level of complexity
- The enviroment determines the object that we create
- The objects being creates share silimar properties
- It is useful for decoupling which means that a change in one product does not affect the other
- It helps in the process composing objects/classes from two or more classes

## Drawback
The client code will expect all the products of the factory to share some similar interface with the factory. This pattern can also add unnecessary complexity and make it difficult to test. 

A more advanced factory pattern is the Abstract Factory Pattertn


# Abstract Factory Pattern

The aim of the Abstract Factory Pattern is to encapsulate factories/objects with common goals. To acheive the sense of common goal in this pattern, the Factory will accept/register only products/factories that meet some requirement.
