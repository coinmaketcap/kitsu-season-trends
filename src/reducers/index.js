import { combineReducers } from 'redux'
import todos from './todos'
import trends from './trends'
import sortOrder from './sortOrder'

const todoApp = combineReducers({
  todos,
  trends,
  sortOrder
})

export default todoApp
