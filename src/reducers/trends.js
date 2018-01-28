
const trends = (state = { data: [], meta: {}, updated: '' }, actions) => {
  console.log('actions')
  console.log(actions)
  switch (actions.type) {
    case 'SET_TRENDS':
      const trends = actions.trends
      console.log('state')
      console.log(state)
      return { ...state, ...trends }
    default:
      return state
  }
}

export default trends
