class CreateArmors < ActiveRecord::Migration[6.0]
  def change
    create_table :armors do |t|
      t.text :name
      t.text :sort
      t.text :dodge
      t.text :action_point
      t.text :armor_point
      t.text :purchase_point
      t.text :standby_point
      t.text :ability

      t.timestamps
    end
  end
end
