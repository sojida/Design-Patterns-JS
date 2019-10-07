# Facade Pattern

This is used to provide a simplified interface to a complicated system. The aim is to hide the complexity and provide simplicity. A typical example of this is jquery. A lot of complexity is hidden behind the '$' selector but it provides simple to use functionalities.


## What problem does the Facade Pattern solve
### Problem
Imagine you have to work with a bunch of external packages, libraries or framework. The services they provide are may be complicated or they may be simple but over time they start getting complicated. Some of the probelems that could start surfacing are having your business logic tightly coupled to those services, loosing track of dependencies, increase coginitive load for clients, and hard to maintain code.

### Solution
In JavaScript, a Facade can be implemented as a class ,factory function or any other method that aims at returning an interface that provides simplicity to a bunch of complex methods. Having a Facade allows your business logic to interact easily with external functionality by providing just enough resources that is required.

## When to use the Facade Pattern
- Making API calls
- Using an external package that adds complexity to your business logic
- Exposing a bunch of complex logic


