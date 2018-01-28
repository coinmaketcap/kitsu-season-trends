const sortOrder = (state = 'SORT_SCORE', action) => {
  switch (action.type) {
    case 'SET_SORT_ORDER':
      return action.sort
    default:
      return state
  }
}

export default sortOrder
