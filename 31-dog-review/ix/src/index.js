document.addEventListener('DOMContentLoaded', function(){
const dogBar = document.getElementById('dog-bar')
const div = document.getElementById('dog-info')
let filterBtn = document.getElementById('good-dog-filter')
let img = document.createElement('img')
let h2 = document.createElement('h2')
let btn = document.createElement('button')

filterBtn.addEventListener('click', toggleDogs)

function fetchAllDogs(){
    return fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(json => populateDogs(json))
}

function fetchOneDog(id){
    return fetch(`http://localhost:3000/pups/${id}`)
    .then(res => res.json())
    .then(json => buildDogCard(json))
}

function changeDogVal(e){
    let isDogGood 
    e.target.innerText == 'good dog!'? isDogGood = false: isDogGood = true
    console.log(e.target.id)
    fetch(`http://localhost:3000/pups/${e.target.id}`,
    {
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json',
            Accept:'application/json'
        },
        body:JSON.stringify({isGoodDog:isDogGood})
    })
    .then(res => res.json())
    .then(json => {
        let span = document.getElementById('json.id')
        console.log(span)
        if(json.isGoodDog){
            span.className = ''
            btn.innerText = "good dog!" 
        }else{
            span.className = 'bad'
            btn.innerText="bad dog!"
        }
    })

}

function populateDogs(dogs){
    dogs.forEach(dog => addDogBar(dog))
}

function addDogBar(dog){
    const span = document.createElement('span')
    span.innerText = dog.name
    span.id = `toogle_${dog.id}`
    span.className = !dog.isGoodDog?'bad':null
    span.addEventListener('click',showDog)
    dogBar.appendChild(span)
}

function buildDogCard(dog){
  
    img.src = dog.image
    h2.innerText = dog.name
    dog.isGoodDog?btn.innerText = "good dog!": btn.innerText="bad dog!"
    btn.id = dog.id
    btn.addEventListener('click',changeDogVal)
    div.append(img,h2,btn)

}

function showDog(e){
    fetchOneDog(e.target.id)
}

function toggleDogs(e){
    
}


fetchAllDogs()


})

