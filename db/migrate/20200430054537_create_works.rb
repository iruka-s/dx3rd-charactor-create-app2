class CreateWorks < ActiveRecord::Migration[6.0]
  def change
    create_table :works do |t|
      t.text :name
      t.text :ability
      t.text :skill1
      t.text :value1
      t.text :skill2
      t.text :value2
      t.text :skill3
      t.text :value3
      t.text :skill4
      t.text :value4
      t.text :skill5
      t.text :value5

      t.timestamps
    end
  end
end
