README
Objective
Perform full CRUD for 1 resource
Connect two resources together
Understand form helpers
Getting Started

[x] Make a Rails app called brews-crew
[x] Make a model Brew that has attributes blend_name, origin, notes, and strength. 
The first three are strings, and strength is an integer
`rails g resource brew blend_name origin notes strength:integer --no-test-framework`
[x] add 'faker' gem to Gemfile
[x] create seed data

# Deliverables
### Brews Resource
[x] route for '/brews' that displays all of your coffees as links to their show pages, with links to delete each brew
<!-- index, show, delete  -->
[x] route to create a new brew
<!-- new, create -->
[x] route to edit a brew
<!-- edit, update -->
[x] route to '/brews/strongest' find the brews with the highest strength
<!-- custom route -->


### Purchase Resource
[x] A purchase has one brew, and a brew has many purchases. 
[x] A purchase also has a customer_name, which is a string, and a price, which is a float.

[x] Make a model Purchase with the appropriate attributes
[x] route to create a new purchase
[x] the new page should allow you to choose the brew that was purchased
<!-- new, create -->

[x] route for '/purchases' that displays all of the purchases as links to their show pages
<!-- index -->
[x] the show page should include a link to the brew that was purchased
<!-- show -->
Now that you have created the purchase association:
[]the brew show page should display a list of all of the customers who have enjoyed that brew

### Bonus
[x] a brew name should be unique
[]a purchase should have a size, which should be small, medium, or large
[]a purchase should have a creamer_strength, which should be light, regular, or none
[]a purchase should have special_instructions, which should be less than 140 characters

Faker Hint
We haven't used Faker that much so far. If you're not sure how to generate seed data with Faker, it should look something like:

5.times do
  Brew.create(
    blend_name: Faker::Coffee.blend_name,
    origin: Faker::Coffee.origin,
    notes: Faker::Coffee.notes,
    strength: rand(1..5)
  )
end

10.times do
  Purchase.create(
    customer_name: Faker::FunnyName.name_with_initial,
    price: Faker::Commerce.price(range: 3.0..7.0),
    brew: Brew.order("RANDOM()").first
  )
end