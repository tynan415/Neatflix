class GenreType < ApplicationRecord
    validates :name

    has_many :video_genres,
        foreign_key: :genre_type_id,
        class_name: :VideoGenre
        
    has_many :videos,
        through: :video_genres,
        source: :video

end
