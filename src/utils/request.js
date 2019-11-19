import axios from 'axios'
import { Message } from 'element-ui'
import { isFormData } from '@/utils/types'
import { guid, legitimacy } from '@/utils'
import { getSign, postSign } from '@/utils/sign'
import store from '@/store'
import router from '@/router'

const isSign = false // 开启关闭sign签名验证
const securityKey = '' // 后端提供安全码
const uuid = 'cms' + guid()

// 错误提示信息
const tipText = {
  400: {
    89002: '登录无效，请重登',
    89013: '登录超时，请重登'
  },
  404: '请求不存在',
  500: '服务器内部错误',
  502: '网关错误',
  504: '网关超时'
}

const showMessage = (
  message,
  type = 'error',
  showClose = true,
  duration = 3000
) => {
  Message({ type, showClose, duration, message })
}

// create an axios instance
const service = axios.create({
  baseURL: '/',
  timeout: 30000, // request timeout
  headers: {
    msgId: uuid,
    from: 'PORTAL',
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// request interceptor
service.interceptors.request.use(
  config => {
    // get 方法先判断是否包含 & 字符
    if (config.method === 'get') {
      // 不包含 & 字符
      if (!legitimacy(config.params)) {
        // 包含 & 字符取消请求
        showMessage('&为非法字符,请重新输入')
        const CancelToken = axios.CancelToken
        const source = CancelToken.source()
        config.cancelToken = source.token
        // 取消请求
        source.cancel()
        return config
      }
    } else {
      if (!legitimacy(config.data)) {
        // 包含 & 字符取消请求
        showMessage('&为非法字符,请重新输入')
        const CancelToken = axios.CancelToken
        const source = CancelToken.source()
        config.cancelToken = source.token
        // 取消请求
        source.cancel()
        return config
      }
      // 上传文件
      if (isFormData(config.data)) {
        config.headers['Content-Type'] = 'multipart/form-data'
      }
    }
    // token
    if (localStorage.getItem('LG_TK')) {
      config.headers['token'] = localStorage.getItem('LG_TK')
    }
    // 签名
    if (isSign && !isFormData(config.data)) {
      if (config.method === 'get') {
        let timestamp = new Date().getTime()
        config.params = getSign(timestamp, config.params, securityKey)
      } else {
        let timestamp = new Date().getTime()
        config.data = postSign(timestamp, config.data, securityKey)
      }
    }
    return config
  },
  error => {
    // Do something with request error
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    /**
     * 通过 xmlhttprequest 来状态码标识error
     */
    // console.log('error：' + error.response.data.errorMsg, error.response.status) // for debug
    if (error && error.response) {
      const data = error.response.data
      const status = error.response.status + '' // number转为string
      // 在tipText中有定义
      if (tipText[status]) {
        if (status === '400') {
          // 未在tipText['400']中定义，使用默认tip
          const msg = tipText['400'][data.errorCode]
          msg ? showMessage(msg) : showMessage(data.errorMsg)
          // 如果登录超时，前端退出后转跳登录页重新登录
          data.errorCode === '89002' &&
            store
              .dispatch('manager/fedLogOut')
              .then(() => router.push('/login'))
          data.errorCode === '89013' &&
            store
              .dispatch('manager/fedLogOut')
              .then(() => router.push('/login'))
        } else {
          // 404、500、502
          showMessage(tipText[status])
        }
      } else {
        // 未在tipText中定义，使用默认tip
        showMessage(data.errorMsg)
      }
    }
    return Promise.reject(error)
  }
)

export default service
