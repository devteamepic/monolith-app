import React, { useEffect, useState, useRef } from 'react'
import InputStyled from '../../../styled/atoms/inputStyled'
import colorScheme from '../../../../misc/colorScheme'
import { connect } from 'react-redux'

const Input = ({
    type,
    text,
    placeholder,
    dispatch,
    callback,
    ...props
}) => {
    const inputRef = useRef()
    const [typeOf] = useState(type)
    const [buttonText] = useState(text)
    const [textPlaceholder] = useState(placeholder)
    const [inputStyles, setInputStyles] = useState('')

    useEffect(() => {
        switch(typeOf) {
            case 'button':
            case 'submit':
                setInputStyles(
                    `cursor: pointer;
                     background-color: ${ colorScheme.marigold }`
                )
                break
            case 'text':
            case 'password':
                setInputStyles(
                    `padding: 15px;
                     box-sizing: border-box;
                     &:focus {
                         border: 5px solid ${ colorScheme.marigold }
                     }`
                )
                break
            case 'file':
                setInputStyles(
                    `width: fit-content;
                     font-size: 10px;
                     `
                )
                break
            default:
                break
        }
    }, [typeOf])

    return (
        <InputStyled
          onChange = { e => callback(e.target.value) }
          ref = { inputRef }
          type = { typeOf }
          inputStyles = { inputStyles }
          value = { buttonText }
          placeholder = { textPlaceholder }
        />
    )
}

export default connect() (Input)
