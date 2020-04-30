class CreateEffects < ActiveRecord::Migration[6.0]
  def change
    create_table :effects do |t|
      t.text :syndrome
      t.text :name
      t.text :max_level
      t.text :timing
      t.text :skill
      t.text :difficulty
      t.text :target
      t.text :range
      t.text :erosion_point
      t.text :limit
      t.text :count
      t.text :other
      t.text :sort
      t.text :effect_sort1
      t.text :effect_content1
      t.text :effect_sort2
      t.text :effect_content2
      t.text :effect_sort3
      t.text :effect_content3

      t.timestamps
    end
  end
end
