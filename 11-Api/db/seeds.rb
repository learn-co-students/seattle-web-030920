User.destroy_all
Book.destroy_all

u1 = User.create(username: "ix")
b1 = Book.create(title:"how to sleep 23 hours a day", authors: "Rose the cat") 


u1.books << b1

puts "done!"