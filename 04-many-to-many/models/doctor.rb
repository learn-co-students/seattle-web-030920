class Doctor
    attr_reader :nurse
    attr_accessor :name
    
    @@all = []
    
    def initialize(name, nurse)
        @name = name
        @nurse = nurse 
        @@all << self
    end

    def appointments
        Appointment.all.select{|appointment| appointment.doctor == self}
    end 

    def patients 
        self.appointments.map{|appointment| appointment.patient.name}.uniq
    end 

    def nurse_name
        @nurse.name
    end


    def self.all
        @@all
    end 
end 