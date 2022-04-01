class LiftSession < ApplicationRecord
    belongs_to :user
    belongs_to :lift

    validates :date, presence: true
    validate :date_cannot_be_in_future
    validates :repetitions, presence: true, inclusion: { in: 1..20 }
    validates :lift_id, presence: true
    validates :weight, presence: true, inclusion: { in: 1..1000 }
    
    def date_cannot_be_in_future
        if date > Date.today
            errors.add(:date, "can't be in the future")
        end
    end
end
