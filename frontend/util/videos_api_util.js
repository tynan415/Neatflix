
export const fetchVideo = (videoId) => (
    $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'GET'
    })
);

export const fetchVideos =()=>(
    $.ajax({
        url: '/api/videos',
        method: 'GET'
    })
);