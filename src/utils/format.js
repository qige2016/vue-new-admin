import { getPropByPath } from '@/utils'
import dayjs from 'dayjs'
const filedMap = {
  type: {
    MONEY: '金额',
    RATE: '比例'
  },
  gender: {
    MALE: '男',
    FEMALE: '女',
    UNKNOWN: '未知'
  },
  status: {
    NORMAL: '正常',
    DISABLE: '禁用',
    TOBE_PAID: '待支付',
    PAID: '已支付',
    EXPIRED: '已过期'
  },
  registerTime: val => {
    if (!val) return
    return dayjs(val).format('YYYY-MM-DD HH:mm:ss')
  },
  orderTime: val => {
    if (!val) return
    return dayjs(val).format('YYYY-MM-DD HH:mm:ss')
  }
}

// 方法重载
export default (...args) => {
  let key, value
  // Form format
  if (args.length === 2) {
    ;[key, value] = args
  } else {
    // Table format
    key = getPropByPath(args[0], args[1].property).k
    value = args[2]
  }

  if (!filedMap[key]) return
  if (typeof filedMap[key] === 'function') {
    return filedMap[key](value)
  } else {
    return filedMap[key][value] || value
  }
}
