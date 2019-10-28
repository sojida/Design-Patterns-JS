# Notifier

## How this implemanetation acieves the Decorator Pattern
- The `notify` method is flexible and is updated dynamically and recursively
- The decorator acts as a wrapper and calls the wrappee(comp) method `notify` when it the concreteDecoreator eg: mailService is uses the component returned from the Decorator. The instance returned by the decorator contians the implementation of the previous component wrapped.

## Participants and their Roles
### Participants
- Component: notifierInterface in [interface.js](./interface.js)
- ConcreteComponent: setNotifier in [bases.js](./bases.js)
- Decorator: Decorator in [bases.js](./bases.js)
- ConcreteDecorator: `mailService`, `SMSservice` and `InAppService` in [concreteDecors.js](concreteDecors.js)

### Roles
Component(notifierInterface)
- defines the interface where the notify method lives

ConcreteComponent(setNotifier)
- This defines the object that can be decorated.
- it return the interface contianing the implementation of the wrapped object

Decorator(decorator)
- this maintains a refernce to the concreteComponent(setNotifier)
- defines the implementation of the component it wraps

ConcreteDecorator(mailService, SMSservice and InAppService)
- adds functionalities to the component(setNotifier) dynamically

## UML Class and Sequence Diagrams
![alt notifier](../umls/NT_CL_UML.png)
