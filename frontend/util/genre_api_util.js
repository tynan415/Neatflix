
export const fetchGenreTypes = () => {
    return $.ajax({
        method: "get",
        url: `api/genre_types/`,
    })
}