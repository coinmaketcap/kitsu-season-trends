import React from 'react'
import PropTypes from 'prop-types'

const Trend = ({ text }) => (
  <span>{text}</span>
)

Trend.propTypes = {
  text: PropTypes.string.isRequired
}

export default Trend
