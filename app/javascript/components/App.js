import React from "react"
import PropTypes from "prop-types"


class App extends React.Component {
  render () {
    return (
      <div>
        test {this.props.value} test
      </div>
    );
  }
}

export default App
