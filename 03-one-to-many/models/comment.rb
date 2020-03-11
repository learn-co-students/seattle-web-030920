class Comment
    @@all = []

    def initialize(content, post)
        @content = content
        @post = post
        @@all << self
    end 

    def post_title
        @post.title 
    end 

    def post_date
        @post.date
    end

    def self.all
        @@all
    end 
    
end