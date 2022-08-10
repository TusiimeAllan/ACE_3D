import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Desktop1 from './views/desktop1'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Desktop1} path="/desktop1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
