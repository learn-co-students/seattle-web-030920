class AuthorsController < ApplicationController
  def index
    @authors = Author.all
  end


  def show
    @author = Author.find(params[:id])
    @book_count = @author.books.count
  end

end
