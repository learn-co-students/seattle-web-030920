class Book < ActiveRecord::Base
    has_many :user_books
    has_many :users, through: :user_books
    #Create
        #Book.new
        #Book.create
    #Read
        #Book.all
        #Book.find
    #Update
        #Book.update
        #Book#update
    #DELETE
        #Book.destroy_all
        #Book#destroy 
end 