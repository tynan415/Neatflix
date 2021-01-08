class Video < ApplicationRecord
    validates :title, :description, presence: true

    has_many :genre_types,
        through: :video_genres,
        source: :genreType
    
    has_many :video_genres,
        foreign_key: :video_id,
        class_name: :VideoGenre
        
end
