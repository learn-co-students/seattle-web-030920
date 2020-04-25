const bookList = document.getElementById('book_list')
const newBookForm = document.getElementById('new-book-form')
const editForm = document.getElementById('edit-form')

newBookForm.addEventListener('submit',handleSubmit)
editForm.addEventListener('submit', handleEdit)
//Build one Book Card
//title,author,img,edit,delete
function buildOneCard(book){
    let div = document.createElement('div')
    let pTitle = document.createElement('p')
    let pAuthor = document.createElement('p')
    let img = document.createElement('img')
    let btnEdit = document.createElement('button')
    let btnDelete = document.createElement('button')

    div.id = `book_${book.id}`
    btnEdit.id = `edit_${book.id}`
    btnDelete.id = `delete_${book.id}`
    pTitle.innerText = book.title
    pAuthor.innerText = book.author
    img.src = book.img
    btnEdit.innerText = 'Edit'
    btnDelete.innerText = 'Delete'
    
    btnEdit.addEventListener('click', populateForm)
    btnDelete.addEventListener('click', handleDelete)


    div.appendChild(pTitle)
    div.appendChild(pAuthor)
    div.appendChild(img)
    div.appendChild(btnEdit)
    div.appendChild(btnDelete)
    bookList.appendChild(div)


}

function populateForm(e){
    let str = e.target.id.split('_')
    console.log(str[1])
    //returning out fetch one
    //lets us chain .then off of postBook
    fetchOne(str[1])
    .then(book => {
       editForm.querySelector("input[name='book-title']").value = book.title
       editForm.querySelector("input[name='author']").value =  book.author
       editForm.querySelector("input[name='cover']").value = book.img
       editForm.querySelector("input[name='book-id']").value = book.id
    })

}


//Handlers 

function handleDelete(e){
   let str = e.target.id.split('_')
   deleteBook(str[1])
   let oldBook = document.getElementById(`book_${str[1]}`)
   oldBook.remove()
}

function handleEdit(e){
    e.preventDefault()
    let book = {
        title: e.target["book-title"].value,
        author: e.target.author.value,
        img: e.target.cover.value
    }
    patchBook(book,e.target["book-id"].value)
}

function handleSubmit(e){
    e.preventDefault()
    console.log(e.target["book-title"])
    console.log(e.target.author)
    console.log(e.target.cover)
    let book = {
        title: e.target["book-title"].value,
        author: e.target.author.value,
        img: e.target.cover.value
    }
    
    postBook(book)

}

//Fetch all

function fetchAll(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => {
        books.forEach(book => buildOneCard(book))
    })
}

//Fetch One
function fetchOne(id){
    return fetch(`http://localhost:3000/books/${id}`)
    .then(res => res.json())
    .then(data => data)
}

//Post to DB
function postBook(book){
    fetch('http://localhost:3000/books',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(book)
    })
    .then(res => res.json())
    .then(book => buildOneCard(book))
}

//Patch update a book in our DB
function patchBook(book,id){
    fetch(`http://localhost:3000/books/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(book)
    })
    .then(res => res.json())
    .then(book => {
        let oldBook = document.getElementById(`book_${book.id}`)
        oldBook.innerHTML = `
        <p>${book.title}</p>
        <p>${book.author}</p>
        <img src="${book.img}">
        `
        let btnEdit = document.createElement('button')
        let btnDelete = document.createElement('button')
        btnEdit.id = `edit_${book.id}`
        btnDelete.id = `delete_${book.id}`
        btnEdit.innerText = 'Edit'
        btnDelete.innerText = 'Delete'

        btnEdit.addEventListener('click', populateForm)
        btnDelete.addEventListener('click', handleDelete)

        oldBook.appendChild(btnEdit)
        oldBook.appendChild(btnDelete)
    })
}

//Delete book from our DB
function deleteBook(id){
    fetch(`http://localhost:3000/books/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(console.log)
}



fetchAll()

