class BrewsController < ApplicationController
  before_action :set_brew, only: [:show, :edit, :update, :destroy]

  def index
    @brews = Brew.all
  end

  def show
    # @brew = Brew.find(params[:id])
  end

  def new
    @brew = Brew.new
  end

  def create
    @brew = Brew.new(brew_params)
    if @brew.save
      puts "Brew saved"
      redirect_to @brew
    else
      puts "Error= #{@brew.errors.full_messages}"
      render :new
    end
  end

  def edit
  end

  def update
    if @brew.update(brew_params)
      puts "Brew updated"
      redirect_to brew_path(@brew)
    else
      puts "Error= #{@brew.errors.full_messages}"
      render :edit
    end
  end

  def destroy
    if @brew.destroy
      puts "brew deleted"
      redirect_to brews_path
    else
      puts "brew NOT deleted. #{@brew.errors.full_messages}"
      redirect_to brews_path
    end
  end

  def strongest_brew
    # Find strongest here
    @brews = Brew.find_strongest
    render :index
  end

  private

  def set_brew
    @brew = Brew.find(params[:id])
  end

  def brew_params
    params.require(:brew).permit(:blend_name, :origin, :notes, :strength)
  end

end
