class ItemsController < ApplicationController

  def index
    @item = Item.all
    render json: @item
  end
    
  def create
    @item = Item.create(item: params[:item])
    render json: @item
  end
    
  def update
    @item = Item.find(params[:id])
    @item.update_attributes(item: params[:item])
    render json: @item
  end
    
  def destroy
    @item = Item.find(params[:id])
    if @item.destroy
      head :no_content, status: :ok
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

end
