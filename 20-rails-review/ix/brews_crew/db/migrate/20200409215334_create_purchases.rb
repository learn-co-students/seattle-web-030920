class CreatePurchases < ActiveRecord::Migration[6.0]
  def change
    create_table :purchases do |t|
      t.string :customer_name
      t.float :price

      t.timestamps
    end
  end
end
