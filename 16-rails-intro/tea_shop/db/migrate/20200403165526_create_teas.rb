class CreateTeas < ActiveRecord::Migration[6.0]
  def change
    create_table :teas do |t|
      t.integer :strength
      t.string :name
      t.string :tea_type

      t.timestamps
    end
  end
end
