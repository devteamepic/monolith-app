import React from 'react';
import '../../assets/stylesheets/application.css';
import reducers from '../redux/reducers'
import LoginPage from '../components/core/pages/LoginPage/LoginPage'
import RegisterPage from '../components/core/pages/RegisterPage/RegisterPage'
import HomePage from '../components/core/pages/HomePage/HomePage'
import ProfilePage from '../components/core/pages/ProfilePage/ProfilePage'
import AddFilePage from '../components/core/pages/AddFilePage/AddFilePage'
import Test from '../components/core/pages/Test'
import PrivateRoute from '../components/core/atoms/PrivateRoute/PrivateRoute'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux'

const createStoreMiddleware = applyMiddleware()(createStore)

function App(props) {
  return (
      <Provider store={createStoreMiddleware(reducers)}>
        <BrowserRouter>
          <div className="App">

            <Switch>
              <Route exact path='/login' component={LoginPage}/>
              <Route exact path='/test' component={Test}/>
              <Route exact path='/register' component={RegisterPage}/>
              <PrivateRoute exact path='/home' component={HomePage}/>
              <PrivateRoute exact path='/profile' component={ProfilePage}/>
              <PrivateRoute exact path='/findUni' component={AddFilePage}/>
              <Route path='/openSourceWiki' component={() => {
                window.location.href = 'https://en.wikipedia.org/wiki/Open_source'
                return null
              }}/>
              <Redirect exact from="/" to="/home" />
              <Route path='/arxiv' component={() => {
                window.location.href = 'https://arxiv.org'
                return null
              }}/>
              <Route path='/github' component={() => {
                window.location.href = 'https://github.com/devteamepic'
                return null
              }}/>
            </Switch>

          </div>
        </BrowserRouter>
      </Provider>

  );
}

export default App

