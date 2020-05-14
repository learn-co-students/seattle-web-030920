
// Objectives:
// - Code out a way to add items to the stack
// - Code out a way to remove items
// - Code a "peek" function, to just look at the top item
// Bonus:
//     - Add an item limit for the stack
//     - Don't use an array?
//     - Build it out to be a queue instead?



class Stack {
    constructor(limit){
        // what it is, the moment that it is made.
        // runs when an instance is made
        this.gargoyles = []
        this.limit = limit
    }
    addItem(item){
        return this.gargoyles.length === this.limit ? 
        "NO!!!!" : 
        this.gargoyles = [...this.gargoyles, item]
    }
    removeItem(){
        return this.gargoyles.pop()
    }
    peek(){
        return this.gargoyles[this.gargoyles.length-1]
    }

}

// let stackyStack = new Stack(3)

// console.log(stackyStack.addItem(1))
// console.log(stackyStack.addItem(1))
// console.log(stackyStack.addItem(1))
// console.log(stackyStack.addItem(1))
// console.log(stackyStack.addItem(1))
// stackyStack.addItem("dog")


// console.log(stackyStack.peek())

class Node {
    constructor(info){
        this.info = info
        this.previous = null
    }
}

class CoolStack {
    constructor(limit){
        this.top = null
        this.limit = limit
        this.rollingCount = 0
    }

    addItem(item){
        item = new Node(item)

        if(this.top === null){
            this.top = item
            this.rollingCount += 1
        }
        else {
            // add node function, we already wrote that
            if(this.rollingCount === this.limit) {
                return "NOOOOOO"
            }
            item.previous  = this.top
            this.top = item
            this.rollingCount += 1
        }
    }

    removeItem(){
        let saver = ''
        if(this.top === null ){
            return "what"
        }
        else{
            saver = this.top
            this.top = this.top.previous
            this.rollingCount -= 1
            return `Removed ${saver.info}`
        }
    }
}

let klsdjf = new CoolStack(10)
// keep track of next item but ALSO the number of the link that it is?
// maybe we need to just keep a count? as we go along?

klsdjf.addItem(5)
klsdjf.addItem(5)
klsdjf.addItem(599)
klsdjf.addItem("ssdds")
klsdjf.addItem("5")
klsdjf.addItem("defeat")

console.log(klsdjf.top)
