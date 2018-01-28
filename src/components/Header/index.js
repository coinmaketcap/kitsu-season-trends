import React from 'react'
import PropTypes from 'prop-types'

import GitHubCorner from '../GitHubCorner'
import SeasonNav from '../SeasonNav'

import './index.sss'

const Header = ({ season, year }) => (
  <header className='App-header'>
    <div className='container'>
      <h1 className='App-title'>
        <a href='https://kitsu.io#season.moe'>Kitsu</a>
      </h1>
      <h2>{ season }<strong>{ year }</strong></h2>
      <GitHubCorner />
      <SeasonNav currentSeason={{ season, year }} />
    </div>
  </header>
)

Header.propTypes = {
  season: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
}

export default Header
