import axios from 'axios'
import { message } from 'antd'

//如果5s内没有请求回来数据则掐断
axios.default.timeout = 5000

// axios.default.baseUrl = 'http://xiangxi.red/api'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers = {
      
    }
    return config
  },
  error => {
    message.error('请求出错了,请稍后重试')
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  res => {
    return res
  },
  error => {
    message.error('请求出错了,请稍后重试')
    return Promise.reject(error)
  }
)

export default {
  get (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params
      })
      .then(res =>{
        resolve(res.data)
      })
    })
  },
  post (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, data)
      .then(res =>{
        resolve(res.data)
      })
    })
  }
}