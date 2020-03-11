class Post
    attr_reader :title, :date
    @@all = []

    def initialize(title, date)
        @title = title
        @date  = date
        @@all << self
    end

    def comments
        Comment.all.select do |comment|
            self.title == comment.post_title
        end
    end 

    def make_comment(content) 
        Comment.new(content,self)
    end 


    def self.all
        @@all
    end 
end 