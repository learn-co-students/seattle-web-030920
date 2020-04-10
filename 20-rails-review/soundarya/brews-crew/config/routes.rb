Rails.application.routes.draw do
  resources :purchases
  get "/brews/strongest", to: "brews#highest_brew", as: "strongest_brew" # -> stronges_brew_path
  resources :brews
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end