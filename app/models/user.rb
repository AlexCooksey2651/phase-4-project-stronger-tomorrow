class User < ApplicationRecord
    has_many :lift_sessions
    has_many :lifts, through: :lift_sessions

    has_secure_password
    validates :email, presence: true, uniqueness: true
end
