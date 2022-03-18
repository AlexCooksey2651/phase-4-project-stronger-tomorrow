class Lift < ApplicationRecord
    has_many :lift_sesions
    has_many :users, through: :lift_sessions
end
