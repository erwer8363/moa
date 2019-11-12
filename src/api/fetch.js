/**
 * Created by ever on 2019/11/10.
 */

import axios from 'axios'
import qs from 'qs'

let fetch = axios.create({
    baseURL: 'http://admintest.happymmall.com',
    timeout: 50000
})
// 发送拦截
fetch.interceptors.request.use(config => {
    console.log('要发送给后台 拦截到 的数据是..', config.data)
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
        if (typeof (config.data) !== 'string' && config.headers['Content-Type'] !== 'multipart/form-data') {
            config.data = qs.stringify(config.data)
        }
    } else {

    }
    return config
}, error => {
    Promise.reject(error)
})
// 接收拦截
fetch.interceptors.response.use(async resData => {
    console.log('接收到的数据是...', resData)
    const {status, data} = resData
    if (status === 200) {
        return data
    }

}, error => {
    if (error.response) {
        if (error.response.statusCode === 500) {
            console.log('服务器错误,请联系管理员')
        }
        return Promise.reject(error.response.data)
    } else {
        return Promise.reject(error)
    }
})

export default fetch