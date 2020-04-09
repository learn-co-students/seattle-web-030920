class Author < ActiveRecord::Base
  has_many :books

  # def book
    # Book.find_all(author_id: author.id)
    # SELECT * FROM books WHERE author_id == author.id
  # end
  def book_count
    self.books.count
  end
end