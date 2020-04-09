Planet.destroy_all
Ship.destroy_all
CrewMember.destroy_all
AwayMissionRegistration.destroy_all

federation_ship_class = ["Intrepid", "Galaxy", "Constitution", "Dreadnought"]
ranks = ["crewman", "Ensign", "Lieutenant", "Commander", "Captin", "Admiral", "Vice admiral"]



10.times do
    Ship.create(name:Faker::Space.nasa_space_craft ,federation_class: federation_ship_class.sample)
end

20.times do
    Planet.create(name:Faker::TvShows::StarTrek.location ,habitable:[true, false].sample)
end

50.times do
    CrewMember.create(name:Faker::TvShows::StarTrek.character ,species:Faker::TvShows::StarTrek.specie,rank:ranks.sample, ship_id:Ship.order(Arel.sql('Random()')).first.id )
end

50.times do
    AwayMissionRegistration.create(name:Faker::TvShows::StarTrek.villain, crew_member_id:CrewMember.order(Arel.sql('Random()')).first.id, planet_id:Planet.order(Arel.sql('Random()')).first.id)
end
puts "done!"
