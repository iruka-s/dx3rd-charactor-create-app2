class ArmorsController < ApplicationController

  def index
    @armor = Armor.all
    render json: @armor
  end
    
  def create
    @armor = Armor.create(armor: params[:armor])
    render json: @armor
  end
    
  def update
    @armor = Armor.find(params[:id])
    @armor.update_attributes(armor: params[:armor])
    render json: @armor
  end
    
  def destroy
    @armor = Armor.find(params[:id])
    if @armor.destroy
      head :no_content, status: :ok
    else
      render json: @armor.errors, status: :unprocessable_entity
    end
  end

end
