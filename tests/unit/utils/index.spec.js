import {
  S4,
  guid,
  isEmptyObj,
  rebuildObj,
  legitimacy,
  getRowIdentity,
  getValueByPath,
  getPropByPath
} from '@/utils'

describe('Utils:index', () => {
  it('S4', () => {
    expect(/^[0-9a-z]{4}$/.test(S4())).toBe(true)
  })
  it('guid', () => {
    expect(
      /^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/.test(
        guid()
      )
    ).toBe(true)
  })
  it('isEmptyObj', () => {
    expect(isEmptyObj({})).toBe(true)
    expect(isEmptyObj(Object())).toBe(true)
    expect(isEmptyObj({ a: 1 })).toBe(false)
  })
  it('rebuildObj', () => {
    expect(rebuildObj({ a: 1, b: 2, c: '', d: '' })).toEqual({ a: 1, b: 2 })
    expect(rebuildObj({ a: '' })).toEqual({})
  })
  it('legitimacy', () => {
    expect(legitimacy({ a: 1 })).toBe(true)
    expect(legitimacy({ a: '&123' })).toBe(false)
  })
  it('getRowIdentity', () => {
    expect(getRowIdentity({}, 'a')).toBe()
    expect(getRowIdentity({ a: 1 }, 'a')).toBe(1)
    expect(getRowIdentity({ a: { b: 1 } }, 'a.b')).toBe(1)
  })
  it('getValueByPath', () => {
    expect(getValueByPath({}, 'a')).toBe()
    expect(getValueByPath({ a: 1 }, 'a')).toBe(1)
    expect(getValueByPath({ a: { b: 1 } }, 'a.b')).toBe(1)
  })
  it('getPropByPath', () => {
    expect(getPropByPath({}, 'a').k).toBe('a')
    expect(getPropByPath({ a: 1 }, 'a').k).toBe('a')
    expect(getPropByPath({ a: { b: 1 } }, 'a.b').k).toBe('b')
  })
})
