import React from 'react'
import PropTypes from 'prop-types'
// import Trend from '../Trend'

const TrendGrid = ({ trends }) => (
  <ul>
    <pre>{ JSON.stringify(trends) }</pre>
    {/*
    {trends.data.map(trend => (
      <Trend key={trend.id} {...trend} />
    ))}
  */}
  </ul>
)

TrendGrid.propTypes = {
  trends: PropTypes.objectOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired
}

export default TrendGrid
