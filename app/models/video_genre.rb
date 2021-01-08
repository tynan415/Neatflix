class VideoGenre < ApplicationRecord
    validates :genre_type_id, :video_id, presence: true

    belongs_to :genre_type,
        foreign_key: :genre_type_id,
        class_name: :GenreType

    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video

end
