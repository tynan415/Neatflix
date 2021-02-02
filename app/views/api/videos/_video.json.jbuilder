json.extract! video, :id, :title, :description
json.photo_url url_for(video.photo)
json.genre_id video.genre_types.pluck(:id)[0]
json.video_url url_for(video.video_url) if video.video_url.attached?