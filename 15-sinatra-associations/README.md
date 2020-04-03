## SWBATs
# What is RESTful Routes
    - REspresentational State of Transfer
    - What does HTTP is stateless
    - doesn't store the state of the application.
    - values of the current class/variables. 
    - static -> doesn't change

### ActiveRecord associations
 - [ ] Add a new ActiveRecord model and associate it with an existing model
 - [ ] Display information about an associated model.
 - [ ] Allow the user to make a new instance of an ActiveRecord model that belongs to another model


## Questions
- Puppy Lab -> @puppy (instance variable), being accessed in the view. -> how did we get access to this variable.
- Code Challenge Questions : Friday -> Week 2.


## Questions :
  - CRUD -> Sinatra
  - Create :
    - ```GET -> '/books/new'```
    - ```POST -> '/books/:id -> '/books'```
  - Read
    - ```GET -> index - '/books'```
    - ```GET -> show - '/books/:id'```
  - Update
    - ```GET -> edit -> '/books/:id/edit'```
    - ```PATCH( or PUT) -> '/books/:id'```
  - Delete
    - ```GET -> delete -> (button) -> show -> '/books/:id'```
    - ```DELETE -> '/books'```

### High-level development practices
 - [ ] Work within a nested file structure for multiple models
 - [ ] Know which questions to ask when given a new user story
    1. What new model(s) do I need?
       - New class?
       - New migration? (i.e. does the schema need to change?)
       - Associations?
       - Seeds?
    2. What route(s) do I need?
    3. What controller action(s) do I need?
       - In Sinatra, this means the code directly below the route, but in Rails it will be a separate file
    4. What view(s) do I need?

## Deliverables for today's lecture
- [ ] **As a site visitor, I should be able to see a list of authors(For the purpose of this project, an author has many books and a book belongs to one author.)**
- [ ] **As a site visitor, I should be able to view a single author.  I should be able to see the author's name and count of books.**
- [ ] **As a site visitor, I should be able to create a new book and associate it with an existing author.**

### Routes Summary
| CRUD | HTTP Verb  | Route  | Action  |  View | UsedFor |
|---|---|---|---|---|---|
| Create |GET&darr; | '/books/new'  | books#new  |'new.erb'  |  form page to create a new book |
| Create | POST | '/books'  |  books#create | Reroutes to index| Creates a new book in the controller   |
| Read | GET  | '/books'  | books#index  |  index.erb|  displaying information about books  |
| Read |GET  | '/books/:id'  | books#show  |  show |display information about a specific book  |
|  Update | GET&darr; | 'books/:id/edit'  | books#edit| edit.erb  | Renders a form for user to edit  |
|  Update  | PATCH | 'books/:id'  | books#update  | redirects to show | updates the attributes in aspecific book |
| Delete  | "button" |  - |  - |  form with button in the show page | create a form so we can delete records and map it to an action  |
  |  Delete | Delete |  'books/:id' | books#delete |  | deletes/destroys a specific book in the DB|

## Resources
1. Writing a migration to rename column and changecolumn type: http://codkal.com/how-rename-databasecolumn-rails-5-migrastion/
2. HTML form elements: https://www.w3schools.comhtml/html_form_elements.asp
3. Another reference for select in HTML : https:/www.learnhowtoprogram.com/ruby/ruby-databasebasics/select-form-fields-in-sinatra

4. Select in Sinatra forms
```html
<select id="<Foreign Key Name>" name="<variable Id Name>" type="text">
  <% <Collection>.each do |item| %>
    <option value="<%=Displayed name id%>"><%= Display Name%></option>
  <% end %>
</select>
```
###Questions
- DQ:
    - Which routes would you redirect vs render a new view?
    - params -> how is the params hash created
    - how is it passed around to different routes