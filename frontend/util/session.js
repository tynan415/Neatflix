


export const login = () => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
);