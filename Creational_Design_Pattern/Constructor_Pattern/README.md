# Constructor Pattern

Creates object from a function


## Drawbacks

### Person.js
Anytime an object is created with the constructor pattern, it creates a new copy of the method and properties which could be alot better if we used prototypes. <a href='./Task.js'>Task.js</a> makes use of the prototype functionality which encapsulates the properties that and make them link to an object.

