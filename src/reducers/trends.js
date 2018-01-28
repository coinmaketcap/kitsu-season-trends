
import { decode } from 'msgpack-lite/lib/decode'

const fetchData = ({ season, year }) => {
  return fetch(`/msgpack/${year}-${season}.json`, {
    method: 'get'
  })
    .then(res => {
      if (res.ok) return res.arrayBuffer()
      else throw new Error(404)
    })
    .then(binary => {
      const buffer = new Uint8Array(binary)
      return decode(buffer)
    })
    .then(({ data, meta, updated }) => {
      Object.keys(data).forEach(show => {
        data[show].u = data[show].u === 0 ? 'TV' : 'ONA'
      })
      return { data: Object.values(data), meta, updated }
    })
}

const trends = async (state = { data: [], meta: {}, updated: '' }, actions) => {
  switch (actions.type) {
    case 'SET_SEASON_DATA':
      state = await fetchData({ season: actions.season, year: actions.year })
      console.log(state)
      return state
    default:
      return state
  }
}

export default trends
