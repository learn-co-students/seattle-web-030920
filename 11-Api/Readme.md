## Hashes and the Internet

## SWBAT
[ ] write a command line applications (CLI)
[ ] Explain what happens when a user types in a URL
[ ] Identify and define JSON
[ ] Define Application Programming interface (API)
[ ] Explain what APIs are used for
[ ] Implement  a GET API call

## user stories 
MVP
* As a user I'd like to log-in or sign up to an account
* As a user I'd like to search for books
* As a user I'd like to view a list of book titles 
* I want to save a book to my account
* I want to view my saved books
* I want to update my list of books and remove books

S-goals 
* have notes for my books 
* share books with friends 
* have friends 


Models 
    Users
    Books
    User_books 

 Baker has_many :cakes
 Cake belongs_to :baker

  
 Owner has_many :cats
 Cat belongs_to :owner 

 Landlord has_many :renter, through::lease
 lease belongs_to :renter belongs_to :landlord
 Renter has_many :landlords , through::lease 

 Landlord has_many appartments 
 Appartment belongs_to :landlord 


Car has_many :mechanics, through: :job
job belongs_to :car, belongs_to Mechanic 
Mechanic  has_many :cars, through: :job

Mechanic belongs_to :shop
Shop has_many :mechanics 

