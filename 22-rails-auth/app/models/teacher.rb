class Teacher < ApplicationRecord
  has_secure_password
  # password -> stores as password_digest in our database
end
