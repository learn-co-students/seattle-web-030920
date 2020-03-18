require 'bundler'

Bundler.require

DB = {
  conn: SQLite3::Database.new('db/game-reviews.db')
}

DB[:conn].results_as_hash = true


require_relative '../app/models/game'