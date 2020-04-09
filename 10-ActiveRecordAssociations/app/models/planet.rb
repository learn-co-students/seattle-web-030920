class Planet < ActiveRecord::Base
    has_many :away_mission_registrations
    has_many :crew_members, through: :away_mission_registrations

    # def crew_members
    #    mission = AwayMissionRegistration.all.select{|mission|mission.planet == self}
    #    mission.map.{|mission| mission.crew_member}
    # end 
end 