Brew.destroy_all
Purchase.destroy_all

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

puts "seeds done."