import { combineReducers } from 'redux'
import trends from './trends'
import sortOrder from './sortOrder'

const reducers = combineReducers({
  trends,
  sortOrder
})

export default reducers
