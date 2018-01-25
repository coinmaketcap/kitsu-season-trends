import React, { Component } from 'react'
import AppHeader from '../AppHeader'
import NavBar from '../NavBar'
import './index.sss'

export default class extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <NavBar/>
      </div>
    )
  }
}
