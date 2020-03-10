class DragonHoard
    attr_reader :name, :hoard
    # attr_writer :location
    attr_accessor :location, :name

    @@all = []
   
    def initialize(dragon_name, home, amount) 
        @name = dragon_name
        @location = home
        @hoard = amount
        @@all << self
        # binding.pry
    end 
    
    # def name
    #     @name
    # end 

    # def location
    #     @location
    # end 

    # def hoard
    #     @hoard
    # end 
     
    # def new_location(new_location)
    #     @location =  new_location
    # end

    def depo(amount)
        @hoard += amount
    end

    def found_gold
        binding.pry
        self.depo(1000)
    end 

    def self.all
        @@all
    end 

    def self.find_rich_dragon
        @@all.select{|item| item.hoard > 100}
    end 

    def self.change_name_to_tom
        @@all[0].name = 'tom'
    end 

end 