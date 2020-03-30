Book.destroy_all

Adapter::GoogleBooks.new("Hephaestus Mora").fetch_books
Adapter::GoogleBooks.new("Shakespeare").fetch_books
Adapter::GoogleBooks.new("John Carpenter").fetch_books
