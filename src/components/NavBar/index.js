import React from 'react'
import PropTypes from 'prop-types'
import FilterButton from '../FilterButton'
import './index.sss'

const filters = [
  'Score',
  'Popularity',
  'Percent Rated',
  'Favourites'
]

const NavBar = ({ onFilterClick }) => (
  <nav>
    <div className='container'>
      <div className='nav-filters'>
        <span>Sort By</span>
        {filters.map((filter, index) => (
          <FilterButton key={index} text={filter} onClick={() => onFilterClick(index)} />
        ))}
      </div>
      <div className='nav-info'>
        <span>Last updated 10 years ago</span>
      </div>
    </div>
  </nav>
)

NavBar.propTypes = {
  onFilterClick: PropTypes.func.isRequired
}

export default NavBar
