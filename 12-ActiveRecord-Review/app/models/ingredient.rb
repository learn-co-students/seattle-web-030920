class Ingredient < ActiveRecord::Base
    belongs_to :store
    has_many :inventories
    has_many :users, through: :inventories
end 

#apple.users
    # has_many and belongs_to
    # def inventories
    #     Inventorie.all.select{|inventory| inventory.ingredient == self}
    # end 
    # has_many through:
    # def ingredient
    #     inventories.map{|inventory| inventory.ingredient}
    # end
