class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :store_id
      t.integer :price
 
      t.timestamps
    end
  end
end
