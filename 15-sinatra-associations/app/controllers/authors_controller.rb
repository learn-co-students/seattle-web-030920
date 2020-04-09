class AuthorsController < ApplicationController
  set :views, "app/views/authors"
  # set :method_override, true

  get '/authors' do
    @authors = Author.all
    erb :index
  end

  get '/authors/:id' do
    @author = Author.find(params[:id])
    @book_count = @author.book_count
    # Book.where(author_id: @author.id).count
    erb :show
  end
end