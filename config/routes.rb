Rails.application.routes.draw do
  resources :pages
  root 'pages#index'
  get 'tester' => 'pages#tester'
  get 'video' => 'pages#video'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
