User.destroy_all
Ingredient.destroy_all
Inventory.destroy_all
Store.destroy_all
User.destroy_all

bob = User.create({name:"bob",gold:10})
s1 = Store.create({name:"FoodRus"})

egg = Ingredient.create({name:"egg",store_id:s1.id,price:2})
oil = Ingredient.create({name:"oil",store_id:s1.id,price:5})
flower = Ingredient.create({name:"flower",store_id:s1.id,price:6})


puts 'done'