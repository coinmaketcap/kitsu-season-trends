import { combineReducers } from 'redux'
import todos from './todos'
import sortOrder from './sortOrder'

const todoApp = combineReducers({
  todos,
  sortOrder
})

export default todoApp
