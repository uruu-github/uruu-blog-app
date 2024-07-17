Rails.application.routes.draw do
  devise_for :users

  root to: 'articles#index'

  resources :articles do
    resources :comments, only: [:new, :create]

    resource :like, only: [:create, :destroy]
  end

  resource :profile, only: [:show, :edit, :update]
  resources :favorites, ony: [:index]
end
