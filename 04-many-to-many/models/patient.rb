class Patient
    attr_accessor :name
    @@all = []
    
    def initialize(name)
        @name = name
        @@all << self
    end

    def appointments
        Appointment.all.select{|appointment| appointment.patient == self}
    end 

    def doctors 
        self.appointments.map{|appointment| appointment.doctor.name}.uniq
    end 

    def make_appointment(date, issue, doctor) 
        Appointment.new(date, issue, doctor, self)
    end

    def self.all
        @@all
    end 
end 