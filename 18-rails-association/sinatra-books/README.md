# Sinatra RESTful Routes

| CRUD Letter | RESTful Route          | View |
|-------------|------------------------|-------------------|
| C(reate)    |   1. GET `books/new`  && 2. POST `/books`    |      `new.erb && no new view`         |
| R(ead)      |   GET  `/books`       |     `index.erb`        |
| R(ead)      |   GET   `/books/:id`  |     `show.erb`         |
| U(pdate)    |   1. GET  `books/:id/edit` && PATCH `/books/:id` |   `edit.erb`            |
| D(elete)    |    DELETE `books/:id`   |               |

## Students Will Be Able to:
 - [ ] Explain the connection between HTTP methods and CRUD
 - [ ] Explain the connection between HTTP URL paths and CRUD
 - [ ] Implement server-side full CRUD in Sinatra
 - [ ] Use Postman to test controller actions when the view code has not been completed

## Deliverables

 - [ ] As a user, I should be able to see a list of books.
    - What models do I need
        - `book.rb`
        - `create_table books`
    - What routes do I need
        `get '/books`
    - What controller actions do I need
        `index`
    - whst view is going to associated with this
        - `index`
 - [ ] As a user, I should be able to view the information about a particular book by providing its ID
    - no new model 
    - route : `get '/books/:id'
    -controller action : show
    -view: show.erb
 - [ ] As a user, I should be able to create a new book by providing form data
    - models -> no new models
    - routes -> `get new` && `post books`
    - view -> `new` && `redirect`
 - [ ] As a user, I should be able to update an existing book by providing its ID as well as form data
    - models -. now new models
    - routes `get edit` && `patch /books/:id`
    - controller actions : edit, update
    - views -> edit && redirect `show page`
 - [ ] As a user, I should be able to delete an existing book by providing its ID

## Questions to Ask for Each Deliverable

1. What new model(s) do I need?
    - New class?
    - New migration? (i.e. does the schema need to change?)
    - Associations?
    - Seeds?
2. What route(s) do I need?
3. What controller action(s) do I need?
    - In Sinatra, this means the code directly below the route, but in Rails it will be a separate file
4. What view(s) do I need?

## Instructions for Getting Started

To run this application, use the following bash commands:

0. `cd` into this directory
1. `bundle install`
2. `rake db:migrate`
3. `rake db:seed`
4. `shotgun`

Then using a web client, navigate to the host printed out in the terminal, e.g. `http://127.0.0.1:9393/` or `http://127.0.0.1:9393/books`

## Questions:
- ::Book
- Modules and how they are being used.
    - substitution and scripting < erb >
    <%= > - squid
    <% > - icecream cone
- dynamic routes. how are they being accessed. 
    - would a user type in the url with resources.
    - they would be getting an automated response. 

- ## Questions 
    - Datatype other than integer, that can be used to generate the relationship
    - refrences -> index -> what is it?
    - f.label in form_for
    - html label tag.


[ ] **As a site visitor, I should be able to see a list of authors(For the purpose of this project, an author has many books and a book belongs to one author.)**
- [ ] **As a site visitor, I should be able to view a single author.  I should be able to see the author's name and count of books.**
- [ ] **As a site visitor, I should be able to create a new book and associate it with an existing author.**

## Review Questions:
- different `form_for` and `form_tag`
- validations??
- trouble and basic forms and associations lab
    - getting scope of the lab
    - how to approach it
- validations lab

