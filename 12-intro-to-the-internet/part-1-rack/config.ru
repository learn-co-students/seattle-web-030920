# Rack provides a minimal interface between webservers that support Ruby and Ruby frameworks.
#
# To use Rack, provide an "app": an object that responds to the call method, 
# taking the environment hash as a parameter, and returning an Array with three elements:
#
# The HTTP response code
# A Hash of headers
# The response body, which must respond to each
require 'pry'

class App
  def call(environment_hash)
    binding.pry
    request = Rack::Request.new(environment_hash)
    response = Rack::Response.new
    # environment_hash["PATH_INFO"]
    # http_code = 200
    # headers = { "Content-Type" => "text/html" }
    # body = [ " Hello 030920!!! "]

    if request.path == "/"
      response.write("Welcome to Flatiron School!!")
      response.write("Eyyyy!!")
    elsif request.path == "school/:input"
      # {input: sample}
        response.write("Welcome to the page for #{input}")
    else
        response.write("No page yet, eventually we will have one")
    end
    response.finish
    # [http_code, headers, body]
  end
end

run App.new