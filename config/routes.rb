Rails.application.routes.draw do
  resources :syndromes
  resources :works
  resources :positive_emotions
  resources :negative_emotions
  resources :effects
  resources :impulses
  resources :weapons
  resources :armors
  resources :awakenings
  resources :items
end
