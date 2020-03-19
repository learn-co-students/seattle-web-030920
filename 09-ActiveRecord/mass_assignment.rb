require_relative "config/environment.rb"
class Crew
    attr_accessor :name, :rank, :ship, :species

    def initialize(arg_hash)
        arg_hash.each do |key, value|
            self.send("#{key}=", value)
        end 
    end 

end 

# tuvok = Crew.new("Vulcan", "Tuvok", "Ensin Lieutenant", "Voyager")

seven = Crew.new({name:"7 of 9",rank:"Master chief petty officer",ship:"Voyager", species:"Borg"})
janeway = Crew.new({rank:"Captain",ship:"Voyager", species:"Human", name:"Kathryn janeway"})

binding.pry