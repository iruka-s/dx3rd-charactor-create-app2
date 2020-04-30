class CreateSyndromes < ActiveRecord::Migration[6.0]
  def change
    create_table :syndromes do |t|
      t.text :english_name
      t.text :name
      t.text :body
      t.text :sense
      t.text :spirit
      t.text :society

      t.timestamps
    end
  end
end
