const sohla = {
    chefName: "Sohla",
    appearances: 15, 
    role:"Assistant Food Editor"
}

const buildChef = function(chefName, appearances, role){
    // return {
    //     chefName:chefName,
    //     appearances:appearances,
    //     role:role
    // }
    return {
        chefName,
        appearances,
        role
    }
}

const chris = buildChef('chris', 100, 'Deputy Food Editor')
const brad = buildChef('brad', 100, 'Test Kitchen Video Host')

//pure functions 
//destructuring 

// const intro = function(chef){
//     let chefName = chef.chefName
//     let role = chef.role
//     return `Hi, I'm ${chefName}, my role is ${role}`
// }
// const intro = function(chef){
//     let {chefName, role} = chef
//     return `Hi, I'm ${chefName}, my role is ${role}`
// }

const intro = function({chefName, role}){ 
    return `Hi, I'm ${chefName}, my role is ${role}`
}

const addAppearance = function(chef){
    return {...chef, appearances:chef.appearances+1}
}

const addShow = function(chef){
    return {...chef, show:'Its Alive'}
}

const take = num => `take ${num}`

const numOfAppearances =({appearances}) => `I've appeared on ${appearances} videos`

const buildChefArrow = (chefName, appearances, role) => ({chefName, appearances,role})
const clair = buildChefArrow('clair', 150, 'Contributing Food Editor')


const makeRecipe = function(){
    console.log(this)
    return (recipe) => {
        return `Hello, I'm ${this.chefName} and I'm making ${recipe}`
    }
}


// const makeDonuts = () => makeRecipe(chris)()

const makeDonuts = () => makeRecipe.bind(chris)()

const addRecipe = function(){
    return (recipe) => {
        return {...this, currentRecipe:recipe}
    }
}

const changeCurrentRecipe = addRecipe.bind(sohla)()
const changeToDonuts = changeCurrentRecipe('donuts')
