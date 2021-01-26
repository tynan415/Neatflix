export const fetchList = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/my_lists',
    data
  })
};

// export const fetchList = (id) => {
//   return $.ajax({
//     method: 'GET',
//     url: `api/my_lists/${id}`
//   })
// };

export const addToList = video_id => {
  return $.ajax({
    method: 'POST',
    url: 'api/my_lists',
    data: { myList: {video_id} }
  })
};


export const deleteFromList = (video_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/my_lists/${video_id}`,
    data: { myList: { video_id } }
  })
};