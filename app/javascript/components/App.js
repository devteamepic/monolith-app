import React from "react"
import '../../assets/stylesheets/application.css';
import Test from '../components/core/test'
import { Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from  '../redux/reducers'
import { BrowserRouter } from 'react-router-dom'

const createStoreMiddleware = applyMiddleware() (createStore);

class App extends React.Component {
  render () {

    return (
        <Provider store={ createStoreMiddleware(reducers) }>
            <BrowserRouter>
                  <div className="App">
                    <Link style = {{ height: 'fit-content' }} to='/test'>Test</Link>
                    <Route path='/test' component={Test}/>
                  </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App
