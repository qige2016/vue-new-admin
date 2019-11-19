import { WGS2GCJ, GCJ2WGS } from '@/utils/CoordinateTransform'

describe('Utils:CoordinateTransform', () => {
  it('WGS2GCJ', () => {
    expect(WGS2GCJ(116.40097668, 39.90332615)[0] - 116.40717 < 0.0001).toBe(
      true
    )
    expect(WGS2GCJ(116.40097668, 39.90332615)[1] - 39.90469 < 0.0001).toBe(true)
  })
  it('GCJ2WGS', () => {
    expect(GCJ2WGS(116.40717, 39.90469)[0] - 116.40097668 < 0.0001).toBe(true)
    expect(GCJ2WGS(116.40717, 39.90469)[1] - 39.90332615 < 0.0001).toBe(true)
  })
})
