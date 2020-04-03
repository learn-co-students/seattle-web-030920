class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :location
      t.string :hobby

      t.timestamps
    end
  end
end
