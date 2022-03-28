class LiftSessionsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    
    before_action :authorize

    def index
        records = LiftSession.all
        render json: records
    end

    def destroy
        session =  LiftSession.find_by(id: params[:id])
        if session
            session.destroy
            head :no_content
        else
            render json: {error: "Record not found"}, status: :not_found
        end
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

    def invalid_record(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
