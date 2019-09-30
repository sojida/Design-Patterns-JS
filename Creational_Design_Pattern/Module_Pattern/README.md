# Module Pattern

This is a simple way to encapsulate public and private properties/methods. It is like creating a toolkit of functions for use. Module patern in JavaScript is basically an object literal '{}' but once it is wrapped and returned by a function we can achieve property and method privacy.

The module pattern provides privacy and orgamnisation using closures. This pattern allows the client to interact with what is bieng revealed to them. With that in mind, the 'Module' patterned object can contain all the heavy lifting logic and expose what is deemed necessary.

<a href='./TaskService.js'>TaskService</a> is an example of the module pattern but it is actually implemented as a **'Revealing Module Pattern'**. What makes it different from the Module Pattern? The function has some private methods and properties(closures) which are not declared in the object it returns. The declared functions in the closure are being revealed by the objects it returns, hence the name.


## Use Case
- Service to database

