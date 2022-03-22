class LiftSessionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :lift_id, :date, :repetitions, :weight

  belongs_to :user
  belongs_to :lift
end
