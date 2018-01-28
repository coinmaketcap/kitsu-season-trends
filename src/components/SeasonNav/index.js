import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

import { prevSeason, nextSeason } from '../../util'

import './index.sss'

const SeasonNav = ({ currentSeason }) => {
  const prev = prevSeason(currentSeason)
  const next = nextSeason(currentSeason)

  return (
    <div className='SeasonNav'>
      <Link className='link prev' to={`/${prev.year}/${prev.season}`}>Last season</Link>
      <Link className='link next' to={`/${next.year}/${next.season}`}>Next season</Link>
    </div>
  )
}

SeasonNav.propTypes = {
  currentSeason: PropTypes.object.isRequired
}

export default SeasonNav
