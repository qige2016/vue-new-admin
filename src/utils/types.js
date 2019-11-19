/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export const isObject = obj => obj !== null && typeof obj === 'object'

const _toString = Object.prototype.toString
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export const isPlainObject = obj => _toString.call(obj) === '[object Object]'

export const isFormData = obj => _toString.call(obj) === '[object FormData]'

export const isUndef = val => val === undefined || val === null

export const isDef = val => val !== undefined && val !== null
