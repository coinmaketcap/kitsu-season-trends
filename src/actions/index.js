import { decode } from 'msgpack-lite/lib/decode'
import { season as s, year as y } from '../util'

export const setSortOrder = sort => {
  return {
    type: 'SET_SORT_ORDER',
    sort
  }
}

export const setTrends = trends => {
  return {
    type: 'SET_TRENDS',
    trends
  }
}

export const fetchData = ({ season, year }) => {
  return async dispatch => {
    try {
      let collectionStartDate = Number.MAX_SAFE_INTEGER
      const res = await fetch(`/msgpack/${year || y()}-${season || s()}.json`, { method: 'get' })

      if (!res.ok) throw new Error(404)

      const { data, meta, updated } = decode(new Uint8Array(await res.arrayBuffer()))

      for (let show in data) {
        // 0: TV, 1: ONA, >1: ???
        data[show].u = data[show].u === 0 ? 'TV' : 'ONA'
        for (let date in data[show].d) {
          // Add 0 values
          if (!data[show].d[date].m) data[show].d[date].m = 0
          if (!data[show].d[date].r) data[show].d[date].r = 0
          if (!data[show].d[date].u) data[show].d[date].u = 0
          if (!data[show].d[date].f) data[show].d[date].f = 0

          // Convert hours since epoch into milliseconds
          data[show].d[date].d = data[show].d[date].d * 3600000
          // Get the oldest date value from data collection
          if (data[show].d[date].d < collectionStartDate) {
            collectionStartDate = data[show].d[date].d
          }
        }
      }

      const state = { data: Object.values(data), meta, updated }
      dispatch(setTrends(state))
    } catch (error) {
      dispatch(setTrends({ data: [], meta: {}, updated: '' }))
    }
  }
}
