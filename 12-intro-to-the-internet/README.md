# Intro to the Internet

[Intro Slides](https://docs.google.com/presentation/d/11aRjIVqm656lSxegBbHWr1jNV-EotTK_Cg9N8BtHSns/edit#slide=id.p9)

## Students Will Be Able To:
 - Explain the _client-server model_ and _request-response cycle_
 - Identify examples of clients and servers
 - Understand that the HTTP protocol is an abstraction that sits on top of 7 network layers
 - Understand that HTTP requests and responses are just made up of structured strings
 - Write a simple Rack server that accepts requests and returns responses
 - Utilize `shotgun` so the server automatically watches the controller for changes
 - Understand the basics of models, views, and controllers
 - Explain the flow of control from request to response in an MVC framework

(Note: we did not use a "deliverables" format in this lecture, only looked at pre-written code and did some tweaking)

## Part 1: Rack
 - Only one file, with one class and one method
 - Series of `if` statements determining the contents of the response based on the contents of the request
 - This very simple web server is built into Sinatra and Rails

## Part 2: Sinatra 
 - Model: same as in Mod 1, using ActiveRecord (`db/` folder with database information, plus `app/models/` folder containing Ruby model class)
 - View: located in `app/views/`, with a file for each view.  Uses embedded Ruby code to generate HTML that is sent back to the client
 - Controller: located in `app/controllers/`.  Sinatra-specific syntax to represent pairs of methods and paths.


 ## Questions:
- Rack lab, nested if statements
- pretty dense.
- applicaton controller 
- sinatra -> inherit from controller
- rack :: response.new

