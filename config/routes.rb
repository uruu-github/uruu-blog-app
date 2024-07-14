Rails.application.routes.draw do
  root to: 'articles#index'
  resources :articles
  devise_for :users
  delete '/users/sign_out', to: 'devise/sessions#destroy', as: :destroy_user_session_path
end
