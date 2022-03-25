class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :age, :height, :weight

  has_many :lift_sessions
  # has_many :lifts, through: :lift_sessions
end
