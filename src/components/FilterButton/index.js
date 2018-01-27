import React from 'react'
import PropTypes from 'prop-types'

const FilterButton = ({ onClick, text }) => (
  <button onClick={onClick}>
    { text }
  </button>
)

FilterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default FilterButton
