class Performance 
    attr_reader :theater, :musical
    attr_accessor :date
    @@all = []

    def initialize(date,musical,theater)
        @date = date
        @musical = musical
        @theater = theater
        @@all << self
    end

    def hometown_setting?
        @musical.setting_city == @theater.city
    end 

    def self.all
        @@all
    end 


    
end 