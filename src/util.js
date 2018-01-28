export function year (date = new Date()) {
  return new Date(date).getFullYear()
  // December 2016 is 2017-winter
  // if (season() === 'winter' && new Date().getMonth() + 1 === 12) year++
}

export function season (date = new Date()) {
  if (date === null) return null
  switch (new Date(date).getMonth()) {
    case 0:
    case 1:
    case 2:
      return 'winter'
    case 3:
    case 4:
    case 5:
      return 'spring'
    case 6:
    case 7:
    case 8:
      return 'summer'
    case 9:
    case 10:
    case 11:
      return 'autumn'
  }
}

export function seasonUSFormat (date = new Date()) {
  const output = season(date)
  return output === 'autumn' ? 'fall' : output
}

export function prevSeason ({ season, year }) {
  switch (season) {
    case 'winter':
      return { season: 'autumn', year: --year }
    case 'spring':
      return { season: 'winter', year }
    case 'summer':
      return { season: 'spring', year }
    case 'autumn':
      return { season: 'summer', year }
  }
}

export function nextSeason ({ season, year }) {
  switch (season) {
    case 'winter':
      return { season: 'spring', year }
    case 'spring':
      return { season: 'summer', year }
    case 'summer':
      return { season: 'autumn', year }
    case 'autumn':
      return { season: 'winter', year: ++year }
  }
}

export function sort (data, by) {
  return Object.values(data).sort((A, B) => {
    let a, b

    if (by === 'r') {
      a = A.d.slice(-1)[0][by] / A.d.slice(-1)[0].u
      b = B.d.slice(-1)[0][by] / B.d.slice(-1)[0].u
    } else {
      a = A.d.slice(-1)[0][by]
      b = B.d.slice(-1)[0][by]
    }

    /*
    if (by === 'r') {
      a = A[by].slice(-1)[0] / A['u'].slice(-1)[0]
      b = B[by].slice(-1)[0] / B['u'].slice(-1)[0]
    } else {
      a = A[by] instanceof Array ? A[by].slice(-1)[0] : A[by]
      b = B[by] instanceof Array ? B[by].slice(-1)[0] : B[by]
    }
    */
    return a > b ? -1 : a < b ? 1 : 0
  })
}
