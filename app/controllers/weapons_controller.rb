class WeaponsController < ApplicationController

  def index
    @weapon = Weapon.all
    render json: @weapon
  end

  def create
    @weapon = Weapon.create(weapon: params[:weapon])
    render json: @weapon
  end

  def update
    @weapon = Weapon.find(params[:id])
    @weapon.update_attributes(weapon: params[:weapon])
    render json: @weapon
  end

  def destroy
    @weapon = Weapon.find(params[:id])
    if @weapon.destroy
      head :no_content, status: :ok
    else
      render json: @weapon.errors, status: :unprocessable_entity
    end
  end

end
