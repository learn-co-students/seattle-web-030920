class Brew < ApplicationRecord
  has_many :purchases

  validates :blend_name, uniqueness: true

  def self.find_strongest
    # SQL query, use active record
    # instances of max strength
    # Brew.all.order(:strength).limit(5)
    # SELECT * FROM brews ORDER BY strength LIMIT 5
    # Brew.all.order("strength desc").limit(1)
    max_strength = Brew.maximum(:strength)
    # Brew.find_by(:strength)
    # .find(id)
    # .find_by(paramaeter)
    Brew.where(strength: max_strength)
  end

end
