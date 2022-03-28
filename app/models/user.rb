class User < ApplicationRecord
    has_many :lift_sessions, dependent: :destroy
    has_many :lifts, through: :lift_sessions

    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :password, confirmation: true, length: { in: 6..20 }
    validates :password_confirmation, presence: true
    validates :age, presence: true
    validates :height, presence: true
    validates :weight, presence: true
    validates :first_name, presence: true, length: { minimum: 2 }
    validates :last_name, presence: true, length: { minimum: 2 }
end
