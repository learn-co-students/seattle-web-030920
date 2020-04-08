class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update]

  def index
    @books = Book.all
  end

  # def show
  #   # byebug
  #   # set_params
  # end

  def new
    @book = Book.new
  end

  def create
    # byebug
    book = Book.create(book_params)
    redirect_to book_path(@book.id)
  end

  # def edit
  #   # set_params
  # end

  def update
    # set_params
    @book.update(book_params)
      redirect_to book_path(@book.id)
  end

  private

  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author_id, :snippet)
  end
end
