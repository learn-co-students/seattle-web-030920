class Cake < Food

    def initialize(name)
        # @name = name
        super
        @slice = 6
    end 

    def flavor 
        "really sweet"
    end 

    def eat
        super
        if @slice > 1
            @slice -= 1
        else
            super
        end
    end 
    
end