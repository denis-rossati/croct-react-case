import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import LoginPage from './pages/LoginPage'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" >
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
