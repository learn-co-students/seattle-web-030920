class BrewsController < ApplicationController
    
    def index
        @brews = Brew.all
    end 

    def show
        @brew = Brew.find(params[:id])
    end 

    def new
        @brew = Brew.new 
    end 

    def create
        @brew = Brew.new(brew_params) 
        if @brew.save
            redirect_to @brew 
        else
            render :new 
        end 
    end
    
    def edit
        @brew = Brew.find(params[:id])
    end 

    def update
        @brew = Brew.find(params[:id])
        
        if @brew.update(brew_params)
            redirect_to @brew
        else
            render :edit
        end 
    end

    def delete
    end 

    def strongest
        @strongest = Brew.strongest
        byebug
    end 
 

    private 

    def brew_params
        params.require(:brew).permit(:blend_name, :origin, :notes, :strength)
    end

end
