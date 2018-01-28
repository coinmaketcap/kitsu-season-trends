import React from 'react'
import PropTypes from 'prop-types'
// import Trend from '../Trend'

const Item = ({ value }) => (
  <li>{value}</li>
)

Item.propTypes = {
  value: PropTypes.any
}

const TrendGrid = ({ trends }) => {
  if (trends.length < 1) {
    return (
      <span>No data</span>
    )
  }

  return (
    <ol>
      {trends.map(trend => (
        <Item key={trend.t} value={trend.t} />
      ))}
    </ol>
  )
}

TrendGrid.propTypes = {
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  )
}

export default TrendGrid
