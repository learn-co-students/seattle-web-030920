// {
//     "id": 1,
//     "name": "Ms. Bonkers",
//     "isGoodDog": false,
//     "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
//   }


const dogBar = document.getElementById('dog-bar')
const dogInfo = document.getElementById('dog-info')
const filterBar = document.getElementById("good-dog-filter")
let allDogs = []

filterBar.addEventListener('click', filterEm)


function filterEm(){
    let on = filterBar.innerText.includes("ON")
    filterBar.innerText = filterBar.innerText.includes("OFF") ? 'Filter good dogs: ON' : 'Filter good dogs: OFF'
    on? getAllDogs(on) : getAllDogs()
}

function getAllDogs(filter=false){
    fetch('http://localhost:3000/pups')
    .then(response=>response.json())
    .then(json=>{
        allDogs = json
        return json
    })
    .then(json=>{
        dogBar.innerText = ''
        if(filter){
            json.forEach(dog=>{
                if(dog.isGoodDog){
                    createDogSpan(dog)
                }
            })
        }
        else{json.forEach(dog=>createDogSpan(dog))} 
    })
}

function createDogSpan(doggo){
    let span = document.createElement('span')
    span.innerText = doggo.name
    span.addEventListener('click', ()=> displayDog(doggo))
    dogBar.appendChild(span)
}

function displayDog(dog){
    dogInfo.innerHTML = 
    `
    <img src=${dog.image}>
    <h2>${dog.name}</h2>
    `
    let btn = document.createElement('button')
    btn.innerText = dog.isGoodDog ? "Good Dog!!!!!!!!!!!" : "Gooder Dog"
    btn.onclick = ()=> updateDog(dog)

    dogInfo.appendChild(btn)
}

function updateDog(dog){
    let data = {isGoodDog: !dog.isGoodDog}
    fetch(`http://localhost:3000/pups/${dog.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(json=>displayDog(json))
}

getAllDogs()