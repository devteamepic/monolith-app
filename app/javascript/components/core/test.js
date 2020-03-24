import React from 'react'
import LoginForm from './molecules/LoginForm/LoginForm'
import { connect } from 'react-redux'
import '../../../assets/stylesheets/application.css'
import colorScheme from '../../misc/colorScheme'
import Text from '../core/atoms/Text/Text'

const Test = (props) => {

    return (
        <div id='test'>
          <LoginForm
            colorScheme = { colorScheme }
          />
          <Text
            size = { 'large' }
          >
            asdfasdf
          </Text>
        </div>
    )
}

const mapStateToProps = (state) => {
  return { files: state.files }
}

export default connect(mapStateToProps) (Test)
