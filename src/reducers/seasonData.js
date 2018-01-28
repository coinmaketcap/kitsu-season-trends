const seasonData = (state = 'SEASON_DATA', action) => {
  console.log(state, action)
  switch (action.type) {
    case 'SET_SEASON_DATA':
      return action.sort
    default:
      return state
  }
}

export default seasonData
