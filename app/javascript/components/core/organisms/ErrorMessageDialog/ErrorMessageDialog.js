import React, { useState, useEffect } from 'react'
import ErrorMessage from '../../molecules/ErrorMessage/ErrorMessage'
import ErrorMessageDialogStyled from '../../../styled/organisms/errorMessageDialogStyled'
import { connect } from 'react-redux'
import { validationErrorActions } from '../../../../redux/actions/validationMessageActions'

const ErrorMessageDialog = ({
  errors,
  dispatch,
  ...props }) => {
  const [errorsToDisplay, setErrorsToDisplay] = useState(errors)

  /**
   * Function that removes the error message automatically after 5s.
   * @param { string } key Represents an error to be removed.
   */
  const remover = (key) => {
    setTimeout(() => {
      dispatch(validationErrorActions.removeErrorMessage(key))
    }, 5000)
  }

  useEffect(() => {
    setErrorsToDisplay(errors)
  }, [errors])

  return (
    <ErrorMessageDialogStyled>
      { Object.keys(errorsToDisplay).map((error) => {
        remover(error)

        return (
          <ErrorMessage
            key = { error }
            error = { errorsToDisplay[error] }
          />
        )
      }) }
    </ErrorMessageDialogStyled>
  )
}

const mapStateToProps = (state) => {
    return { errors : state.validationErrorMessage }
}

export default connect(mapStateToProps) (ErrorMessageDialog)
