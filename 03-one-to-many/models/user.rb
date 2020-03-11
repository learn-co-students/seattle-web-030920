class User
    attr_reader :username

    @@all =[]

    def initialize(username,bio)
        @username = username
        @bio = bio
        @@all << self 
    end 

    def self.all 
        @@all
    end 

    def tweets
        Tweet.all.select do |tweet|
            self.username == tweet.username
        end  
    end 

    def post_tweet(message) 
        Tweet.new(message,self)
    end 

end 