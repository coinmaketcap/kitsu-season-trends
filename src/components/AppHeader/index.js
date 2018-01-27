import React from 'react'
import GitHubCorner from '../GitHubCorner'
import { season, year } from '../../util'
import './index.sss'

const AppHeader = () => (
  <header className="App-header">
    <div className="container">
      <h1 className="App-title">
        <a href='https://kitsu.io#season.moe'>Kitsu</a>
      </h1>
      <h2>{ season() }<strong>{ year() }</strong></h2>
      <GitHubCorner/>
    </div>
  </header>
)

export default AppHeader
