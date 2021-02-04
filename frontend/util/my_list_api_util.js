export const fetchList = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/my_lists',
    data
  })
};

export const addToList = video_id => {
  return $.ajax({
    method: 'POST',
    url: 'api/my_lists',
    data: { mylist: {video_id} }
  })
};

export const deleteFromList = (video_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/my_lists/${video_id}`,
    data: { mylist: { video_id } }
  })
};