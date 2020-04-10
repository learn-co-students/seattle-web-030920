class PurchasesController < ApplicationController

  def index
    @purchases = Purchase.all
  end

  def show
    find_purchase
  end

  def new
    @purchase = Purchase.new
  end

  def create
    @purchase = Purchase.new(purchase_params)
    if @purchase.save
      puts "purchase saved"
      redirect_to @purchase
    else
      puts "Not saved because #{@purchase.errors.full_messages}"
      render :new
    end
  end

  private

  def find_purchase
    @purchase = Purchase.find(params[:id])
  end

  def purchase_params
    params.require(:purchase).permit(:customer_name, :price, :brew_id, :size, :creamer_strength, :special_instructions)
  end

end
