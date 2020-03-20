## SWBATs
- [ ] Implement ActiveRecord Associations 
- [ ] Implement many to one 
- [ ] Has many through (many to many)
- [ ] Use the Faker Gem
 

## Steps 
0. environment set up
1. Create a migration  rake db:create_migration NAME=create_crew_members
2. Write a migration
3. run migration rake db:migrate (check migration)


## Outline 
- Ships -< CrewMembers
- Planets >-< CrewMembers, through AwayMissionRegistration
- CrewMembers >-< Planets, through AwayMissionRegistration
- AwayMissionRegistration >- CrewMembers
- AwayMissionRegistration >- Planets
