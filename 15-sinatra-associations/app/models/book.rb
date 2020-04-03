class Book < ActiveRecord::Base
  belongs_to :author

  has_many :authors_books
  has_many :authors, through: :authors_books

    # @book.authors
    # @book.authors_books
end