class ApplicationController < Sinatra::Base
  # set :views, "app/views/authors"
  set :method_override, true
end