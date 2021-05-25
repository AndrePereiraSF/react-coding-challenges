import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import SecondPage from './pages/PageTwo'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/second-page" component={SecondPage} />
    </BrowserRouter>
  )
}

export default Routes
