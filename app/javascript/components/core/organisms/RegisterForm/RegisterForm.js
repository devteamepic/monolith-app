import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../atoms/Input/Input'
import FormStyledWrapper from '../../../styled/molecules/formStyled'
import register from '../../../../misc/services/registerService'
import { Redirect } from 'react-router-dom'
import { validationErrorActions } from '../../../../redux/actions/validationMessageActions'
import { loginActions } from '../../../../redux/actions/loginActions'
import { validator } from '../../../../misc/services/validationService'
import { registerFormInputActions } from '../../../../redux/actions/registerFormInputActions'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import login from '../../../../misc/services/loginService'

const RegisterForm = ({
  dispatch,
  loggedIn,
  email,
  firstName,
  lastName,
  password,
  matchingPassword,
  ...props }) => {
  const [response, setResponse] = useState('')
  const [disabled, setDisabled] = useState(true)
    const [registerFormLinks] = useState([
      { component: 'link', link: '/login', textValue: 'Log in' },
    ])

  /**
   * Handled the form submition and calls register service.
   * On success calls a login service.
   * @param { Object } e Event.
   */
  const handleSubmit = (e) => {
    e.preventDefault()

    register(email, firstName, lastName, password)
      .then(response => {
        login(email, password)
          .then(response => {
            console.log(response)
            setResponse(JSON.parse(response))
            dispatch(loginActions.success({ email: response.email, fullName: response.full_name }))
          })
          .catch(error => {
            console.log(error)
            dispatch(loginActions.failure(error))
          })
      })
      .catch(errorResponse => {
        dispatch(loginActions.failure(errorResponse))
      })
  }

  /**
   * Validation useEffect
   */
  useEffect(() => {
    setDisabled(validator.validateEmail(email).status
      || validator.passwordValidate(password).status
      || !validator.validateNames(firstName, lastName)
      || validator.matchPasswords(password, matchingPassword).status)
  }, [email, password, matchingPassword, firstName, lastName])

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem('token', response.access_token)
    }
  }, [response, loggedIn])

  return (
    <FormStyledWrapper
      type = 'register'
      callback = { handleSubmit }
    >
      { loggedIn && <Redirect to='/home'/> }
      <Input
        height = '100%'
        type = { 'text' }
        placeholder = 'email'
        callback = { value => registerFormInputActions.emailChange(value) }
        validate = { validator.validateEmail(email) }
        errorDispatch = { validationErrorActions.emailErrorMessage }
      />
      <Input
        height = '100%'
        type = { 'text' }
        placeholder = 'first name'
        callback = { value => registerFormInputActions.firstNameChange(value) }
      />
      <Input
        height = '100%'
        type = { 'text' }
        placeholder = 'last name'
        callback = { value => registerFormInputActions.lastNameChange(value) }
      />
      <Input
        height = '100%'
        type = { 'password' }
        placeholder = 'password'
        callback = { value => registerFormInputActions.passwordChange(value) }
        validate = { validator.passwordValidate(password) }
        errorDispatch = { validationErrorActions.passwordErrorMessage }
      />
      <Input
        height = '100%'
        type = { 'password' }
        placeholder = 'repeat password'
        callback = { value => registerFormInputActions.matchingPasswordChange(value) }
        validate = { validator.matchPasswords(password, matchingPassword) }
        errorDispatch = { validationErrorActions.matchPasswordErrorMessage }
      />
      <Input
        height = '100%'
        type = { 'submit' }
        text = 'Register'
        disabled = { disabled }
      />
      <TextViewer
        childrenData = { registerFormLinks }
        notDescription = { true }
        additionalStyles = { 'grid-area: 4 / 1 / span 4 / span 3;' }
      />
    </FormStyledWrapper>
  )
}

const mapStateToProps = (state) => {
    return {
      loggedIn: state.authenticate.loggedIn,
      email: state.registerInputChange.email,
      firstName: state.registerInputChange.firstName,
      lastName: state.registerInputChange.lastName,
      password: state.registerInputChange.password,
      matchingPassword: state.registerInputChange.matchingPassword,
    }
}

export default connect(mapStateToProps) (RegisterForm)
