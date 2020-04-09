class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :location
      t.string :address
      t.integer :rating
      t.boolean :open

      t.timestamps
    end
  end
end
