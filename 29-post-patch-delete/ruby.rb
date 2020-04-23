require 'rest-client'
require 'json'
require 'pry'

puts "Long ago in a galaxy far far away ..."
response = RestClient.get("https://swapi.py4e.com/api/people/1")
star_wars = JSON.parse(response)

puts "#{star_wars["name"]}"