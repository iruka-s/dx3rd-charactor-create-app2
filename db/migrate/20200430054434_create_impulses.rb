class CreateImpulses < ActiveRecord::Migration[6.0]
  def change
    create_table :impulses do |t|
      t.text :name
      t.text :erosion_point

      t.timestamps
    end
  end
end
