import React from 'react'
import PropTypes from 'prop-types'

import AddTodo from '../../containers/AddTodo'
import Header from '../Header'
import NavBar from '../NavBar'
import VisibleTodoList from '../../containers/VisibleTodoList'

const App = ({ match }) => (
  <div>
    <Header
      season={match.params.season}
      year={match.params.year}
    />
    <NavBar />
    <AddTodo />
    <VisibleTodoList />
  </div>
)

App.propTypes = {
  match: PropTypes.object.isRequired
}

export default App
