//callback

function square(num){
    return num * num
}

function callCat(name){
    return `${name}, stop eating the house plants, get down from there, what are you doing it's 4am?!?!!?`
}

function doStuff(data, callback){
    return callback(data)
}

function squareTwo(cb){
    return cb(2)
}

function callTod(banana){
    return banana('tod')
}


//Review
// grab cat list 
// creating cat li
// loop through our cat arr
// setting our li text to our cat name
// append cat ul
let catList = document.getElementById('cat_list')
loadCats(catsArray)

function loadCats(arr){
    //arr.each{|cat|puts cat.name}
    arr.forEach(cat => buildLi(cat))
}

//Event
//item that will trigger the event
//add an Listener to that item 
// pass our listener a callback
// callback will do stuff
    //grab party cat 
    //grab form
    //toggle the class on party cat and form

const addCatBtn = document.body.querySelector('#add_cat_btn')
const formContainer = document.getElementById('modal')
const form = document.body.querySelector('form')
const selectedCat = document.getElementById('selected_cat_info')
const xModal = document.getElementById('x_modal')

const rose = function(e){
    formContainer.classList.toggle('closed')
    selectedCat.classList.toggle('closed')
    
}

const handleSubmit = function(e){
        e.preventDefault() 
        console.log(thing)
        let cat = {name:e.target.name.value, catchphrase:e.target.catchphrase.value, imgUrl:e.target.imgUrl.value}
        buildLi(cat)
}

addCatBtn.addEventListener('click',rose)
xModal.addEventListener('click',rose)
form.addEventListener('submit', handleSubmit)
//handleSubmit(event)
function buildLi(item){
    let li = document.createElement('li')
    li.textContent = item.name
    catList.appendChild(li)
}
