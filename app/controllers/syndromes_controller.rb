class SyndromesController < ApplicationController
  
  def index
    @syndrome = Syndrome.all
    render json: @syndrome
  end
    
  def create
    @syndrome = Syndrome.create(syndrome: params[:syndrome])
    render json: @syndrome
  end
    
  def update
    @syndrome = Syndrome.find(params[:id])
    @syndrome.update_attributes(syndrome: params[:syndrome])
    render json: @syndrome
  end
    
  def destroy
    @syndrome = Syndrome.find(params[:id])
    if @syndrome.destroy
      head :no_content, status: :ok
    else
      render json: @syndrome.errors, status: :unprocessable_entity
    end
  end

end
