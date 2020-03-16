class Food
    attr_reader :name, :color

    def initialize(name)
        @name = name
    end 

    def eat
        "yum!"
    end 
end 