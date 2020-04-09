class CreateTeas < ActiveRecord::Migration[6.0]
  def change
    create_table :teas do |t|
      t.string :name
      t.float :price
      t.references :store, null: false, foreign_key: true

      t.timestamps
    end
  end
end
