SplashSite::Application.routes.draw do

  root to: 'home#index'
  post '/add-email' => 'home#add_email'

end
