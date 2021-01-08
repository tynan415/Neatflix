class CreateGenreTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :genre_types do |t|
      t.string :name, null:false
      t.string :description
      t.timestamps
    end
    add_index(:genre_types, :name)
  end
end
