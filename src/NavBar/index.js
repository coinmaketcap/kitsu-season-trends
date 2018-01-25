import React, { Component } from 'react'
import './index.sss'

export default class extends Component {
  render() {
    return (
      <nav>
        <div className='container'>
          <div className='nav-filters'>
            <span>Sort By</span>
            <span>Score</span>
            <span>Popularity</span>
            <span>Percent Rated</span>
            <span>Favourites</span>
            <span>Show</span>
            <span>TV</span>
            <span>ONA</span>
          </div>
          <div className='nav-info'>
            <span>Last updated 10 years ago</span>
          </div>
        </div>
      </nav>
    )
  }
}
