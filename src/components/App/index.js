import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Header from '../Header'
import NavBar from '../NavBar'
import SortedTrendGrid from '../../containers/SortedTrendGrid'
import { fetchData } from '../../actions'

let App = ({ match, dispatch }) => {
  const { season, year } = match.params
  dispatch(fetchData({ season, year }))

  return (
    <div>
      <Header
        season={season}
        year={year}
      />
      <NavBar />
      <SortedTrendGrid />
    </div>
  )
}

App = connect()(App)

App.propTypes = {
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func
}

export default App
