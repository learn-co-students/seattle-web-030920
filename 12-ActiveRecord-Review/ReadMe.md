User
	has_many ingredients through inventory
		name
		gold

Inventory
    belongs to a user 
    belongs to an ingredient 
	
Ingredient  
	has_many users through inventory
	belongs_to store
		name
		price
Store 
	has_many ingredients
		name

- [] A user can log in or sign up
- [] A user can buy an ingredient from the store and it will deduct a price from the users gold and the item will be added to the users inventory 
- [] A user can view their ingredients
- [] A user can view the main menu page
- [] The users gold is shown on the main menu page