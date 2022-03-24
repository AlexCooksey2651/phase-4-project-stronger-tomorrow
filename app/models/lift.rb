class Lift < ApplicationRecord
    has_many :lift_sessions
    has_many :users, through: :lift_sessions
end
