@mylists.each do |list|
    json.set! list.video_id do
        json.partial! '/api/my_lists/mylist', list: list
    end
end