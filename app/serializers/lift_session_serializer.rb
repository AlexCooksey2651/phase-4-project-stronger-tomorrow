class LiftSessionSerializer < ActiveModel::Serializer
  attributes :id, :date, :repetitions, :weight

  belongs_to :user
  belongs_to :lift
end
