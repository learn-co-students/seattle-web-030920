# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

3.times do  
  Store.create(
    name: Faker::Ancient.god ,
    location: Faker::Address.city ,
    address: Faker::Address.full_address,
    rating: rand(1..10),
    open: true
  )
end

10.times do 
  Tea.create(
    name: Faker::Space.galaxy,
    price: rand(1..30),
    store: Store.all.sample
  )
end