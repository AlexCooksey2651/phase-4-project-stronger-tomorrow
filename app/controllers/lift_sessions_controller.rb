class LiftSessionsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    
    before_action :authorize

    def index
        records = LiftSession.all
        render json: records
    end

    def create
        user = User.find_by(id: session[:user_id])
        new_lift = user.lift_sessions.create!(lift_session_params)
        render json: new_lift, status: :created
    end

    private

    def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end

    def lift_session_params
        params.permit(:date, :repetitions, :weight, :user_id, :lift_id)
    end
end
