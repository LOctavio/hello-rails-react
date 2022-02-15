module Api::V1
  class GreetingsController < ApplicationController
    def index
      table_size = Greeting.count
      @greeting = Greeting.find(rand(1..table_size))
      render json: @greeting
    end
  end
end