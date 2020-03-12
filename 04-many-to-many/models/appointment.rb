class Appointment
    attr_reader :doctor, :patient
    attr_accessor :date, :issue
    
    @@all = []
    
    def initialize(date, issue, doctor, patient)
        @date = date
        @issue= issue
        @patient = patient
        @doctor = doctor
        @@all << self
    end

    def self.all
        @@all
    end 
end 