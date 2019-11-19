/**
 * 用于生成uuid
 * @param{null}
 */

export const S4 = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
export const guid = () => {
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  )
}

/**
 * isEmptyObj 判断对象是否为空对象
 * @param {object} obj
 * @return boolean
 */
export const isEmptyObj = obj => JSON.stringify(obj) === '{}'

/**
 * rebuildObj 对象去掉空属性和前后空格
 * @param {object} obj
 * @return object
 */
export const rebuildObj = (obj = {}) => {
  const temp = obj
  for (const i in temp) {
    // 删除空属性
    if (
      temp[i] === '' ||
      temp[i] == null ||
      isEmptyObj(temp[i]) ||
      (Array.isArray(temp[i]) && !temp[i].length)
    ) {
      delete temp[i]
    }
    // 去除前后空格
    if (typeof temp[i] === 'string') {
      temp[i] = temp[i].replace(/(^\s*)|(\s*$)/g, '')
    }
  }
  return temp
}
/**
 * legitimacy 判断http请求参数里是否包含 & 字符
 * @param {object} obj
 * @return object
 */
export const legitimacy = (obj = {}) => {
  const temp = obj
  for (const i in temp) {
    if ((temp[i] + '').indexOf('&') !== -1) return false
  }
  return true
}

export const getRowIdentity = (row, rowKey) => {
  if (!row) throw new Error('row is required when get row identity')
  if (typeof rowKey === 'string') {
    if (rowKey.indexOf('.') < 0) {
      return row[rowKey]
    }
    const key = rowKey.split('.')
    let current = row
    for (let i = 0; i < key.length; i++) {
      current = current[key[i]]
    }
    return current
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row)
  }
}
export const getValueByPath = (object, prop) => {
  prop = prop || ''
  const paths = prop.split('.')
  let current = object
  let result = null
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i]
    if (!current) break

    if (i === j - 1) {
      result = current[path]
      break
    }
    current = current[path]
  }
  return result
}
export const getPropByPath = (obj, path, strict) => {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  const keyArr = path.split('.')
  let i = 0
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break
    const key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!')
      }
      break
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  }
}
