// class Animal 
//     def initialize(name, sound, habitat)
//         @name = name
//         @sound = sound 
//         @habitat = habitat
//     end 

//     def what_is_this_animal 
//         "This animal is a #{name} it lives in the #{habitat}"
//     end 
// end

// let cat = 
// {
//     name:'cat',
//     sound:'mow',
//     habitat:'my home',
//     canFly: false
// }

// let duck = 
// {
//     name:'duck',
//     sound:'quack',
//     habitat:'lake',
//     canFly: true
// }

// function Animal(name,sound,habitat,canFly) {
//     this.name = name,
//     this.sound = sound,
//     this.habitat = habitat,
//     this.canFly = canFly
// }



// Animal.prototype.whatIsThisAnimal = function() {
//     return `this animal is a ${this.name}!`  
// }

class Animal{
    constructor(name,sound,habitat, canFly) {
        this.name = name,
        this.sound = sound,
        this.habitat = 'earth',
        this.canFly = canFly
    }
    food = []

    whatIsThisAnimal = () => {
        return `this animal is a ${this.name}!`
    }

    addFood = (food) => {
        if(!this.food.includes(food)){
            this.food.push(food)
        }
        return this.food
    }

}

class Mammal extends Animal{
    isMammal = true
    hair = true
    hasHair = () => {
        return `yes a ${this.name} has hair`
    }
}

class Bird extends Animal{
    constructor(name, sound, habitat){
        super(name, sound, habitat, true)
        this.isBird = true
    }
    hasFeathers = () => {
        return `yes a ${this.name} has feathers`
    }
}


let cat = new Mammal('mow', 'cat', 'my home')
let duck = new Bird('duck', 'quack', 'lake')
cat.addFood('milk')
cat.addFood('milk')
cat.addFood('fish')



// let test = document.getElementById('animals_h3')
// test.addEventListener('click', (e)=> console.log(e))