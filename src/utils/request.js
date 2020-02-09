import axios from 'axios'
import { Message } from 'element-ui'
import { isFormData } from '@/utils/types'
import { guid, legitimacy } from '@/utils'
import { getSign, postSign } from '@/utils/sign'
import store from '@/store'
import router from '@/router'

const isSign = false // 开启关闭sign签名验证
const securityKey = '' // 后端提供安全码

// 错误提示信息
const tipText = {
  400: {
    '89002': '登录无效，请重登',
    '89013': '登录超时，请重登'
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

/**
  * 异常处理
  * 自定义错误消息体 {
    "errorCode": "string",
    "errorMsg": "string"
  }
  * 自行修改errorCode和errorMsg
*/
const errorHandler = error => {
  const { response } = error
  if (response && response.status) {
    const { status, data } = response
    // 在tipText中有定义
    if (tipText[status]) {
      if (status === 400) {
        // 未在tipText[400]中定义，使用默认tip
        const msg = tipText[status][data.errorCode]
        msg ? showMessage(msg) : showMessage(data.errorMsg)
        // token失效时跳转
        ;(data.errorCode === '89002' || data.errorCode === '89013') &&
          store.dispatch('manager/fedLogOut').then(() => router.push('/login'))
      } else {
        // 404、500、502
        showMessage(tipText[status])
      }
    } else {
      // 未在tipText中定义，使用默认tip
      showMessage(data.errorMsg)
    }
  }
}

// create an axios instance
const service = axios.create({
  baseURL: '/',
  timeout: 30000, // request timeout
  headers: {
    msgId: 'cms' + guid(),
    from: 'PORTAL',
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

/**
 * 非法字符处理
 */
const illegalHandler = (data, config) => {
  // 不包含 & 字符
  if (!legitimacy(data)) {
    // 包含 & 字符取消请求
    showMessage('&为非法字符,请重新输入')
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()
    config.cancelToken = source.token
    // 取消请求
    source.cancel()
  }
}

// request interceptor
service.interceptors.request.use(
  config => {
    // token
    if (localStorage.getItem('LG_TK')) {
      config.headers['token'] = localStorage.getItem('LG_TK')
    }
    //  在这里：可以根据业务需求可以在发送请求之前做些什么
    // 非法字符处理
    config.method === 'get'
      ? illegalHandler(config.params, config)
      : illegalHandler(config.data, config)
    // 文件上传
    if (isFormData(config.data)) {
      config.headers['Content-Type'] = 'multipart/form-data'
      // 签名
    } else if (isSign) {
      config.method === 'get'
        ? (config.params = getSign(
            new Date().getTime(),
            config.params,
            securityKey
          ))
        : (config.data = postSign(
            new Date().getTime(),
            config.data,
            securityKey
          ))
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
    // 异常处理
    errorHandler(error)
    return Promise.reject(error)
  }
)

export default service
