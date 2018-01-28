import React from 'react'
import PropTypes from 'prop-types'
// import Trend from '../Trend'

const TrendGrid = ({ trends }) => (
  <ul>
    {trends.data.map((trend, index) => (
      <li>{trend.t}</li>
    ))}
  </ul>
)

TrendGrid.propTypes = {
  trends: PropTypes.objectOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number
        })
      )
    })
  )
}

export default TrendGrid
