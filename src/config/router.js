import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

//import Ligues from '../screens/ligues'
import Classement from '../screens/classement'
import HomeFoot from '../screens/homeFoot'
import FavoriteTeam from '../screens/favoriteTeam'

// import Home from '../screens/home'
// import Detail from '../screens/detail'
// import PrivateRoute from '../utils/privateRoute'

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/*<PrivateRoute path='/homeFoot' component={HomeFoot} />
        <Route path='/detail/:id' component={Detail} /> */}
        <Route exact path='/' component={HomeFoot} />
        <Route path='/classement/:id' component={Classement}></Route>
        {/* <Route path='/homeFoot' component={HomeFoot} /> */}
        <Route path='/favoriteTeam/:id/:id_league' component={FavoriteTeam} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
