export const requestTypes = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
}

export const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

export const getRequestOptions = (url: string, method: string, headers: Object, body?: Object) => {
    const payload = {
        url, 
        method, 
        headers, 
        body
    }

    if (method == requestTypes.GET) 
        delete payload.body
    return payload
}