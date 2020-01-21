import { getPropByPath } from '@/utils'
import dayjs from 'dayjs'
const filedMap = {
  roleType: {
    SUPER: '超级管理员',
    SUPER_MGR: '管理员'
  },
  registerTime: val => {
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
