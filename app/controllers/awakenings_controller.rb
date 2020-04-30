class AwakeningsController < ApplicationController

  def index
    @awakening = Awakening.all
    render json: @awakening
  end
    
  def create
    @awakening = Awakening.create(awakening: params[:awakening])
    render json: @awakening
  end
    
  def update
    @awakening = Awakening.find(params[:id])
    @awakening.update_attributes(awakening: params[:awakening])
    render json: @awakening
  end
    
  def destroy
    @awakening = Awakening.find(params[:id])
    if @awakening.destroy
      head :no_content, status: :ok
    else
      render json: @awakening.errors, status: :unprocessable_entity
    end
  end

end
