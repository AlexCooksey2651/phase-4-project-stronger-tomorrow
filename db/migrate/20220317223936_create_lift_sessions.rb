class CreateLiftSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :lift_sessions do |t|
      t.integer :user_id
      t.integer :lift_id
      t.date :date
      t.string :lift
      t.integer :repetitions
      t.integer :weight

      t.timestamps
    end
  end
end
