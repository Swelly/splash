class HomeController < ApplicationController

  def index
  end

  def add_email
    user = User.create(email: params[:email])
    user.save
  end

end