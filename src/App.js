import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import authService from './services/authService';
import Elements from './components/elements';
import Navbar from './components/navbar.';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/not-found';
import MovieForm from './components/movieForm';
import LoginFrom from './components/loginForm';
import RegisterPage from './components/signupForm';
import Logout from './components/logout';
import ProtectedRoute from './common/protectedRoute';
import './App.css';



class App extends Component {
  state = {
    user: ""
  }

  componentDidMount() {
    try {

      // const token = localStorage.getItem('token')
      // const user = jwtDecode(token)
      const user = authService.getUser()
      this.setState({ user })

    }
    catch (err) {
      // console.log('not loaded')
    }
  }

  render() {
    // console.log(this.state.user)
    const user = this.state.user
    return (
      <React.Fragment>
        <Navbar user={this.state.user} />
        <Switch>
          <Route path='/login' component={LoginFrom} />
          <Route path='/logout' component={Logout} />
          <Route path='/signup' component={RegisterPage} />
          {/* <Route path='/customers' component={Customers} /> */}
          <ProtectedRoute path='/customers' component={Customers} />
          {/* <Route path='/rentals' component={Rentals}/> */}
          <ProtectedRoute path='/rentals' component={Rentals} />
          <Route path='/movies' component={Elements} />
          <Route path='/movies/:id' component={MovieForm} />
          <Redirect from='/' exact to='/movies' />
          <Route path='/not-found' component={NotFound} />
          <Redirect to='not-found' />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
