class RenameColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :brews, :blend_nameorigin, :blend_name
    add_column :brews, :origin, :string
  end
end
