class Food
    attr_reader :name, :color
    @@all = []
    def initialize(name)
        @name = name
        @@all << self
    end 

    def eat
        "yum!"
    end 

    def self.all
        @@all
    end 
end 