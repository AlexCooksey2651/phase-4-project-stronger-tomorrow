class LiftSessionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :lift_id, :date, :lift, :repetitions, :weight

  belongs_to :user
end
