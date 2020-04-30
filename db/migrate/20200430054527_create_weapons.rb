class CreateWeapons < ActiveRecord::Migration[6.0]
  def change
    create_table :weapons do |t|
      t.text :name
      t.text :sort
      t.text :skill
      t.text :hit
      t.text :offensive_power
      t.text :guard_point
      t.text :range
      t.text :purchase_point
      t.text :standby_point

      t.timestamps
    end
  end
end
