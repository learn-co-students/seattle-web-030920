class Musical
    attr_accessor :name
    attr_reader :setting_city

    @@all = []

    def initialize(name,setting_city)
        @name = name
        @setting_city = setting_city
        @@all << self 
    end 

    def perform_in_theater(date,theater)
        Performance.new(date,self,theater)

    end 

    def performances
        Performance.all.select{|performance| performance.musical == self }
    end 

    def theaters
        performances.map{|performance| performance.theater}
    end 

    def self.all
        @@all
    end 

    def self.all_introductions
        self.all.each do |musical|
             puts "Welcome, this is #{musical.name}, set in #{musical.setting_city}"
        end 
    end 

end     