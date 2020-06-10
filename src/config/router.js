import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Classement from '../screens/classement'
import HomeFoot from '../screens/homeFoot'
import FavoriteTeam from '../screens/favoriteTeam'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeFoot} />
        <Route path='/classement/:id' component={Classement}></Route>
        <Route path='/favoriteTeam/:id/:id_league' component={FavoriteTeam} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
