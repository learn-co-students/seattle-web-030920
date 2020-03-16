require_relative '../config/environment.rb'

gale = Apple.new("gale")
fuji = Apple.new("fuji")

caeser = Salad.new("caeser")
pasta = Salad.new("pasta")

carrot = Cake.new("carrot")
pound = Cake.new("pound")
butter = Cake.new("butter cake")

test = ChildApple.new("blue")

binding.pry