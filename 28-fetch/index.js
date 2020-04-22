//elements from loaded dom
const catList = document.getElementById('cat_list')
const addCatBtn = document.body.querySelector('#add_cat_btn')
const formContainer = document.getElementById('modal')
const form = document.body.querySelector('form')
const selectedCat = document.getElementById('selected_cat_info')
const xModal = document.getElementById('x_modal')
const catImg = document.getElementById('cat_img')
//building dom 
function buildLi(item){
    let li = document.createElement('li')
    li.textContent = item.name
    li.addEventListener('click', handleDelete)
    catList.appendChild(li)

}


function loadCats(arr){
    arr.forEach(cat => buildLi(cat))

}

function changeSelectedCat(cat){
    catImg.src = cat.url
}

//event handlers 
function toggleForm(e){
    formContainer.classList.toggle('closed')
    selectedCat.classList.toggle('closed')

}

function handleSubmit(e){
        e.preventDefault() 
        let cat = {name:e.target.name.value, catchphrase:e.target.catchphrase.value, imgUrl:e.target.imgUrl.value}
        buildLi(cat)

}

function handleDelete(e){
    e.target.remove()
}



// event listener 
addCatBtn.addEventListener('click',toggleForm)
xModal.addEventListener('click',toggleForm)
form.addEventListener('submit', handleSubmit)

// console.log(fetch('https://swapi.py4e.com/api/people/1'))
function handleFetch(){
     return fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(json => {
        
        changeSelectedCat(json[0])
        return json
       
    })

}


loadCats(catsArray) 
handleFetch()





