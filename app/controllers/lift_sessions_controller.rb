class LiftSessionsController < ApplicationController
    before_action :authorize

    def index
        records = LiftSession.all
        render json: records
    end
    
    private

    def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end
end
