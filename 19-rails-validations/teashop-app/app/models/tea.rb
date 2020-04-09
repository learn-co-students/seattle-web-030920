class Tea < ApplicationRecord
  belongs_to :store

  validates :price, numericality: { greater_than_or_equal_to: 0.00 }
  validates :name, presence: true
end
