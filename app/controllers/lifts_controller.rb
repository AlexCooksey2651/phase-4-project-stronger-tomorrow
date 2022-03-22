class LiftsController < ApplicationController
    def index
        lifts = Lift.all
        render json: lifts
    end
end
