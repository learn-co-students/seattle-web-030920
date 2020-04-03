class TeasController < ApplicationController
  before_action :set_tea, only: [:show, :edit, :update, :destroy]

  # GET /teas
  # GET /teas.json
  def index
    @teas = Tea.all
  end

  # GET /teas/1
  # GET /teas/1.json
  def show
  end

  # GET /teas/new
  def new
    @tea = Tea.new
  end

  # GET /teas/1/edit
  def edit
  end

  # POST /teas
  # POST /teas.json
  def create
    @tea = Tea.new(tea_params)

    respond_to do |format|
      if @tea.save
        format.html { redirect_to @tea, notice: 'Tea was successfully created.' }
        format.json { render :show, status: :created, location: @tea }
      else
        format.html { render :new }
        format.json { render json: @tea.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /teas/1
  # PATCH/PUT /teas/1.json
  def update
    respond_to do |format|
      if @tea.update(tea_params)
        format.html { redirect_to @tea, notice: 'Tea was successfully updated.' }
        format.json { render :show, status: :ok, location: @tea }
      else
        format.html { render :edit }
        format.json { render json: @tea.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /teas/1
  # DELETE /teas/1.json
  def destroy
    @tea.destroy
    respond_to do |format|
      format.html { redirect_to teas_url, notice: 'Tea was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tea
      @tea = Tea.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tea_params
      params.require(:tea).permit(:strength, :name, :tea_type)
    end
end
