/**
 * Created by FreeGIS on 2016/7/18.
 * 提供了国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换
 * 本js模块适合用于将适量数量点坐标加减偏移用于叠加不同网络底图
 * 本js模块不适合成千上万等大量点做偏移量修正
 * 本js模块暂不支持线面转换
 */

//定义一些常量
const PI = 3.1415926535897932384626
const a = 6378245.0
const ee = 0.00669342162296594323

const _transformlat = function(lng, lat) {
  let ret =
    -100.0 +
    2.0 * lng +
    3.0 * lat +
    0.2 * lat * lat +
    0.1 * lng * lat +
    0.2 * Math.sqrt(Math.abs(lng))
  ret +=
    ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) *
      2.0) /
    3.0
  ret +=
    ((20.0 * Math.sin(lat * PI) + 40.0 * Math.sin((lat / 3.0) * PI)) * 2.0) /
    3.0
  ret +=
    ((160.0 * Math.sin((lat / 12.0) * PI) + 320 * Math.sin((lat * PI) / 30.0)) *
      2.0) /
    3.0
  return ret
}

const _transformlng = function(lng, lat) {
  let ret =
    300.0 +
    lng +
    2.0 * lat +
    0.1 * lng * lng +
    0.1 * lng * lat +
    0.1 * Math.sqrt(Math.abs(lng))
  ret +=
    ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) *
      2.0) /
    3.0
  ret +=
    ((20.0 * Math.sin(lng * PI) + 40.0 * Math.sin((lng / 3.0) * PI)) * 2.0) /
    3.0
  ret +=
    ((150.0 * Math.sin((lng / 12.0) * PI) +
      300.0 * Math.sin((lng / 30.0) * PI)) *
      2.0) /
    3.0
  return ret
}
/**
 * 判断是否在国内，不在国内则不做偏移
 * @param lng
 * @param lat
 * @returns {boolean}
 */
const _out_of_china = function(lng, lat) {
  return (
    lng < 72.004 || lng > 137.8347 || (lat < 0.8293 || lat > 55.8271 || false)
  )
}

/**
 * WGS84转GCj02
 * @param lon
 * @param lat
 * @returns {*[]}
 */
export const WGS2GCJ = function(lon, lat) {
  if (_out_of_china(lon, lat)) {
    return [lon, lat]
  } else {
    let dlat = _transformlat(lon - 105.0, lat - 35.0)
    let dlon = _transformlng(lon - 105.0, lat - 35.0)
    const radlat = (lat / 180.0) * PI
    let magic = Math.sin(radlat)
    magic = 1 - ee * magic * magic
    const sqrtmagic = Math.sqrt(magic)
    dlat = (dlat * 180.0) / (((a * (1 - ee)) / (magic * sqrtmagic)) * PI)
    dlon = (dlon * 180.0) / ((a / sqrtmagic) * Math.cos(radlat) * PI)
    const mglat = lat + dlat
    const mglon = lon + dlon
    return [mglon, mglat]
  }
}
/**
 * GCJ02 转换为 WGS84
 * @param lon
 * @param lat
 * @returns {*[]}
 */
export const GCJ2WGS = function(lon, lat) {
  if (_out_of_china(lon, lat)) {
    return [lon, lat]
  } else {
    let dlat = _transformlat(lon - 105.0, lat - 35.0)
    let dlon = _transformlng(lon - 105.0, lat - 35.0)
    const radlat = (lat / 180.0) * PI
    let magic = Math.sin(radlat)
    magic = 1 - ee * magic * magic
    const sqrtmagic = Math.sqrt(magic)
    dlat = (dlat * 180.0) / (((a * (1 - ee)) / (magic * sqrtmagic)) * PI)
    dlon = (dlon * 180.0) / ((a / sqrtmagic) * Math.cos(radlat) * PI)
    const mglat = lat + dlat
    const mglon = lon + dlon
    return [lon * 2 - mglon, lat * 2 - mglat]
  }
}
