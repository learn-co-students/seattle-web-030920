class User < ActiveRecord::Base
    has_many :inventories
    has_many :ingredients, through: :inventories
end 