class Api::ListsController < ApplicationController
  before_action :set_board
  before_action :set_list, only: [:show, :update, :destroy]

  def index
    render json: @board.lists
  end

  def show
    render json: @list
  end

  def create
    @list = @board.lists.create(list_params)
    if @list.save
      render json: @list
    else
      render json: @list.errors, status: 422
    end
  end

  def update
    if @list.update(list_params)
      render json: @list
    else
      render json: @list.errors, status: 422
    end
  end

  def destroy
    @list.destroy
  end

  private
  def list_params
    params.require(:list).permit(:name)
  end

  def set_sub
    @board = Board.find(params[:board_id])
  end

  def set_list
    @list = List.find(params[:id])
  end

end
