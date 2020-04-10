class PurchasesController < ApplicationController
  def new
    @purchase = Purchase.new
    @all_brews = Brew.all
  end

  def create
    @purchase = Purchase.new(set_purchase_params)

    if @purchase.save
      redirect_to @purchase
    else
      flash[:error_message_for_user] = @purchase.errors.full_messages
      @all_brews = Brew.all
      render :new
    end
  end

  def index
    @purchases = Purchase.all
  end

  def show
    @purchase = Purchase.find(params[:id])
  end
  
  private
  def set_purchase_params
    params.require(:purchase).permit(:customer_name, :brew_id, :price)
  end
end
