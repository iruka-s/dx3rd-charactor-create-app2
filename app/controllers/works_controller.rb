class WorksController < ApplicationController

  def index
    @work = Work.all
    render json: @work
  end

  def create
    @work = Work.create(work: params[:work])
    render json: @work
  end

  def update
    @work = Work.find(params[:id])
    @work.update_attributes(work: params[:work])
    render json: @work
  end

  def destroy
    @work = Work.find(params[:id])
    if @work.destroy
      head :no_content, status: :ok
    else
      render json: @work.errors, status: :unprocessable_entity
    end
  end

end
