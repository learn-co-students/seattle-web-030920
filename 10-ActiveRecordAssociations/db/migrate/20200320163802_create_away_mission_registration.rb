class CreateAwayMissionRegistration < ActiveRecord::Migration[5.2]
  def change
    create_table :away_mission_registrations do |t|
      t.string :name
      t.integer :crew_member_id
      t.integer :planet_id

      t.timestamps
    end
  end
end
