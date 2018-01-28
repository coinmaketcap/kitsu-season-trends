import React from 'react'

import AddTodo from '../../containers/AddTodo'
import Header from '../Header'
import NavBar from '../NavBar'
import VisibleTodoList from '../../containers/VisibleTodoList'

const App = () => (
  <div className='App'>
    <Header />
    <NavBar />
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App
