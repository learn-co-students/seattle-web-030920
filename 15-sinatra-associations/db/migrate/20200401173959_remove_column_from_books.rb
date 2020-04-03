class RemoveColumnFromBooks < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :author
  end
end
