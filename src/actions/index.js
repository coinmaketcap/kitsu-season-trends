import { decode } from 'msgpack-lite/lib/decode'
import { season as s, year as y } from '../util'

export const setSortOrder = sort => {
  return {
    type: 'SET_SORT_ORDER',
    sort
  }
}

export const setTrends = trends => {
  console.log('setTrends')
  console.log(trends)
  return {
    type: 'SET_TRENDS',
    trends
  }
}

export const fetchData = ({ season, year }) => {
  return async dispatch => {
    const res = await fetch(`/msgpack/${year || y()}-${season || s()}.json`, { method: 'get' })

    if (!res.ok) throw new Error(404)

    const { data, meta, updated } = decode(new Uint8Array(await res.arrayBuffer()))

    await Object.keys(data).forEach(show => {
      data[show].u = data[show].u === 0 ? 'TV' : 'ONA'
    })

    const state = { data: Object.values(data), meta, updated }
    dispatch(setTrends(state))
  }
}
