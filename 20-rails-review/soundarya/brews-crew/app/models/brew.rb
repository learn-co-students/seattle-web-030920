class Brew < ApplicationRecord
  has_many :purchases, dependent: :destroy

  validates :blend_name, presence: true, uniqueness: true

  def self.strongest
    @brews = Brew.all
    strongest_brew = @brews.max_by do |brew|
      brew.strength
    end
    @strongest_brews = @brews.select { |brew| brew.strength == strongest_brew.strength }
  end
end
