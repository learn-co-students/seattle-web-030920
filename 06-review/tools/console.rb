require_relative '../config/environment.rb'

intheheights = Musical.new("In the Heights", "Seattle")
meow = Musical.new("Cats the Musical", "Las Vegas")

paramount = Theater.new("Paramount", "Seattle")
hippodrome = Theater.new("Hippodrome", "Baltimore")
chipndales = Theater.new("Chipndales","Las Vegas")

p1 = Performance.new("3/16/20", meow, paramount)
p2 = Performance.new("3/16/20", meow, chipndales)



binding.pry
