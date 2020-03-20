class AwayMissionRegistration < ActiveRecord::Base
    belongs_to :crew_member
    belongs_to :planet

end