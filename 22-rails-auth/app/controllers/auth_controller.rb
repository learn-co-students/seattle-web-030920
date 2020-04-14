class AuthController < ApplicationController

  def new
  end

  def create
    # byebug
    @teacher =  Teacher.find_by(name: params[:auth][:name])
    if @teacher
      session[:user_id] = @teacher.id
      redirect_to students_path
    else
      flash[:mesasge] = "Incorrect details!!!"
      render :new
    end
  end

end
