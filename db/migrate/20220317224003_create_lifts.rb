class CreateLifts < ActiveRecord::Migration[6.1]
  def change
    create_table :lifts do |t|
      t.string :name

      t.timestamps
    end
  end
end
