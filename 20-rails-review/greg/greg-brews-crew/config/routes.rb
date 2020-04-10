Rails.application.routes.draw do
  resources :purchases, only: [:index, :show, :new, :create]
  get '/brews/strongest', to: "brews#strongest_brew", as: "strongest_path"
  resources :brews
end
