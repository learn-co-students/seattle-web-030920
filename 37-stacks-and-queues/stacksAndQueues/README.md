# SWBATs:
    - Identify a Stack
    - Identify a Queue
    - Code an implementation of a stack
    - Think about their lives and enjoy the moment
    - Probably something else

## A STACK:

A linear data structure which allows for operations at one end only.

Think about a can of pringles. The first pringle to be sealed in the can is the last pringle to leave. Probably also true of clowncars. This is called **First In, Last Out (FILO)**. To add something to a stack, you can only place things on top, and to remove something from a stack, you can only take them off the top. 

Th closest data type we have worked with to a stack is an *array*. And in fact, we can operate on an array as though it were a stack, if that's the type of functionality that you want from it. 

### Why Do I Care What a Stack Does?

It's a particular strategy for problem solving, used in programming and in programming interviews. Most recently for myself, someone asked in a mock interview how one could design the system for a vending machine. While describing the snack dispensing part, I mentioned that we could use a stack-type data structure -- the maintenance person pushes the snacks into the front of the machine, and the last snack that they push onto a row is the first snack to get dispensed. 

### Is This Just Theoretical?

Nah dog. We'll be doing a group algorithm on Fridays that can be solved most easily with a stack (although all versions of the solution are more than welcome).


## A QUEUE:

Any guesses on what this one is, or how it behaves?
    => **First In, First Out (FIFO)**

How could we change the snack dispensing idea to instead use a queue?
    => Load it from the back :thumbsup:

Objectives:
- Code out a way to add items to the stack
- Code out a way to remove items
- Code a "peek" function, to just look at the top item

Bonus:
- Add an item limit for the stack
- Don't use an array?
- Build it out to be a queue instead?