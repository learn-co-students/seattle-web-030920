class AddColumnToBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :author_id, :integer
  end
end
