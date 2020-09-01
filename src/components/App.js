import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import SearchTodo from '../containers/SearchTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <SearchTodo />
    <Footer />
  </div>
)

export default App
