Rails.application.routes.draw do
  resources :authors
  # resources :books
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'books', to: "books#index"
  get '/books/new', to: "books#new"
  get '/books/:id', to: "books#show", as: "book"
  post '/books', to: "books#create"
  get '/books/:id/edit', to: "books#edit"
  patch '/books/:id', to: "books#update"
end
