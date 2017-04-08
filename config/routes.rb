Rails.application.routes.draw do
  resources :pages
  root 'pages#index'
  get 'projects' => 'pages#projects'
  get 'tester' => 'pages#tester'
  get 'dani' => 'pages#dani'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
