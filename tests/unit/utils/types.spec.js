import {
  isObject,
  isPlainObject,
  isFormData,
  isUndef,
  isDef
} from '@/utils/types'

describe('Utils:types', () => {
  it('isObject', () => {
    // should return `true` for objects
    expect(isObject([1, 2, 3])).toBe(true)
    expect(isObject(Object(false))).toBe(true)
    expect(isObject(new Date())).toBe(true)
    expect(isObject(new Error())).toBe(true)
    expect(isObject({ a: 1 })).toBe(true)
    expect(isObject(Object(0))).toBe(true)
    expect(isObject(/x/)).toBe(true)
    expect(isObject(Object('a'))).toBe(true)
    expect(isObject(Math)).toBe(true)
    // should return `false` for non-objects
    expect(isPlainObject(Symbol('id'))).toBe(false)
    expect(isObject(Error)).toBe(false)
  })
  it('isPlainObject', () => {
    // should return `true` for plainobjects
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject({ a: 1 })).toBe(true)
    // should return `false` for non-plainobjects
    expect(isPlainObject([1, 2, 3])).toBe(false)
    expect(isPlainObject(true)).toBe(false)
    expect(isPlainObject('a')).toBe(false)
    expect(isPlainObject(Symbol('id'))).toBe(false)
    expect(isPlainObject(Error)).toBe(false)
    expect(isPlainObject(Math)).toBe(false)
  })
  it('isFormData', () => {
    expect(isFormData(new FormData())).toBe(true)
  })
  it('isUndef', () => {
    expect(isUndef()).toBe(true)
    expect(isUndef(undefined)).toBe(true)
    expect(isUndef(null)).toBe(true)
    expect(isUndef([1, 2, 3])).toBe(false)
    expect(isUndef(true)).toBe(false)
    expect(isUndef(new Date())).toBe(false)
    expect(isUndef(new Error())).toBe(false)
    expect(isUndef({ a: 1 })).toBe(false)
    expect(isUndef(1)).toBe(false)
    expect(isUndef(/x/)).toBe(false)
    expect(isUndef('a')).toBe(false)
    expect(isUndef(Symbol('id'))).toBe(false)
  })
  it('isDef', () => {
    expect(isDef({})).toBe(true)
    expect(isDef([])).toBe(true)
    expect(isDef(null)).toBe(false)
    expect(isDef(undefined)).toBe(false)
    expect(isDef()).toBe(false)
  })
})
