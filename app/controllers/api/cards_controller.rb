class Api::CardsController < ApplicationController
  before_action :set_list

  def new
    render json: Card.new
  end

  def create
    @card = @list.cards.new(card_params)
  end

  private
    def card_params
      params.require(:card).permit(:name, :body)
    end

    def set_list
      @list = List.find(params[:id])
    end

end
