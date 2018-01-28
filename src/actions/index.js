import { season, year } from '../util'

export const addSeasonData = seasonData => {
  return {
    type: 'SET_SEASON_DATA',
    season: seasonData ? seasonData.season : season(),
    year: seasonData ? seasonData.year : year()
  }
}

export const setSortOrder = sort => {
  return {
    type: 'SET_SORT_ORDER',
    sort
  }
}

/* Remove below */

let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
