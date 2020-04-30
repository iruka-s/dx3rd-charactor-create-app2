class EffectsController < ApplicationController

  def index
    @effect = Effect.all
    render json: @effect
  end
    
  def create
    @effect = Effect.create(effect: params[:effect])
    render json: @effect
  end
    
  def update
    @effect = Effect.find(params[:id])
    @effect.update_attributes(effect: params[:effect])
    render json: @effect
  end
    
  def destroy
    @effect = Effect.find(params[:id])
    if @effect.destroy
      head :no_content, status: :ok
    else
      render json: @effect.errors, status: :unprocessable_entity
    end
  end

end
