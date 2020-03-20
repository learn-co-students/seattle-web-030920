class CreateCrewMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :crew_members do |t|
      t.string :name
      t.string :rank
      t.string :species
      t.integer :ship_id
 
      t.timestamps
    end
  end
end
