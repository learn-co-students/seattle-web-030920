//Elements from the pre-loaded dom
const ul = document.getElementById('cat_list')
const mainCatContainer = document.getElementById('cat_container')
const addCatBtn = document.getElementById('add_cat_btn')
const add_cat_form = document.body.querySelector('#modal')

//EventListeners from pre-loaded dom
addCatBtn.addEventListener('click',renderForm)

//Fetch cats from DB
//Fetch GET all cats
function fetchAll(){
    fetch('http://localhost:3000/cats')
    .then(res => res.json())
    .then(json => {
        //loads all cats to side bar
        loadCats(json)
        //loads one cat to main tag
        loadOneCat(json[0])
    })
}
//Fetch GET one Cat
function fetchOne(id){
    fetch(`http://localhost:3000/cats/${id}`)
    .then(res => res.json())
    .then(json =>loadOneCat(json))
}

//Fetch POST one cat to DB
function postCat(cat){
    fetch('http://localhost:3000/cats', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cat),
    })
    .then(res => console.log(res))

}

//Fetch PATCH existing cat
function patchCat(cat){
    let mainCat = document.querySelector('.main_cat')
    console.log(mainCat.id)
    fetch(`http://localhost:3000/cats/${mainCat.id}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cat),
    })
    .then(res => console.log(res))
}

//Fetch DELETE existing cat
function deleteCat(cat){
    fetch(`http://localhost:3000/cats/${cat.target.id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
        }
    })
    .then(res => console.log(res))
}

//Builds elements for a one li 
//adds event listeners 
//and appends 
function loadOneCatLi(cat){
    let li = document.createElement('li')
    let btn = document.createElement('button')
    li.innerText = cat.name
    btn.innerText = "x"
    li.className = "cat_li"
    btn.id = cat.id
    li.id = cat.id
   
    li.addEventListener('click', handleChangeCat)
    btn.addEventListener('click',deleteCat)

    ul.appendChild(li)
    li.parentNode.insertBefore(btn,li.next)
}

//Calls above function on every cat from Fetch All function 
function loadCats(cats){
    cats.forEach(cat => loadOneCatLi(cat))
}


//Builds Main tag selected cat
function loadOneCat(cat){
    mainCatContainer.innerHTML = `
        <div class="main_cat" id=${cat.id}>
            <h1>${cat.name}</h1>
            <img src="${cat.imgUrl}">
            <p>${cat.catchphrase}</p>
            <button id="edit_cat">Edit</button>
        <div>
    `
    let edit_cat = document.getElementById('edit_cat')
    edit_cat.addEventListener('click',toggleEdit)
}

//Opens form and sets it to edit
function toggleEdit(){
    let mainCat = document.querySelector('.main_cat')
    add_cat_form.classList.toggle('closed')
    mainCat.classList.toggle('closed')
    let h1 = document.getElementById('cat_form_header')
    h1.innerText = "Edit"
    add_cat_form.addEventListener('submit', handleEdit)
}

//Opens form and sets it to create 
function renderForm(){
    console.log(add_cat_form)
    let mainCat = document.querySelector('.main_cat')
    add_cat_form.classList.toggle('closed')
    mainCat.classList.toggle('closed')
    add_cat_form.addEventListener('submit', handleSubmit)

}

//testing onclick
// let h1 = document.getElementById('cat_h1')
// h1.onclick = function(){
//     console.log('hi')
// }

//passes info to PATCH
function handleEdit(e){
    e.preventDefault()
    let cat = {name:e.target.name.value,catchphrase: e.target.catchphrase.value, imgUrl:e.target.imgUrl.value }
    patchCat(cat)
   
}

//Changes selected cat
function handleChangeCat(e){
    console.log('inside of change')
    fetchOne(e.target.id)
    console.log(add_cat_form.className)
    if(add_cat_form.className != 'closed'){
        add_cat_form.classList.toggle('closed')
    }
}

//Passes information to POST
function handleSubmit(e){
    e.preventDefault()
   let cat = {name:e.target.name.value,catchphrase: e.target.catchphrase.value, imgUrl:e.target.imgUrl.value }
   loadOneCatLi(cat)
   postCat(cat)  
}


//Fetches every cat on domload 
fetchAll()

//fetch one 

//*Build cat list items 
//items should have 
//*Delete Button
//Delete Button should remove cat from view [after lunch] and update the DB
//*id attribute of the cats id
//*class attribute of cat_li
//*Click on the cat name should switch the selected cat in the main tag 

// Main tag should have 
//*a selected cat with the cats name, image and catchphrase 
//*and id attribute with the cats id
//[after lunch]an Edit button that will toggle to the form
//after edit is submitted
//form will toggle back to updated cat

//*the add button should toggle from the main cat info to a form
//the form should have 
//*inputs for name, catchphrase and imgURL
//*a submit button
//[after lunch] on submit the cat will be added to the DB
//form will toggle back to new cat


