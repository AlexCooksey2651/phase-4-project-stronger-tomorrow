Rails.application.routes.draw do
  
  resources :lifts
  resources :lift_sessions
  # resources :users, only: [:update]
  # Routing logic: fallback requests for React Router.
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  patch '/update', to: 'users#update'
  delete '/delete_profile', to: 'users#destroy'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
