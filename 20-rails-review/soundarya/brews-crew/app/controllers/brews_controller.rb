class BrewsController < ApplicationController
  before_action :set_brew, only: [:destroy, :show, :edit, :update]

  def update
    if @brew.update(brews_param)
      redirect_to @brew
    else
      flash[:message] = "This name is taken" #@brew.errors.full_messages
      render :edit
    end
  end

  # def show
  #   @customers = 
  # end

  def index
    @brews = Brew.all
  end

  def highest_brew
    @brews = Brew.strongest
  end

  def new
    @brew = Brew.new
  end

  def create
    @brew = Brew.new(brews_param)

    if @brew.save
      redirect_to @brew
    else
      flash[:message] = "This name is taken" #@brew.errors.full_messages
      render :new
    end
  end

  def destroy
    @brew.destroy
    # redirect to the index
    redirect_to brews_path
  end

  private
  def set_brew
    @brew = Brew.find(params[:id])
  end

  def brews_param
    params.require(:brew).permit(:blend_name, :origin, :notes, :strength)
  end
end
