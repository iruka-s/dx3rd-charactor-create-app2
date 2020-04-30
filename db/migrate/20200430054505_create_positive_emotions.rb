class CreatePositiveEmotions < ActiveRecord::Migration[6.0]
  def change
    create_table :positive_emotions do |t|
      t.text :name

      t.timestamps
    end
  end
end
