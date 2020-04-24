import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import ErrorDialog from '../../organisms/ErrorMessageDialog/ErrorMessageDialog'
import LoginForm from '../../organisms/LoginForm/LoginForm'
import colorScheme from '../../../../misc/colorScheme'
import LogRegPagesStyled from '../../../styled/pages/logRegPagesStyled'
import { loginPageText } from '../../../../misc/loginPageText'

const LoginPage = ({ error, ...props }) => {
    const [errorMessage, setErrorMessage] = useState(error)

    useEffect(() => {
        setErrorMessage(error)
    }, [error])

    return (
        <LogRegPagesStyled
          colorScheme = { colorScheme }
          isLogin = { true }
        >
          { errorMessage && <ErrorDialog/> }
          <div style={{ height: '100%', width: '100%', backgroundColor: colorScheme.denim }}>
            <TextViewer childrenData={ loginPageText }/>
          </div>
          <LoginForm
            colorScheme = { colorScheme }
          />
        </LogRegPagesStyled>
    )
}

const mapStateToProps = (state) => {
    return { error: state.validationErrorMessage }
}

export default connect(mapStateToProps) (LoginPage)
