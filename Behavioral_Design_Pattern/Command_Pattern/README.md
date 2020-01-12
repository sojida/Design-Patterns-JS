# Command Pattern
This pattern encapsulates the calling of a method(requests) as an object, this allows for full decoupling of the execution from the implementation and less frigile implementation (i.e when changes are introduced in implementaion nothing breaks). The command pattern lets you parametize methods with different requests. This gives the pattern the ability to/functionalities of delaying or queing request execution and supporting undo operations. 

Imagine we have a RentalManger application but we dont want our manager to decide what commands he can give. We also want our commands to carry information about how it was executed and the state it holds. What we hope to achieve is to centralise our commands.

The command pattern suggests that all commands share a similar interface ensuring that the reciever can carry out its function and deliver effectively. This pattern will allow us centrallise commands in the RentalManger allowing for execution, logging and undoing of commands.


## Main idea
The main idea behind the command pattern is that it provides you a means to separate the responsibilities of issuing commands from anything executing commands, dele-gating this responsibility to different objects instead.

## When to use this pattern
- When you want your parametize objects with operations.
- When you want to queue operations, schedule their execution, or execute them remotely.
- When you want to log operation and run then incases of system crash
- When you want to implement a revesible operation

## Implementation
- [Command](./Command.js)
- [ConcreteCommand](./ConcreteCommands.js)
- [RentalManager](./ConcreteCommands.js)
- [Receiver](./Receiver.js)
- [App](./App.js)

## Participants and their roles
### Participants
- Client
- Invoker(HomeManger)
- Reciever(Reciever.js)
- Command(Command.js)
- ConcreteCommand(ConcreteCommands.js)


### Roles
Client
- the client creates the ConcreteCommand  and sets it receiver

Invoker
- asks the command to carry out the request.

Receiver
- defines the actions that will be carried out. The receiver does the actual work. Any class/object can serve as a receiver provided it has some operations.

Command
- defines the interface to execute requests/operations

ConcreteCommand
- this is where the receiver and the action binds.
- implements Execute by invoking the corresponding operations on the Receiver

## Advantages and Disadvantages
### Advantages
- Single Responsibility Principle is maintained
- Open/Closed Principle
- redo/undo can be implemented
- simple commands can be assembled into one complex one
- commands can be deferred

### Disadvantages
- It increase the number of classes and objects
- Increased comlexity

## UML Class and Sequence Diagrams
![alt command](./umls/CMD_CL_UML.png)

## Implementations
- [Rental Manger App](./RentalManger_App/README.md)
