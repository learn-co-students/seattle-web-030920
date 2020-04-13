# README

## Objective

* Perform full CRUD for 1 resource
* Connect two resources together
* Understand form helpers

### Getting Started

* Make a Rails app called brews-crew
* Make a model Brew that has attributes `blend_name`, `origin`, `notes`, and `strength`.  The first three are strings, and `strength` is an integer
* add 'faker' gem to Gemfile
* create seed data

### Deliverables

#### Brews Resource

* route for '/brews' that displays all of your coffees as links to their show pages, with links to delete each brew
* route to create a new brew
* route to edit a brew
* route to '/brews/strongest' find the brews with the highest strength

#### Purchase Resource

A purchase has one brew, and a brew has many purchases.  A purchase also has a `customer_name`, which is a string, and a `price`, which is a float.

* Make a model Purchase with the appropriate attributes
* route to create a new purchase
* the new page should allow you to choose the brew that was purchased
* route for '/purchases' that displays all of the purchases as links to their show pages
* the show page should include a link to the brew that was purchased

Now that you have created the purchase association:
* the brew show page should display a list of all of the customers who have enjoyed that brew

- Bonus
  * a brew name should be unique
  * a purchase should have a `size`, which should be small, medium, or large
  * a purchase should have a `creamer_strength`, which should be light, regular, or none
  * a purchase should have `special_instructions`, which should be less than 140 characters

## Faker Hint

We haven't used Faker that much so far.  If you're not sure how to generate seed data with Faker, it should look something like:
```
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
```
