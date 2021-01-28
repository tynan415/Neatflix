class AddIndexToMyList < ActiveRecord::Migration[5.2]
  def change
    add_index(:my_lists, [:user_id,:video_id] , unique: true)
  end
end
