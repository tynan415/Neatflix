json.extract! video, :id, :title, :description
json.photo_url url_for(video.photo)
json.genre_id video.genre_types.pluck(:id)[0]