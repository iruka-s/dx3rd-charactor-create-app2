class PositiveEmotionsController < ApplicationController

  def index
    @positive_emotion = PositiveEmotion.all
    render json: @positive_emotion
  end
    
  def create
    @positive_emotion = PositiveEmotion.create(positive_emotion: params[:positive_emotion])
    render json: @positive_emotion
  end
    
  def update
    @positive_emotion = PositiveEmotion.find(params[:id])
    @positive_emotion.update_attributes(positive_emotion: params[:positive_emotion])
    render json: @positive_emotion
  end
    
  def destroy
    @positive_emotion = PositiveEmotion.find(params[:id])
    if @positive_emotion.destroy
      head :no_content, status: :ok
    else
      render json: @positive_emotion.errors, status: :unprocessable_entity
    end
  end

end
