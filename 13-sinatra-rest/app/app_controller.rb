class Book < ActiveRecord::Base
end

class AppController < Sinatra::Base
  get '/' do
    # binding.pry
    "<h1>Hello World</h1>"
  end

  get '/all_the_books' do
    #getting access to the data I want to display
    #by communicating with my database
    books = Book.all
    # binding.pry
    #creating the html string to display and output to the screen.
    books.map do |book|
      "<a href=\"http://localhost:9393/books/1\"> <h1> #{book.title} </h1> </a>"
    end
  end 

  get '/books/1' do
    book = Book.find(1)
    #this is the html element we want to return
    "<h1> #{book.title} </h1>
    <h3> #{book.author} </h3>
    <h5> #{book.snippet} </h5>"

  end
end