import { createStore } from 'redux'

let ACTIONS = {

}

const STATE = {
  data: [],
  updated: '',
  sort: ''
}

export const store = createStore((state, action) => (
  action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), STATE, typeof devToolsExtension === 'function' ? devToolsExtension() : undefined)
