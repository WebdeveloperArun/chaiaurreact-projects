import React from 'react'
import Todos from './components/Todos'
import AddTodo from './components/Add'

const App = () => {
  return (
    <div>
      <h1>Learn About Redux</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
