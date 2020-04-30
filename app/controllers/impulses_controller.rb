class ImpulsesController < ApplicationController

  def index
    @impulse = Impulse.all
    render json: @impulse
  end
    
  def create
    @impulse = Impulse.create(impulse: params[:impulse])
    render json: @impulse
  end
    
  def update
    @impulse = Impulse.find(params[:id])
    @impulse.update_attributes(impulse: params[:impulse])
    render json: @impulse
  end
    
  def destroy
    @impulse = Impulse.find(params[:id])
    if @impulse.destroy
      head :no_content, status: :ok
    else
      render json: @impulse.errors, status: :unprocessable_entity
    end
  end

end
