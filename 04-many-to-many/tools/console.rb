require 'pry'
require_relative '../models/appointment.rb'
require_relative '../models/doctor.rb'
require_relative '../models/patient.rb'
require_relative '../models/nurse.rb'

chapel = Nurse.new("Christine Chapel")

mcCoy = Doctor.new("Leonard McCoy", chapel)
crusher = Doctor.new("Beverly Crusher", chapel)
emh = Doctor.new("Emergency Medical Hologram", chapel)

chekov = Patient.new("Pavel Chekov")
sulu = Patient.new("Hikaru Sulu")
la_Forge = Patient.new("Leordi La Forge")
troi = Patient.new("Deanna Troi")
torres = Patient.new("B'Elanna Torres")
kim = Patient.new("Harry Kim")

ap1 = chekov.make_appointment(04/11/2263,"phaser bruns", mcCoy)
ap2 = sulu.make_appointment(04/11/2263,"Life Prolongation Complex", mcCoy)
ap3 = la_Forge.make_appointment(04/11/2263,"phaser bruns", mcCoy)
ap4 = sulu.make_appointment(04/11/2263,"phaser bruns", crusher)
ap5 = troi.make_appointment(04/11/2263,"Transporter Psychosis", crusher)
ap6 = sulu.make_appointment(04/11/2263,"phaser bruns", crusher)



binding.pry



