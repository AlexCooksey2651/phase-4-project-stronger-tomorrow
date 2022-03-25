class User < ApplicationRecord
    has_many :lift_sessions
    has_many :lifts, through: :lift_sessions

    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :password, confirmation: true, length: { in: 6..20 }
    validates :password_confirmation, presence: true
end
