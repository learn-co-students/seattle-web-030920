require 'bundler/setup'
# requires all our gems in the Gemfile into our project
Bundler.require

# setup connection to the database file
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3', # Postgres, MySQL, etc
  database: "db/development.sqlite"
)

# something like this:
# module ActiveRecord
#   class Base
#     def self.establish_connection(adapter:, database:)
#     end
#   end
# end

require_all 'app'

