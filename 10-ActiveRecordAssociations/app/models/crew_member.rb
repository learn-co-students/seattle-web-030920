class CrewMember < ActiveRecord::Base
    belongs_to :ship
    has_many :away_mission_registrations
    has_many :planets, through: :away_mission_registrations

#Create 
#CrewMember.new({hash}) - create a new crew member 
#CrewMember.create - New and save all in one!!

#Read
#CrewMember.all - returns all of the instances of crew member
#CrewMember.first - returns the first crew member
#CrewMember.last - returns the last crew member
#CrewMember.find(id) - returns the first id that matches and null if nothing
#CrewMember.find_by({hash}) - the first instance matching that hash keys value

#Update
#CrewMember#save - will save our new obj to the DB
#CrewMember.update({hash}) - updates all of the rows of the hash key column
#CrewMember#update({hash}) - updates the instance at the column key provided with a new value

#Delete
#CrewMember#destroy
#CrewMember.destroy_all
end 