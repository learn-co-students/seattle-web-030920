require 'pry'
require_relative './models/dragon_hoard.rb'
require_relative './models/cat.rb'

smaug_hoard = DragonHoard.new('smaug','Lonely Mountain',2000)
king_ghidorah_hoard = DragonHoard.new('King Ghidora','Meteor',1000)
toothless_hoard = DragonHoard.new('toothless','Isle of Berk', 5)
binding.pry
# rose = Cat.new("rose")


# smaug_hoard = {
#     name: "smaug",
#     location:"Lonely Mountain", 
#     hoard_amount:  2000
# }

# king_ghidorah_hoard = {
#     name: "King Ghidora",
#     location:"Meteor", 
#     hoard_amount: 1000
# }

# toothless_hoard = {
#     dragon_name:"Toothless",
#     location:"Isle of Berk", 
#     hoard_amount: 5
# }

# def found_gold(dragon)
  
#     dragon[:hoard_amount] += 1000
#     puts "#{ dragon[:name] } found a pile of gold!"
# end



# found_gold(smaug_hoard)
# found_gold(king_ghidorah_hoard)
# found_gold(toothless_hoard)