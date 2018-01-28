
const trends = (state = { data: [], meta: {}, updated: '' }, actions) => {
  switch (actions.type) {
    case 'SET_TRENDS':
      state = actions.trends
      return state
    default:
      return state
  }
}

export default trends
