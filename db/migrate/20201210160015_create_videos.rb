class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.boolean :liked
      t.string :description, null: false

      t.timestamps
    end
  end
end
