import React from 'react'
import SortLink from '../../containers/SortLink'
import './index.sss'

const sorts = [
  { sort: 'SORT_SCORE', name: 'Score' },
  { sort: 'SORT_POPULARITY', name: 'Popularity' },
  { sort: 'SORT_RATED', name: 'Percent Rated' },
  { sort: 'SORT_FAVOURITES', name: 'Favourites' }
]

let NavBar = () => (
  <nav>
    <div className='container'>
      <div className='nav-filters'>
        <span>Sort By</span>
        {sorts.map(({ sort, name }, index) => (
          <SortLink key={index} sort={sort}>{name}</SortLink>
        ))}
      </div>
      <div className='nav-info'>
        <span>Last updated 10 years ago</span>
      </div>
    </div>
  </nav>
)

export default NavBar
