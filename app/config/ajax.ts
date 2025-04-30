import { Platform } from "react-native";
import { catchError, map } from 'rxjs'
import { ajax as AjaxObservable } from 'rxjs/ajax'
import isEmpty from '../utils/isEmpty'

const ajaxHeaders = {
    'Content-Type': 'application/json',
    'User-Agent': `RN/${Platform.OS}`
}

const getHeaders = (headers : Object) => {
    let appendedHeaders = ajaxHeaders;
    if(!isEmpty(headers)) {
        const result = Object.assign({}, ajaxHeaders, headers)
        appendedHeaders = result;
    }
    return appendedHeaders;
}

export function ajaxGet(url: string, headers: Object = {}) {
    return AjaxObservable.get(url, getHeaders(headers)).pipe(catchError((err) => {
        console.log('ajaxGet: failed:', url)
        throw err
    }))
}

export function ajaxPost(url: string, body: Object = {}, headers: Object = {}) {
    return AjaxObservable.post(url, body, getHeaders(headers)).pipe(catchError((err) => {
        console.log('ajaxPost: failed', url)
        throw err
    }))
}

export function ajaxPut(url: string, body: Object = {}, headers: Object={}) {
    return AjaxObservable.put(url, body, getHeaders(headers)).pipe(catchError((err) => {
        console.log('ajaxPut: failed', url)
        throw err
    }))
}

export function ajaxPatch(url: string, body: Object = {}, headers: Object={}) {
    return AjaxObservable.patch(url, body, getHeaders(headers)).pipe(catchError((err) => {
        console.log('ajaxPatch: failed', url)
        throw err
    }))
}

export function ajaxDelete(url: string, headers: Object={}) {
    return AjaxObservable.delete(url, getHeaders(headers)).pipe(catchError((err) => {
        console.log('ajaxDelete: failed', url)
        throw err
    }))
}

export function ajaxGetJSON(url: string, headers: Object) {
    return AjaxObservable.getJSON(url, getHeaders(headers)).pipe(
        map(response => ({ response })),
        catchError((err) => {
            console.log('ajaxJSON: failed', url)
            throw err
        }) 
    ) 
} 

const create = (() => {
    const create = (urlOrRequest: any) => {
        if (typeof urlOrRequest === 'string') {
            return AjaxObservable(urlOrRequest)
        } 
        const headers = getHeaders(urlOrRequest.headers)
        urlOrRequest.headers = headers
        return AjaxObservable(urlOrRequest).pipe(catchError((err) => {
            console.log('create failed:', urlOrRequest)
        }))
    }

    create.get = ajaxGet
    create.post = ajaxPost
    create.patch = ajaxPatch
    create.delete = ajaxDelete
    create.put = ajaxPut
    create.getJSON = ajaxGetJSON

    return create
})()

export default (create);
    