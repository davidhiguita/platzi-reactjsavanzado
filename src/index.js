import React from 'react'
import reactDOM from 'react-dom'

const App = () => (
  <div className='app'>
    <h1>APP</h1>
  </div>
)

reactDOM.render(
  <App />,
  document.querySelector('#app')
)
