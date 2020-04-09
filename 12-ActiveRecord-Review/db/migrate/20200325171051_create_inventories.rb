class CreateInventories < ActiveRecord::Migration[5.2]
  def change
    create_table :inventories do |t|
      t.integer :user_id
      t.integer :ingredient_id
 
      t.timestamps
    end
  end
end
