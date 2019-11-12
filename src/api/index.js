/**
 * Created by ever on 2019/11/10.
 */

import fetch from './fetch'


export function apiGetData(params) {
    const {url, data} = params
    return fetch({
        url,
        method: 'get',
        params: data ? data : ''
    })
}

export function apiPostData(params) {
    const {url, data} = params
    return fetch({
        url,
        method: 'post',
        data
    })
}