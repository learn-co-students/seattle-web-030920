class Purchase < ApplicationRecord
  belongs_to :brew

  # validates :size, inclusion: { in: %w(small medium large),
  #   message: "%{value} is not a valid size" }

  # validates :creamer_strength, inclusion: { in: %w(light regular none),
  #     message: "%{value} is not a valid strength" }

  # validates :special_instructions, length: { maximum: 139 }
end