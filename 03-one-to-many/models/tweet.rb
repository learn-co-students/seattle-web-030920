class Tweet

    @@all =[]

    def initialize(message, user)
      @message = message
      @user = user
      @@all << self 
    end 

    def self.all 
        @@all
    end 

    def username
        @user.username
    end 

    def user_bio
        @user.bio
    end 
    


end 