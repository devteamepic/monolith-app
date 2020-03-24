import React from "react"
import '../../assets/stylesheets/application.css';
import Test from '../components/core/test'
import { Route, Link } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Link style = {{ height: 'fit-content' }} to='/test'>Test</Link>
        <Route path='/test' component={Test}/>
      </div>
    );
  }
}

export default App
