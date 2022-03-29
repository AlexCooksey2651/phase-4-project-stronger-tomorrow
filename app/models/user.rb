class User < ApplicationRecord
    has_many :lift_sessions, dependent: :destroy
    has_many :lifts, through: :lift_sessions

    has_secure_password

    validates :first_name, presence: true, length: { minimum: 2 }
    validates :last_name, presence: true, length: { minimum: 2 }
    validates :age, presence: true, inclusion: { in: 12..99 } 
    validates :height, presence: true, inclusion: { in: 36..96 } 
    validates :weight, presence: true, inclusion: { in: 1..1000 }
    validates :email, presence: true, uniqueness: true
    # validates :password, confirmation: true, length: { in: 6..20 }
end
