class LiftSession < ApplicationRecord
    belongs_to :user
    belongs_to :lift

    validates :date, presence: :true
    validates :repetitions, presence: :true
    validates :lift, presence: :true
end
