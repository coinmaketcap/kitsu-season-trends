import { season as s, year as y } from '../util'

export const setSeasonData = ({ season, year }) => {
  return {
    type: 'SET_SEASON_DATA',
    season: season || s(),
    year: year || y()
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
