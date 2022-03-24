class LiftSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :lift_sessions
end
