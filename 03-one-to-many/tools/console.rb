require 'pry'
require_relative '../models/tweet.rb'
require_relative '../models/user.rb'
require_relative '../models/post.rb'
require_relative '../models/comment.rb'

# coffee_dad = User.new("coffee dad","loves coffee")
# tea_mom = User.new("tea mom", "loves tea")

# t1 = Tweet.new("coffee coffe",coffee_dad)
# t2 = Tweet.new("coffee <3 ",coffee_dad)
# t3 = Tweet.new("need coffee",coffee_dad)

# t4 = Tweet.new("tea",tea_mom)
# t4 = Tweet.new("T",tea_mom)
# t4 = Tweet.new("rooibos",tea_mom)

# coffee_dad.post_tweet("coffeeeeeeeeeeeeee")
coffee_is_good = Post.new("coffee is good",'10/20/2020')
robots = Post.new("robots are cool",'12/20/2020')
c1 = coffee_is_good.make_comment("first!")
c2 = coffee_is_good.make_comment("coffee is NOT good ):")
c3 =coffee_is_good.make_comment("click here now to win free coffee")
c4 =robots.make_comment("yeahhhhh")

binding.pry