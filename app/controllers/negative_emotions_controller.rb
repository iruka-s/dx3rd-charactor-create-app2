class NegativeEmotionsController < ApplicationController

  def index
    @negative_emotion = NegativeEmotion.all
    render json: @negative_emotion
  end
    
  def create
    @negative_emotion = NegativeEmotion.create(negative_emotion: params[:negative_emotion])
    render json: @negative_emotion
  end
    
  def update
    @negative_emotion = NegativeEmotion.find(params[:id])
    @negative_emotion.update_attributes(negative_emotion: params[:negative_emotion])
    render json: @negative_emotion
  end
    
  def destroy
    @negative_emotion = NegativeEmotion.find(params[:id])
    if @negative_emotion.destroy
      head :no_content, status: :ok
    else
      render json: @negative_emotion.errors, status: :unprocessable_entity
    end
  end
end
