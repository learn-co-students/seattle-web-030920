class Nurse
    attr_accessor :name
    
    @@all = []
    
    def initialize(name)
        @name = name
        @@all << self
    end

    def doctors
       Doctor.all.select{|doctor| doctor.nurse == self}
    end 

    def self.all
        @@all
    end 

end 