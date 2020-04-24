import React, { useState } from 'react'
import styled from 'styled-components'
import colorScheme from '../../../misc/colorScheme'
import { Link } from 'react-router-dom'
import Text from '../../core/atoms/Text/Text'
import '../../../../assets/stylesheets/application.css'

const FormStyled = styled.div`
width: ${ props => props.type === 'login' ? '500px' : '900px' };
height: 80%;
background-color: ${ props => props.colorScheme.steel };
text-align: center;
margin: auto;
${ props => props.type === 'register' && 'margin-top: 5%;' }
`

const FormStyledWrapper = ({ children, callback, ...props }) => {
  const [incomingType] = useState(props.type)

    return (
        <FormStyled
          colorScheme = { props.colorScheme }
          type = { incomingType }
        >
          <form
            id={ incomingType }
            onSubmit = { (e) => callback(e) }
          >
            { children }
          </form>
          { incomingType === 'register' &&
            <div style={{ marginTop: '10%' }}>
              <Link
                to = '/login'
                style = {{ color: colorScheme.blue }}
              >
                <Text
                  size = 'small'
                >
                  Log In
                </Text>
              </Link>
            </div>
          }
        </FormStyled>
    )
}

export default FormStyledWrapper
