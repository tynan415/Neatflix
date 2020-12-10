class Video < ApplicationRecord
    validates :title, :description, presence: true
end
