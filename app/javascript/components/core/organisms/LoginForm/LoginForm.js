import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../atoms/Input/Input'
import { Link, Redirect } from 'react-router-dom'
import FormStyledWrapper from '../../../styled/molecules/formStyled'
import Text from '../../atoms/Text/Text'
import login from '../../../../misc/services/loginService'
import { request, success, failure } from '../../../../redux/actions/loginAction'
import { emailChange, passwordChange } from '../../../../redux/actions/loginFormInputActions'
import { loginErrorMessage } from '../../../../redux/actions/validationMessageAction'
import colorScheme from '../../../../misc/colorScheme'

const LoginForm = ({
  dispatch,
  loggedIn,
  email,
  password,
  ...props }) => {
    const [response, setResponse] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(request({ email }))

    login(email, password)
      .then(response => {
        setResponse(JSON.parse(response))
        dispatch(success({ email: response.email, fullName: response.full_name }))
      })
      .catch(error => {
        dispatch(emailChange(''))
        dispatch(passwordChange(''))
        dispatch(failure(error))
      })
  }

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem('token', response.access_token)
      localStorage.setItem('userId', response.user_id)
    }
    else if (loggedIn === false) {
      dispatch(loginErrorMessage('Invalid email or password. Or bad internet connection.'))
    }
  }, [response, loggedIn, dispatch, props])

    return (
      <FormStyledWrapper
        type = 'login'
        colorScheme = { colorScheme }
        callback = { handleSubmit }
      >
        { loggedIn && <Redirect to='/home'/> }
        <Input
          type = { 'text' }
          placeholder = 'email'
          callback = { value => emailChange(value) }
          inputValue = { email }
        />
        <Input
          type = { 'password' }
          placeholder = 'password'
          callback = { value => passwordChange(value) }
          inputValue = { password }
        />
        <Input
          type = { 'submit' }
          text = 'Log in'
        />
        <Link style={{ color: colorScheme.blue, width: 'fit-content' }} to='/register'>
          <Text
            isHeader = { true }
            size = { 'small' }
          >
            Register
          </Text>
        </Link>
        <br/>
        <Link style={{ color: colorScheme.blue }} to='/about'>
          <Text
            isHeader = { true }
            size = { 'small' }
          >
            What is a UNIFOUND
          </Text>
        </Link>
      </FormStyledWrapper>
    )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.authenticate.loggedIn,
    email: state.loginInputChange.email,
    password: state.loginInputChange.password
  }
}

export default connect(mapStateToProps) (LoginForm)
