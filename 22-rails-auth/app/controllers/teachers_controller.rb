class TeachersController < ApplicationController
  def new
    @teacher = Teacher.new
  end

  def create
    # byebug
    @teacher = Teacher.new(teacher_params)

    if @teacher.save
      session[:user_id] = @teacher.id
      redirect_to students_path
    else
      render :new
    end
  end

  private
  def teacher_params
    params.require(:teacher).permit(:name, :password, :password_confirmation)
  end
end
