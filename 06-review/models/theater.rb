class Theater
    attr_accessor :title
    attr_reader :city

    @@all = []

    def initialize(title,city)
        @title = title
        @city = city
        @@all << self 
    end 
    
    def performances
        Performance.all.select{|performance| performance.theater == self }
    end 

    def musicals
        performances.map{|performance| performance.musical}
    end 

    def self.all
        @@all
    end 

end     