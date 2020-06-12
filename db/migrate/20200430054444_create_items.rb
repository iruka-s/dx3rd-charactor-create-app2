class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.text :name
      t.text :sort
      t.text :skill
      t.text :purchase_point
      t.text :standby_point
      t.text :ability

      t.timestamps
    end
  end
end
