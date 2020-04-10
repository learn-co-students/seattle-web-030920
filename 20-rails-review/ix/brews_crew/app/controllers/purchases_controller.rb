class PurchasesController < ApplicationController

    def index
        @purchases  = Purchase.all
    end 

    def show
        @purchase = Purchase.find(params[:id])
    end 

    def new
        @purchase = Purchase.new 
        @brews = Brew.all
    end 

    def create

        @purchase = Purchase.new(purchase_params) 
        if @purchase.save
            redirect_to @purchase 
        else
            render :new 
        end 
    end
    
    def edit
        @purchase = Purchase.find(params[:id])
    end 

    def update
        @purchase = Purchase.find(params[:id])
        
        if @purchase.update(purchase_params)
            redirect_to @purchase
        else
            render :edit
        end 
        

    end

    def delete
    end 

    private 

    def purchase_params
        params.require(:purchase).permit(:customer_name, :price, :brew_id)
    end

end
