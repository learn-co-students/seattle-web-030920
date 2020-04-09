class BooksController < ApplicationController
  set :views, "app/views/books"
  # set :method_override, true
  get '/' do
    # binding.pry
    "<h1>Hello World</h1>"
  end

  get '/books' do
    #getting access to the data I want to display
    #by communicating with my database
    @books = Book.all
    # binding.pry
    #creating the html string to display and output to the screen.
    erb :index
  end 

  get '/books/new' do
    @authors = Author.all
    erb :new
  end

  get '/books/:book_id' do
    # {book_id: <user_input>}
    # binding.pry
    @book = Book.find(params[:book_id])
    #this is the html element we want to return
    erb :show
  end

  post '/books' do
    # binding.pry
    @book = Book.create(params[:book])
    redirect "/books/#{@book.id}"
  end

  get '/books/:id/edit' do
    @book = Book.find(params[:id])

    erb :edit
  end

  patch '/books/:id' do
    # binding.pry
    @book = Book.find(params[:id])
    @book.update(params[:book])
    redirect "/books/#{@book.id}"
  end

  delete '/books/:id' do
    @book = Book.find(params[:id])
    @book.delete
    redirect "/books"
  end

  # get '/search' do
  #   binding.pry
  # end

end