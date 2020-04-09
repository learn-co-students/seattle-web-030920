class TeasController < ApplicationController
  def new
    @tea = Tea.new
    @stores = Store.all
  end

  def create
    # byebug
    @tea = Tea.new(tea_params)

    if @tea.save
      redirect_to @tea #tea_path(@tea), "/teas/:id"
    else 
      # byebug
      @stores = Store.all
      flash[:error_message_for_user] = @tea.errors.full_messages
      render :new
    end

  end

  def show
    @tea = Tea.find(params[:id])
  end

  private
  def tea_params
    params.require(:tea).permit(:name, :price, :store_id)
  end
end
