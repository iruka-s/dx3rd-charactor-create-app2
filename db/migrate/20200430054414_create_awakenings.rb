class CreateAwakenings < ActiveRecord::Migration[6.0]
  def change
    create_table :awakenings do |t|
      t.text :name
      t.text :erosion_point

      t.timestamps
    end
  end
end
