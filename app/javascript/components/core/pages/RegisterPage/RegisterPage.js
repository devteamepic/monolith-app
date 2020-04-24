import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import RegisterForm from '../../organisms/RegisterForm/RegisterForm'
import colorScheme from '../../../../misc/colorScheme'
import LogRegPagesStyled from '../../../styled/pages/logRegPagesStyled'
import ErrorDialog from '../../organisms/ErrorMessageDialog/ErrorMessageDialog'
import { registerPageText } from '../../../../misc/registerPageText'

const RegisterPage = ({ error, ...props }) => {
    const [errorMessage, setErrorMessage] = useState(error)

    useEffect(() => {
        setErrorMessage(error)
    }, [error])

    return (
        <LogRegPagesStyled
          colorScheme = { colorScheme }
        >
          { errorMessage && <ErrorDialog/> }
            <TextViewer
              childrenData={ registerPageText }
              color = 'black'
            />
          <div style={{ height: '100%', width: '100%', backgroundColor: colorScheme.denim }}>
            <RegisterForm
              styles={{ marginTop: '10% !important' }}
              colorScheme = { colorScheme }
            />
          </div>

        </LogRegPagesStyled>
    )
}

const mapStateToProps = (state) => {
    return { error: state.validationErrorMessage }
}

export default connect(mapStateToProps) (RegisterPage)
