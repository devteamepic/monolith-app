import React, { useState, useEffect } from 'react'
import ErrorMessage from '../../molecules/ErrorMessage/ErrorMessage'
import ErrorMessageDialogStyled from '../../../styled/organisms/errorMessageDialogStyled'
import { connect } from 'react-redux'
import { removeErrorMessage } from '../../../../redux/actions/validationMessageAction'

const ErrorMessageDialog = ({
  errors,
  dispatch,
  ...props }) => {
    const [errorsToDisplay, setErrorsToDisplay] = useState(errors)

    const remover = (key) => {
      setTimeout(() => {
        dispatch(removeErrorMessage(key))
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
