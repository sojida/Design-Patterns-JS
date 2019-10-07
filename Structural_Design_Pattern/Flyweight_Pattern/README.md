# Flyweight Pattern

This pattern aims at conserving memory. This is achieved by sharing similar portions of an object between other objects. This pattern can be used to approach a slow and repetitive code. The flyweight pattern has two concepts of state. These are the intrinsic and the extrinsic state of an object. The intrinsic state suggests that its values are unique and constant to that object while the extrinsic state suggests that its values are not constant and can changed or affected by other objects/classes. 


## What Problem does this pattern solve
Imagine we have to create 100000 or more instances of an object/class, this would mean that we would be creating a lot of objects with the same instrinsic state. Over time, this could cost alot for the memory of the the system that is consuming such logic.

## Solution
Flyweight pattern suggests that a factory should be created where a pool of common values will be stored. This factory will be responsible for storing all intrinsic state that will shared and serve as a reference to all the instaces and objects that are ceated.

## When to use the Flyweight pattern
According to this book by the GoF: 'Design Patterns: Elements of Reusable Object-Oriented Software', the authors suggest that the flyweigth pattern should be implemented when the following is true:
- An application uses a large number of objects.
- Storage costs are high because of the sheer quantity of objects.
- Most object state can be made extrinsic.
- Many groups of objects may be replaced by relatively few shared objects once extrinsic state is removed.
- The application doesn't depend on object identity. Since flyweight objects may be shared, identity tests will return true for conceptually distinct objects.


## Implementation
[Flyweight.js](./flyweight.js)