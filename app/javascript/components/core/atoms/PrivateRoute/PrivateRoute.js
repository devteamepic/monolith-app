import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route
      { ...rest }
      render = {props =>
        localStorage.getItem('token') ? (
          <Component {...props}/>
        ) : (
          <Redirect
            to = {{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = (state) => {
  return { loggedIn : state.authenticate.loggedIn }
}

export default connect(mapStateToProps) (PrivateRoute)
