import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../atoms/Input/Input'
import FormStyledWrapper from '../../../styled/molecules/formStyled'
import register from '../../../../misc/services/registerService'
import { Redirect } from 'react-router-dom'
import { emailErrorMessage, passwordErrorMessage, matchPasswordErrorMessage } from '../../../../redux/actions/validationMessageAction'
import { request, success, failure } from '../../../../redux/actions/loginAction'
import { validator } from '../../../../misc/services/validationService'
import { emailChange, firstNameChange, lastNameChange, passwordChange, matchingPasswordChange } from '../../../../redux/actions/registerFormInputAction'
import login from '../../../../misc/services/loginService'

const RegisterForm = ({
  dispatch,
  colorScheme,
  loggedIn,
  loggingIn,
  email,
  firstName,
  lastName,
  password,
  matchingPassword,
  emailError,
  ...props }) => {
    const [response, setResponse] = useState('')
    const [disabled, setDisabled] = useState(true)

    console.log(emailError)

    const handleSubmit = (e) => {
      e.preventDefault()

      dispatch(request({ email }))

      register(email, firstName, lastName, password)
        .then(response => {
          login(email, password)
            .then(response => {
              console.log(response)
              setResponse(JSON.parse(response))
              dispatch(success({ email: response.email, fullName: response.full_name }))
            })
            .catch(error => {
              console.log(error)
              dispatch(failure(error))
            })
        })
        .catch(errorResponse => {
          dispatch(failure(errorResponse))
        })
    }

    useEffect(() => {
      setDisabled(validator.validateEmail(email).status || validator.passwordValidate(password).status || !matchingPassword || !firstName || !lastName || password !== matchingPassword)
    }, [email, password, matchingPassword, firstName, lastName])

    useEffect(() => {
      if (loggedIn) {
        localStorage.setItem('token', response.access_token)
      }
      else if (loggedIn === false) {
        console.log('wtf')
      }
    }, [response, loggedIn, loggingIn])

    return (
        <FormStyledWrapper
          type = 'register'
          colorScheme = { colorScheme }
          callback = { handleSubmit }
        >
          { loggedIn && <Redirect to='/home'/> }
          <Input
            height = '95%'
            type = { 'text' }
            placeholder = 'email'
            callback = { value => emailChange(value) }
            validate = { validator.validateEmail(email) }
            errorDispatch = { emailErrorMessage }
          />
          <Input
            height = '95%'
            type = { 'password' }
            placeholder = 'password'
            callback = { value => passwordChange(value) }
            validate = { validator.passwordValidate(password) }
            errorDispatch = { passwordErrorMessage }
          />
          <Input
            height = '95%'
            type = { 'text' }
            placeholder = 'first name'
            callback = { value => firstNameChange(value) }
          />
          <Input
            height = '95%'
            type = { 'password' }
            placeholder = 'repeat password'
            callback = { value => matchingPasswordChange(value) }
            validate = { validator.matchPasswords(password, matchingPassword) }
            errorDispatch = { matchPasswordErrorMessage }
          />
          <Input
            height = '95%'
            type = { 'text' }
            placeholder = 'last name'
            callback = { value => lastNameChange(value) }
          />
          <Input
            height = '95%'
            type = { 'submit' }
            text = 'Register'
            disabled = { disabled }
          />

        </FormStyledWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
      loggingIn: state.authenticate.loggingIn,
      loggedIn: state.authenticate.loggedIn,
      email: state.registerInputChange.email,
      firstName: state.registerInputChange.firstName,
      lastName: state.registerInputChange.lastName,
      password: state.registerInputChange.password,
      matchingPassword: state.registerInputChange.matchingPassword,
      emailError: state.validationErrorMessage.emailError
    }
}

export default connect(mapStateToProps) (RegisterForm)
